function sortedFrequency(list,val) {
    let properLeft;
    let properRight;
    let leftIndex = 0;
    let rightIndex = list.length -1
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    let middleVal = list[middleIndex]
    while(leftIndex <= rightIndex && middleIndex < list.length-1){
      if (leftIndex == rightIndex){
          if (middleVal == val && list[middleIndex +1] > middleVal){
              properLeft = list.length -middleIndex -1
          }
          else if (middleVal < val){
              rightIndex = middleIndex -1
          }
          else{
              leftIndex = middleIndex +1
          }
      }
    }
    if (middleIndex == list.length && middleVal >= val){
      properLeft = list.length
    }
    else if (middleIndex == list.length && middleVal < val){
        properLeft = -1
    }

    leftIndex = 0;
    rightIndex = list.length -1
    while(leftIndex <= rightIndex && middleIndex > 0){
        if (leftIndex == rightIndex){
            if (middleVal == val && list[middleIndex -1] < middleVal){
                properRight = list.length -middleIndex -1
            }
            else if (middleVal < val){
                rightIndex = middleIndex -1
            }
            else{
                leftIndex = middleIndex +1
            }
        }
      }
      if (middleIndex == list.length && middleVal >= val){
        properRight = list.length
      }
      else if (middleIndex == list.length && middleVal < val){
          properRight = -1
      }
    
    if ( properLeft == -1 && properLeft == -1){
        return 0
    }
    else{
        return properRight - properLeft +1
    }
}

module.exports = sortedFrequency