//21. Find the second largest number in an array.
function slarge(nums){
if(nums.length < 2) return "not possible";
let maxnum = -Infinity , smaxnum = -Infinity ;

for(let i = 0; i < nums.length; i++)
{   
    
    //largest
    if(nums[i] > maxnum){
        smaxnum = maxnum;
        maxnum = nums[i];
    } 
    else if(nums[i] < maxnum && nums[i] > smaxnum){
        smaxnum = nums[i];
    }
}
return { "largest" : maxnum , 
        "second-largest" : smaxnum === -Infinity ? "Not possible" : smaxnum};
}
console.log(slarge([9,9,2,3,4,5,6,7,8,8]));