flights = new Mongo.Collection('flights');
flightHistory = new Mongo.Collection('flightHistory');

if (Meteor.isServer) {
    Meteor.methods({
        addFlight: function(flightJSON){
            flightJSON['userId'] = this.userId
            return flights.insert(flightJSON)
        }, 
        deleteFlight: function(flightId){
            flights.remove(flightId)
            
        }, 
        modifyFlight: function(flightId, flightJSON){
            flights.update({_id: flightId}, flightJSON)
        }, 
        listFlights: function(){
           flightArray = flights.find().fetch()
           return flightArray
        },
        addHistory: function(historyJSON){
            historyJSON['userId'] = this.userId
            return flightHistory.insert(historyJSON)
        }, 
        deleteHistory: function(historyId){
            flightHistory.remove(historyId)
            
        }, 
        modifyHistory: function(historyId, historyJSON){
            flightHistory.update({_id: historyId}, historyJSON)
        }, 
        listHistory: function(){
           historyArray = flightHistory.find().fetch()
           return historyArray
        },
        updateFlightPrice: function(id, newPrice){
            flights.update({_id: id}, {$set: {lastRun: Date(), latestPrice: newPrice }})
        }
    })


// Publications

 Meteor.publish('flights', function tasksPublication() {
    return flights.find({'userId': this.userId});
  });
  
  Meteor.publish('flightHistory', function tasksPublication() {
    return flightHistory.find({'userId': this.userId});
  });


deleteFlightHistoryWithoutRunTime = function(){
    fhArray = flightHistory.find({runTime: null}).fetch()
    for(var i=0; i<fhArray.length; i++){
        flightHistory.remove({_id: fhArray[i]['_id']})
    }
}


}





if (Meteor.isClient) {
    createFlight = function(flightJSON){
        Meteor.call('addFlight', flightJSON, function(err,res){
            console.log("ADD FLIGHT CALLED")
            console.log(err)
            console.log(res)
        })
    }
    listFlights = function(){
        Meteor.call('listFlights', function(err,res){
            console.log(err)
            console.log(res)
            return res
        })

    }
    modifyFlight = function(id, flightJSON){
        Meteor.call('modifyFlight', id, flightJSON, function(err,res){
            console.log(err)
            console.log(res)
        })

    }
    deleteFlight = function(id){
        Meteor.call('deleteFlight', id,function(err,res){
            console.log(err)
            console.log(res)
        })

    }
    
    


    
}