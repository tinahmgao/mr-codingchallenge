// merge two small slices into sorted result one
const merge = (leftSlice, rightSlice) => {

  const sortedSlice = [];

  let leftIndex = 0;
  let rightIndex = 0;

  // loop through each slice to sort them and then merge to a new array
  while (leftIndex < leftSlice.length && rightIndex < rightSlice.length) {
    const leftElement = leftSlice[leftIndex]
    const rightElement = rightSlice[rightIndex]
    if (leftElement < rightElement) {
      sortedSlice.push(leftElement);
      leftIndex++
    }else{
      sortedSlice.push(rightElement)
      rightIndex++
    }
  }

  //merge sorted slice and any remain element together to finish this turn of sorting
  return [...sortedSlice, ...leftSlice.slice(leftIndex), ...rightSlice.slice(rightIndex)]

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
