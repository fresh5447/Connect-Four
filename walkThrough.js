var nums = [1,2,3,4,5,6,7,8,9,10];

nums[0];

for(var i = 0; nums.length > i; i++){

	console.log("I am this number in the loop " + nums[i]);
	for(var i = 0; nums.length > i; i++);
		console.log("I am the inner loop " + nums[i]);
};