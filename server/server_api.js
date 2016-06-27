
// Airport codes http://www.iata.org/publications/Pages/code-search.aspx
//curl -d @request.json --header "Content-Type: application/json" https://www.googleapis.com/qpxExpress/v1/trips/search?key=your_API_key_here

updateFlightPrice= function(id, newPrice){
    flights.update({_id: id}, {$set: {lastRun: Date(), latestPrice: newPrice }})
}

buildFlightRequest = function(depart, arrive, startDate, endDate){
    oj = {
        passengers: {adultCount: 1}, 
        "slice": [
        {
        "origin": depart,
        "destination": arrive,
        "date": startDate, 
        "maxStops": 0
      },
      {
        "origin": arrive,
        "destination": depart,
        "date": endDate,
        "maxStops": 0
        
      }
    ]
        
    }
    
    return oj
}

getCheapestOption = function(responseJSON){
    res = responseJSON['data']['trips']['tripOption'][0]
    return res
}

getCheapestDetails = function(t){
    runTime = Date()
    outObj = {}
    outObj['price'] = t['saleTotal']
    outObj['departFlightDepartTime'] = t['slice'][0]['segment'][0]['leg'][0]['departureTime']
    outObj['departFlightArrivalTime'] = t['slice'][0]['segment'][0]['leg'][0]['arrivalTime']
    outObj['departFlightOrigin'] = t['slice'][0]['segment'][0]['leg'][0]['origin']
    outObj['departFlightDestination'] = t['slice'][0]['segment'][0]['leg'][0]['destination']
    outObj['departFlightCarrier'] = t['slice'][0]['segment'][0]['flight']['carrier']
    outObj['departFlightNumber'] = t['slice'][0]['segment'][0]['flight']['number']
    outObj['returnFlightDepartTime'] = t['slice'][1]['segment'][0]['leg'][0]['departureTime']
    outObj['returnFlightArrivalTime'] = t['slice'][1]['segment'][0]['leg'][0]['arrivalTime'] 
    outObj['returnFlightOrigin'] = t['slice'][1]['segment'][0]['leg'][0]['origin']
    outObj['returnFlightDestination'] = t['slice'][1]['segment'][0]['leg'][0]['destination']
    outObj['returnFlightCarrier'] = t['slice'][1]['segment'][0]['flight']['carrier']
    outObj['returnFlightNumber'] = t['slice'][1]['segment'][0]['flight']['number']   
    outObj['runTime'] = runTime
    console.log(outObj)
    return outObj
    
}

getFlightPrice = function(flightId, depart, arrive, startDate, endDate){
    HTTP.call("POST", "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyB6IJBNX-o4ZDXrVhshULh2zKJz6lq-J4M", {
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            request: buildFlightRequest(depart, arrive, startDate, endDate)
        }
        
    }, function(err,res){
        console.log(err); 
        console.log(res); 
        //flightHistory.insert(res)
        co = getCheapestOption(res)
        cd = getCheapestDetails(co)
        cd['flightId'] = flightId
        flightHistory.insert(cd)
        updateFlightPrice(flightId, cd['price'])
    })
    
}

Meteor.methods({
    getFlightPrice: function(flightId, depart, arrive, startDate, endDate){
        getFlightPrice(flightId, depart, arrive, startDate, endDate)
    }
})

//flights.remove({}) // remove every post
//flightHistory.remove({})




