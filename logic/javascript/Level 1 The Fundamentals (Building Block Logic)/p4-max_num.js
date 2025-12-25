//4. Find the maximum from given numbers
const nums  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let max;
for(i=0;i<nums.length;i++)
{
    if(i==0) {max = nums[i];}
    else{
        if(nums[i] > max) max = nums[i];
    }
}
console.log(max);