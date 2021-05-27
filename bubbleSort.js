/**
 * @param {number[]} nums
 * @return {number[]}
 */
var bubbleSort = function(nums) {
          
    // Uses 2 pointers moving from either end of the array.
    // Sorts the array in place by switching smaller elements to the left
    // side. Anything left of the 'i' pointer is guaranteed to be
    // smaller than anything to the right of that pointer.
    
    var i=0, j=nums.length;
    for (i; i <= j; i++){
        for (j; j>0; j--){
            if(nums[j] < nums[i]){
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp; 
            }
        }
    }    
    
    return nums; 
};
