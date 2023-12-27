function findFloor(list,val) {
    let leftIndex = 0;
    let rightIndex = list.length -1
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    let middleVal = list[middleIndex]
    while(leftIndex <= rightIndex){
        if (middleIndex > 0){
        if (rightIndex - leftIndex >0){
            if (middleVal == val){
                return middleVal
            }
            else if (middleVal > val){
                rightIndex = middleIndex - 1
            }
            else{
                leftIndex = middleIndex +1
            }
        }
        else{
            if (middleVal > val){
                return list[middleIndex -1]
            }
            else if(middleVal < val){
                return middleVal
            }
            else{
                return middleVal
            }
        }
    }
    else if(middleVal > val){
        return -1
    }
    else{
        return middleVal
    }
        middleIndex = Math.floor((leftIndex+rightIndex)/2)
        middleVal = list[middleIndex]
}
    return -1
}


module.exports = findFloor