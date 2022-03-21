// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
return drivers.slice(0,2);
}

let array = [1,2,3,4,5]

    console.log(returnFirstTwoDrivers(array))

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
    }

    console.log(returnLastTwoDrivers(array))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

/* 
function createFareMultiplier(integer){
return function (value) {let x = value*integer; return x}
} 
 */

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const fareQuintupler = createFareMultiplier(5);

function createFareMultiplier(num){
    const fareMultiplier = function (fare){
        return fare*num;
    }
    return fareMultiplier
    }

function selectDifferentDrivers(arrayOfDrivers, cb){
return cb(arrayOfDrivers);
}

console.log(selectDifferentDrivers(array, returnLastTwoDrivers))