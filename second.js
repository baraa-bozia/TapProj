
var missingnum=function(nums){
    count = nums.length;
var missing ;
    for (var i = 1; i <= count; i++) {
        if (nums.indexOf(i) == -1) {
          missing=i;
        }
      }
      console.log(missing); 
}
missingnum([9,6,4,2,3,5,7,0,1]);
