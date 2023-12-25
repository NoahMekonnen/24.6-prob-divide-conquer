function findProperMid(list){
    let leftIndex = 0;
    let rightIndex = list.length -1
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    let middleVal = list[middleIndex]
    let properMid;

    let lastElement = list[list.length-1]

    while(leftIndex <= rightIndex && middleIndex < list.length-1){
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



function findRotatedIndex(list,val) {
    let mid = findProperMid(list)
    let new_list = list.slice(mid)
    for (let num of list.slice(0,mid)){
        new_list.push(num)
    }

    let leftIndex = 0
    let rightIndex = new_list.length -1
    let middleVal = new_list[mid]

    let adjusted_mid = -1;
    while(leftIndex <= rightIndex){
        if (leftIndex == rightIndex){
            if (middleVal ==  val){
                adjusted_mid = mid
            }
            else if (middleVal > val){
                rightIndex = middleIndex -1
            }
            else{
                leftIndex = middleIndex +1
            }
        }
      }
    if (adjusted_mid == -1){ 
        return -1
    }
    return adjusted_mid - mid
    

}

module.exports = findRotatedIndex
