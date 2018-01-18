
//Returns the minimum value of the passed numbers
function min(a,b) {
	if (a>b){
		return b;
	}else{
		return a;
	}
}

console.log(min(4,5)); 



//Function to check any number to see whether they are even or odd using recursion. 
function isEven(n){
	//If the number is zero, exit the recursion and print even
	if (n==0){
		console.log("EVEN");
	}
	//Checks for the odd number
	else if (n==1 || n==-1){
		console.log("ODD");
	}
	//If the number is greater than 0 then N-2 recursive
	else if (n > 0){
		isEven(n-2); 
	}
	//Handles numbers that are negative
	else if(n < 0){
		isEven(n+2);
	}

}


//Character counter 
function countChar(string,lookupValue){

	//Set Counter to 0
	var counter = 0;

	//Traverse string to check if the character at position i == lookup value
	for(var i = 0 ; i<string.length; i++){
		if(string.charAt(i)==lookupValue){
			//increment counter
			counter++;
		}
	}
	//Print result to console
	console.log("The number of " + lookupValue+ " counted was "+counter);
}

