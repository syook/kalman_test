const KalmanFilter = require('kalmanjs').default
const data = require('./data.json')
console.log('data', data);

const myKF = new KalmanFilter({R: 0.01, Q: 5});
data.map(d => {
    // console.log('before filtering',myKF)
    console.log(myKF.filter(d))
    //console.log('after filtering',myKF)

})
