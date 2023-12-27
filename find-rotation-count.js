function properMid(list){
    let leftIndex = 0;
    let rightIndex = list.length -1
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    let middleVal = list[middleIndex]
    let properMid;

    let lastElement = list[list.length-1]

    while(leftIndex <= rightIndex && middleIndex < list.length-1){
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    let middleVal = list[middleIndex]
            if (lastElement > middleVal && rightIndex - leftIndex >1){
                rightIndex = middleIndex -1
            }
            else if (lastElement < middleVal ){
                leftIndex = middleIndex +1
            }
            else{
                
            }
      }
      if (middleIndex == list.length && middleVal == 0){
        return 1
      }
    properMid = Math.max((rightIndex,leftIndex))
    return properMid
}

function findRotationCount(list) {
  let mid = properMid(list)
  return list.length - mid
}

module.exports = findRotationCount