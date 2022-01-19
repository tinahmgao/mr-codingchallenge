// merge small piece to the final sorted result
const merge = (left, right) => {

  const sortedSlice = [];

  // loop through each slice to sort them and then merge to a new array
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedSlice.push(left.shift());
    }else{
      sortedSlice.push(right.shift())
    }
  }

  //merge sorted slice and any remain element together to finish this turn of sorting
  return [...sortedSlice, ...left, ...right]
}

//recursive merge sort
const mergeSort = array => {
  if(array.length <= 1){
    return array
  }

  //get the middle position of the array to break it down to small pieces
  const sliceIndex = Math.floor(array.length / 2)

  // get slice the array to two pieces
  const leftSlice = array.slice(0, sliceIndex)
  const rightSlice = array.slice(sliceIndex)

  // sort each piece and then merge them
  return merge(
    mergeSort(leftSlice),
    mergeSort(rightSlice)
  )
}

const testArray = [5, 6, 1, 20, 4, 19, 3]
console.log(mergeSort(testArray))
