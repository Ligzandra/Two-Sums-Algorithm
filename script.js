var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        for(var x=i+1;x<nums.length;x++){
        checkSum = nums[i]+nums[x];
        if(checkSum == target){
            return [nums[i],nums[x]]
        }
      }
    }
    
};


console.log(twoSum([2,7,11,15],9),"target: 9")
console.log(twoSum([3, 2, 4],5),"target: 5")
console.log(twoSum([3,6,4,2],6),"target: 6")