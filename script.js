const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res=[];
	let sarr=[];
	
	let sum=0;
	for(let i =0;i<arr.length;i++){
		if(sum+arr[i]<=n){
			sum+=arr[i];
			sarr.push(arr[i]);
		}
		else{
			res.push(sarr);
			sum=arr[i];
			sarr=[arr[i]];
		}
	}
	if(sarr.length>0)res.push(sarr);
	return res;
};

 const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
