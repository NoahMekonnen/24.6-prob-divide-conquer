function findFloor(list,val) {
    let leftIndex = 0;
    let rightIndex = list.length -1
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    let middleVal = list[middleIndex]
    while(leftIndex <= rightIndex){
        if (middleVal == val){
            return middleIndex
        }
        else if (middleVal > val){
            rightIndex = middleIndex - 1
        }
        else{
            leftIndex = middleIndex +1
        }
    }

    return -1
}


module.exports = findFloor