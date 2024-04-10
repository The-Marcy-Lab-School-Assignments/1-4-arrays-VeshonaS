const addToFrontOrBack = (arr, value, isFront) => {
if (isFront){
  arr.unshift(value)
} else {
  arr.push(value)
}
// console.log(addToFrontOrBack('value'))

};

const reverseString = (str) => {
  let splitstr = str.split("")
  let backwards = splitstr.reverse()
  return backwards.join("")
};
// console.log(reverseString('hello'))

const newArrayFullOf = (value, numOfValue) => {
 let arrValue = new Array(numOfValue) 
return arrValue.fill(value , 0, numOfValue)
};
// console.log(newArrayFullOf('bike', 6))

const insertIntoMiddle = (arr , value) => {
  return arr.splice((arr.length/2), 0, value)
};
// let arr = [1,2,3,4,5]
// insertIntoMiddle(arr,'yo')
// console.log(arr);

const deleteFromMiddle = (arr) => {
return arr.splice((arr.length/2),1)
};
// console.log(deleteFromMiddle([1,2,3,4,5,6,7,8]))

const isRightIndex = (arr, value , index) => {
  for (i = 0; i < arr.length; i++){
    if (arr[index] === value){
      return true 
    } else {
      return false 
    }
  }

};
// console.log(isRightIndex([1,2,3,4,5,6], 2, 5))

const roundAllNumsDown = (arr) => {
  
 return arr.map(num => Math.floor(num))
}
let arr = [2.7, 4.6, 6.5, 8.3]
// console.log(roundAllNumsDown(arr))

const getAllYCoordinates = (arrOfCoords) => {
  return arrOfCoords.map(newCoords => newCoords[1])
};

// console.log(getAllYCoordinates([[1, 2], [3, 4], [5, 6]]))
module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
