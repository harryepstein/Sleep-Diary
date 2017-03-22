"use strict";
app.factory('SleepDataFactory', function ($q, $http, FBCreds) {




  let getSleepData = function(){
    var sleepObjects = [];

    return $q((resolve, reject) =>
$http.get(`${FBCreds.databaseURL}/SleepData.json`)
  .then((SleepDataList) => {

console.log(SleepDataList);

  var itemCollection = SleepDataList.data;
          Object.keys(itemCollection).forEach(function(key){
            itemCollection[key].id=key;
            sleepObjects.push(itemCollection[key]);
          });

    resolve(sleepObjects)

  })
  .catch((error) => {
    reject(error);
  })
    )};


let getOneSleepData = function (sleepObjectId) {
  return $q( (resolve, reject) => {
    $http.get(`${FBCreds.databaseURL}/SleepData/${sleepObjectId}.json`)
    .then((SleepData) => {
      resolve(SleepData);
    })
    /* body... */
  })


  /* body... */
}



    let postSleepData = function(sleepObject){
    return $q((resolve, reject) =>
$http.post(`${FBCreds.databaseURL}/SleepData.json`, angular.toJson(sleepObject))

  .then((SleepDataList) => {

    resolve(SleepDataList)

  })
  .catch((error) => {
    reject(error);
  })
    )};


  let updateSleepData = function(id, sleepObject){ console.log(sleepObject);
    return $q((resolve, reject) =>
$http.post(`${FBCreds.databaseURL}/SleepData/${id}.json`, angular.toJson(sleepObject))

  .then((SleepDataList) => {

    resolve(SleepDataList)

  })
  .catch((error) => {
    reject(error);
  })
    )};

// RelatedEvent

    // let editSleepData = function (sleepObject, sleepObjectId) {
    //   return $q((resolve, reject) => $http.patch(`${FBCreds.databaseURL}/SleepData/${sleepObjectId}.json`, sleepObject)

    //   .then ((SleepDataList) => {
    //     resolve(SleepDataList)
    //   })
    // }





let deleteSleepData = function (sleepObjectId) {
  return $q( (resolve, reject) => {
    $http.delete(`${FBCreds.databaseURL}/SleepData/${sleepObjectId}.json`)
    .then((SleepData) => {
      resolve(SleepData);
    })
    /* body... */
  })


  /* body... */
}





  return {getSleepData, postSleepData, deleteSleepData, getOneSleepData, updateSleepData};

});
