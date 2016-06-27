  Template.app.onRendered(function() {

    // Subscribe to the data needed for the page
    Meteor.subscribe("flights")
    Meteor.subscribe("flightHistory")

    // Static data needed for the user interface
    airportArray = ['ORD', 'DAL', 'DFW', 'LAX', 'DEN', 'SFO', 'PHX', 'MDW', 'SEA', 'BNA']

    // Data Transformation

    parseDeleteButton = function(deleteString){
      returnString = deleteString.split("-")[1]
      return returnString
    }
    parseFetchButton = function(fetchString){
      returnString = fetchString.split("-")[1]
      return returnString
    }
    
    
    formatDates = function(data, fieldName) {
      for (var x = 0; x < data.length; x++) {
        var today = data[x][fieldName]
        var today = new Date(today) 
        var today = today.toLocaleDateString(); 
        //today = moment(today).toDate();
        //today = moment(today).format('D MMM, YYYY');
        console.log(today)
        data[x][fieldName] = today

      }
      return data
    }
    

    
    
    // Grid and database interaction 
    
    $("#saveNewFlightButton").on('click', function(){
      saveNewFlight()
    })
    flights.find().observeChanges({
        added: function(id, fields) {
          loadOverviewGrid(flights.find().fetch())
          console.log("CALL TO DATABASE MADE: OBSERVECHANGES")
          console.log("LOAD OVERVIEW CALLED: OBSERVECHANGES")
        },
        changed: function(id, fields) {
          loadOverviewGrid(flights.find().fetch())
          console.log("CALL TO DATABASE MADE: OBSERVECHANGES")
          console.log("LOAD OVERVIEW CALLED: OBSERVECHANGES")
        },
        removed: function(id) {
          loadOverviewGrid(flights.find().fetch())
          console.log("CALL TO DATABASE MADE: OBSERVECHANGES")
          console.log("LOAD OVERVIEW CALLED: OBSERVECHANGES")
        }
      });

    saveNewFlight = function() {
      t = $container.handsontable('getData');
      t.pop()
      for (var x = 0; x < t.length; x++) {
        if (t[x]['_id'] == null) {
          console.log("LINE IS NULL")
          delete t[x]['_id']
          createFlight(t[x])
        }
        if (t[x]['_id'] != null) {
          // Commenting out update of an existing flight
          //modifyFlight(t[x]['_id'], t[x])
        }
      }
    }

    // Grid Interface items

    spareRowReleaser = function(instance, td, row, col, prop, value, cellProperties) {
      Handsontable.renderers.TextRenderer.apply(this, arguments);
      var rows = instance.countRows() - 1;
      if (row === rows) {
        cellProperties.readOnly = false
      }
    }
    
    addDeleteAndFetchButtons = function(data) {
      for (var x = 0; x < data.length; x++) {
        data[x]['deleteButton'] = "<button class='button btn btn-danger btn-xs deleteButtonClass' id='delete-" + data[x]['_id'] + "'> Delete </button>";
        data[x]['fetchButton'] = "<button class='button btn btn-primary btn-xs fetchButtonClass' id='fetch-" + data[x]['_id'] + "'> Fetch </button>";
      }
      return data
    }

    deleteButtonListener = function(){
      $(".deleteButtonClass").on('click', function(){
        console.log("deleteButtonClass clicked")
        deleteId = $(this).attr('id')
        deleteId = parseDeleteButton(deleteId)
        deleteFlight(deleteId)
      })
    }
    fetchButtonListener = function(){
      $(".fetchButtonClass").on('click', function(){
        console.log("fetchButtonClass clicked")
        fetchId = $(this).attr('id')
        fetchId = parseFetchButton(fetchId)
        console.log(fetchId)
        dId = fetchId;
        fData = flights.find({_id: dId}).fetch()[0]
        console.log("CALL TO DATABASE MADE")
        Meteor.call('getFlightPrice', dId, fData['fromAirportCode'], fData['destinationAirportCode'], fData['startDate'], fData['endDate'], function(err,res){
          console.log(err)
          console.log(res)
        })
      })
    }

    // Loading the Detail Grid 

    loadDetailGrid = function(data) {
      data = formatDates(data, 'runTime')
      $container2 = $("#detailGrid");
      $container2.handsontable({
        data: data,
        rowHeaders: false,
        readOnly: true,
        colHeaders: ['Date', 'Depart Carrier', 'Depart Flight', 'Return Carrier', 'Return Flight', 'price'],
        columns: [{
            data: "runTime"
          }, {
            data: "departFlightCarrier"
          }, {
            data: "departFlightNumber"
          }, {
            data: "returnFlightCarrier"
          }, {
            data: "returnFlightNumber"
          }, {
            data: "price"
          }

        ],
        contextMenu: false,
        minSpareRows: 0,
        minSpareCols: 0
      });
    }

    // Loading the Overview Grid
    
    loadOverviewGrid = function(data) {
      data = addDeleteAndFetchButtons(data)
      data = formatDates(data, 'lastRun')
      $container = $("#overviewGrid");
      $container.handsontable({
        data: data,
        afterSelection: function() {
          console.log("AfterSelectionCalled")
          sel = $container.handsontable('getSelected')[0]
          d = $container.handsontable('getData')[sel]['_id']
          dt = flightHistory.find({
            flightId: d
          }).fetch()
          console.log("CALL TO DATABASE MADE")
          loadDetailGrid(dt)
          //oadDetailChart(dt)
        },
        rowHeaders: false,
        colHeaders: ['Friendly Name', 'From', 'To', 'Depart', 'Return', 'Last Check', 'Price', 'delete', 'fetch'],
        columns: [{
            data: "flightGroup"
          }, {
            data: "fromAirportCode",
            type: 'autocomplete',
            source: airportArray,
            strict: true,
            visibleRows: 4
          }, {
            data: "destinationAirportCode",
            type: 'autocomplete',
            source: airportArray,
            strict: true,
            visibleRows: 4

          }, {
            data: "startDate",
            type: 'date',
            dateFormat: 'YYYY-MM-DD',
            correctFormat: true
              //defaultDate: '01/01/1900'

          }, {
            data: "endDate",
            type: 'date',
            dateFormat: 'YYYY-MM-DD',
            correctFormat: true
              //defaultDate: '01/01/1900'
          }, {
            data: "lastRun",
            readOnly: true
          }, {
            data: "latestPrice",
            readOnly: true
          }, {
            data: "deleteButton",
            renderer: "html",
            readOnly: true
          }, {
            data: "fetchButton",
            renderer: "html",
            readOnly: true
          }

        ],
        readOnly: true,
        contextMenu: false,
        minSpareRows: 1,
        minSpareCols: 0,
        readOnly: true,
        cells: function(row, col, prop) {
            var cellProperties = {};
            var rows = $container.handsontable('countRows') - 1;
            if (row === rows) {
              cellProperties.readOnly = false
            }
            return cellProperties;
          }
      });
      
      deleteButtonListener()
      fetchButtonListener()
    }

  // Highcharts functions
  
  loadDetailChart = function(data){
    categoriesArray = _.pluck(data, 'runTime')
    datapointsArray = _.pluck(data, 'price')
    console.log(datapointsArray)
    for(var i=0; i<datapointsArray.length; i++){
      console.log(datapointsArray[i])
      datapointsArray[i] = parseInt(datapointsArray[i].substring(3, datapointsArray[i].length) )
      //td.substring(3, td.length)
    }
    console.log(datapointsArray)
    constructDetailChart(categoriesArray, datapointsArray)
    
  }
  
  constructDetailChart = function(categoriesArray, datapointsArray){
        $('#detailChart').highcharts({
                chart: {
            type: 'line',
            width: 300
        },
        
        
        title: {
            text: '',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: categoriesArray
        },
        yAxis: {
            title: {
                text: 'Price'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'horizontal',
            //align: 'bottom',
            verticalAlign: 'top',
            borderWidth: 0
        },
        series: [{
            name: 'Flight',
            data: datapointsArray
        }]
    });
    
  }




  $(document).ready(function() {
      console.log("Template App Document Ready")
      Meteor.subscribe("flights", function() {
        loadOverviewGrid(flights.find().fetch())
        console.log("CALL TO DATABASE MADE")
        console.log("LOAD OVERVIEW CALLED: METEOR SUBSCRIBE")
      })
    })
  })
