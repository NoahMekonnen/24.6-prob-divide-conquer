function findProperMid(list){
    let leftIndex = 0;
    let rightIndex = list.length -1
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    let middleVal = list[middleIndex]
    let properMid;

    let lastElement = list[list.length-1]

    while(leftIndex <= rightIndex){
    if (rightIndex - leftIndex >0){
            if (lastElement > middleVal){
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

// [3, 4, 1, 2], 4
// [6, 7, 8, 9, 1, 2, 3, 4], 8

function findRotatedIndex(list,val) {
    let mid = findProperMid(list)
    let new_list = list.slice(mid)
    for (let num of list.slice(0,mid)){
        new_list.push(num)
    }
    let leftIndex = 0
    let rightIndex = new_list.length -1
    let middleVal = new_list[mid]

    let adjusted_mid = mid;
    while(leftIndex <= rightIndex){
        if (middleVal == val){
            if (val < list[0]){
            return adjusted_mid + mid
            }
            else{
                return Math.abs(mid-adjusted_mid)
            }
        }
        else if (middleVal > val){
            rightIndex = adjusted_mid -1
        }
        else{
            leftIndex = adjusted_mid +1
      }
        adjusted_mid = Math.floor((leftIndex+rightIndex)/2)
        middleVal = new_list[adjusted_mid]
    }
    if (middleVal != val){
        return -1
    }
    if (val < list[0]){
        return adjusted_mid + mid
    }
    else{
        return Math.abs(mid-adjusted_mid)
    }
    

}

module.exports = findRotatedIndex
