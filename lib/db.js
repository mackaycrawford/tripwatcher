flights = new Mongo.Collection('flights');
flightHistory = new Mongo.Collection('flightHistory');
userSettings = new Mongo.Collection('userSettings')

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
        }, 
        addUser: function(userId, email, dailyLimit){
            console.log('called')
            userSettings.insert({userId: userId, email: email, dailyLimit: dailyLimit, dailyUsage: 0 })
        }, 
        incrementUsage: function(){
            d = userSettings.find({userId: this.userId}).fetch()[0]
            dId = d['_id']; 
            dCurrent = d['dailyUsage']; 
            dNew = dCurrent + 1; 
            userSettings.update({_id: dId}, {$set: {dailyUsage: dNew}})
        },
        changeLimit: function(userId, newLimit){
            d = userSettings.find({userId: userId}).fetch()[0]
            dId = d['_id']; 
            userSettings.update({_id: dId}, {$set: {dailyLimit: newLimit}})
            
        }, 
        isCurrentUserUnderDailyLimit: function(){
            d = userSettings.find({userId: this.userId}).fetch()[0]
            currentUsage = d['dailyUsage']
            dailyLimit = d['dailyLimit']
            diff = dailyLimit - currentUsage
            if(diff > 0){
                return true
            } else{
                return false
            }
            
        }
        
    })


// Publications

 Meteor.publish('flights', function tasksPublication() {
    return flights.find({'userId': this.userId});
  });
  
  Meteor.publish('flightHistory', function tasksPublication() {
    return flightHistory.find({'userId': this.userId});
  });
  
Meteor.publish('userSettings', function tasksPublication() {
    return userSettings.find({'userId': this.userId});
  });


deleteFlightHistoryWithoutRunTime = function(){
    fhArray = flightHistory.find({runTime: null}).fetch()
    for(var i=0; i<fhArray.length; i++){
        flightHistory.remove({_id: fhArray[i]['_id']})
    }
}

deleteUserSettings = function(){
    fhArray = userSettings.find().fetch()
    for(var i=0; i<fhArray.length; i++){
        userSettings.remove({_id: fhArray[i]['_id']})
    }
}

//deleteUserSettings()
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