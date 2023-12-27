function findRight(list,val){
    let leftIndex = 0
    let rightIndex = list.length -1
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    let middleVal = list[middleIndex]
  
    while(leftIndex <= rightIndex && middleIndex < list.length-1){
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    let middleVal = list[middleIndex]
      if (leftIndex == rightIndex){
          if (middleVal == val && list[middleIndex +1] > val){
              return middleIndex
          }
          else {
              return -1
          }
      }
      else {
        
        if (middleVal > val){
          rightIndex = middleIndex -1
        }
        else if (middleVal < val){
          leftIndex = middleIndex +1
        }
        else if (middleVal == val && list[middleIndex +1] > val ){
          return middleIndex
        }
        else{
          leftIndex = middleIndex +1
        }
        }
      }
    if (middleIndex == list.length -1 && middleVal == val){
      return 0
    }
    return -1
  }
  
function findLeft(list,val){
    let leftIndex = 0;
    let rightIndex = list.length -1
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    let middleVal = list[middleIndex]
  
    while(leftIndex <= rightIndex && middleIndex > 0){
      if (leftIndex == rightIndex){
          if (middleVal == val && list[middleIndex -1] < middleVal){
              return middleIndex
          }
          else {
              return -1
          }
      }
      else {
        
        if (middleVal > val){
          rightIndex = middleIndex -1
        }
        else if (middleVal < val){
          leftIndex = middleIndex +1
        }
        else if (middleVal == val && list[middleIndex -1] < middleVal ){
          return middleIndex
        }
        else{
          rightIndex = middleIndex -1
        }
        }
        middleIndex = Math.floor((leftIndex+rightIndex)/2)
        middleVal = list[middleIndex]
      }
      if (middleIndex == 0 && middleVal == val){
          return 0
      }
      return -1

  
  }
  
  // [1, 1, 2, 2, 2, 2, 3], 2
  // [1, 1, 2, 2, 2, 2, 3], 3
  
function sortedFrequency(list,val) {
    if (findRight(list,val) == -1){
        if(findLeft(list,val) == -1){
            return -1
        }
    return 1
    }
   
  return findRight(list,val) - findLeft(list,val) +1
}

// [1, 1, 2, 2, 2, 2, 3], 1


module.exports = sortedFrequency