function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
        const leftArr = arr.slice(0, Math.floor(arr.length/2))
        const rightArr = arr.slice(Math.floor(arr.length/2))
        console.log(leftArr)
        console.log(rightArr)
        const sortedLeft = mergeSort(leftArr)
        const sortedRight = mergeSort(rightArr)
        const merged = merge(sortedLeft, sortedRight)
        return merged
}

function merge(left, right){
        let mergedArr = []
        const total = left.length+right.length
        while(mergedArr.length < total){
            if((left.length!==0)&&(right.length!==0)){
                if(left[0] < right[0]){
                    mergedArr.push(left.shift())
                } else {
                    mergedArr.push(right.shift())
                }}
            if((left.length === 0)&&(right.length !== 0)){
                mergedArr.push(right.shift())
            }
            if((right.length === 0)&&(left.length !== 0)){
                mergedArr.push(left.shift())
            }
        }
    return mergedArr
}

const arr = [12, 0, 4, 9 , 15, 2, 3,8,5, 1, 0 ,3, 5, 2, 11, 15, 2, 4]

console.log(mergeSort(arr))
