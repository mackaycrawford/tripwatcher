/*
updateFlightsWithUserId = function(){
    res = flights.find().fetch()
    console.log(res)
    u  = Meteor.userId()
    for(var i=0; i<res.length; i++){
        recordId = res[i]['_id']
        console.log("SETTING")
        flights.update({_id: recordId}, {$set: {userId: u}})
    }
}

updateFlightHistoryWithUserId = function(){
    res = flightHistory.find().fetch()
    console.log(res)
    u  = Meteor.userId()
    for(var i=0; i<res.length; i++){
        recordId = res[i]['_id']
        console.log("SETTING")
        flightHistory.update({_id: recordId}, {$set: {userId: u}})
    }
}
*/
