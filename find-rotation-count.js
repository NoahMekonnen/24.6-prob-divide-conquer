function findProperMid(list){
  let leftIndex = 0;
  let rightIndex = list.length -1
  let middleIndex = Math.floor((leftIndex+rightIndex)/2)
  let middleVal = list[middleIndex]
  let properMid;

  let lastElement = list[list.length-1]

  while(leftIndex <= rightIndex){
  if (rightIndex - leftIndex >0 && middleIndex > 0){
          if (lastElement > middleVal && middleVal < list[middleIndex-1]){
              return middleIndex
          }
          else if (lastElement > middleVal && middleVal >= list[middleIndex-1]){
            rightIndex = middleIndex -1
        }
          else if (lastElement < middleVal ){
              leftIndex = middleIndex +1
          }
          else{
              return middleIndex
          }
      }
  else{
      return middleIndex
  }
      middleIndex = Math.floor((leftIndex+rightIndex)/2)
      middleVal = list[middleIndex]
    }
  return Math.max(rightIndex,leftIndex)
}
function findRotationCount(list) {
  let mid = findProperMid(list)
  return mid
}

module.exports = findRotationCount

// [15, 18, 2, 3, 6, 12]
// [7, 9, 11, 12, 5]