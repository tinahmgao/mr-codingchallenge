# mr-codingchallenge
## The efficiency of merge sort
The merge sort algorithm has the time complexity of O(logN), meaning that the time required to execute N number of elements will rise in logarithmic proportion. If sorting an array of 10 elements requires 1ms, sorting an array of 100 elements will take 2ms.
Merge sort is much more efficient in time complexity than the insertion sort, but merge sort also consumes more space because the sorting is not in-place and the recursive call will be threaded. The merge sort will take O(N) space to perform the sorting.

## When to use the factory method pattern
- A class cannot anticipate the type of objects it needs to create beforehand.
- A class requires its subclasses to specify the objects it creates.
- You want to localize the logic to instantiate a complex object.

The Factory Method pattern is useful when you need to abstract the creation of an object away from its actual implementation. Let’s say the factory will be building a “MobileDevice” product type. A mobile device could be made up of any number of components, some of which can and will change later, depending on advances in technology.
