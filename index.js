const {nextISSTimesForMyLocation} = require('./iss');

/* fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('146.70.112.150', (error, data)=> {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coordinates:' , data);
});
const testCoords = { latitude: '49.27670', longitude: '-123.13000' }
fetchISSFlyOverTimes(testCoords, (error, data)=> {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned risetimes and durations:' , data);
});
*/

const printPassTimes = function(passTimes) {
  for (const x of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(x.risetime);
    const duration = x.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});