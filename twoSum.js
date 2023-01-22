let  nums = [2,7,11,15], target = 9
// jkhkjkk
var twoSum = function(nums, target) {
    for(let i=0;i<=nums.length-1;i++)
{
    for(let j=0;j<nums.length-1;j++){
        if(i!=j){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
}
};
console.log(twoSum(nums,target));