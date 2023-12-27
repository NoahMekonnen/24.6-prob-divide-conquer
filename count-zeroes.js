
function countZeroes(list) {
  let leftIndex = 0;
  let rightIndex = list.length -1
  let middleIndex = Math.floor((leftIndex+rightIndex)/2)
  let middleVal = list[middleIndex]

  while(leftIndex <= rightIndex && middleIndex < list.length-1){
  let middleIndex = Math.floor((leftIndex+rightIndex)/2)
  let middleVal = list[middleIndex]
    if (leftIndex == rightIndex){
        if (middleVal == 1 && list[middleIndex +1] == 0){
            return list.length -middleIndex -1
        }
        else if (middleVal == 0){
            return list.length
        }
        else{
            return 0
        }
    }
    else {
      
      if (middleVal == 1 && list[middleIndex +1] == 1){
        leftIndex = middleIndex +1
      }
      else if (middleVal == 0){
        rightIndex = middleIndex -1
      }
      else{
        return list.length -middleIndex -1
      }
      }
    }
  if (middleIndex == list.length -1 && middleVal == 0){
    return 1
  }
  return 0
}

// [1,1,1,1,0,0] 4
// [1,0,0,0,0] 2
// [0,0,0] 3
// [1,1,1,1] 0


module.exports = countZeroes

