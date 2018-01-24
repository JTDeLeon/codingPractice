// Exercise 1 : Sum of range

function range (start, end, step){
	var array = [];

	//Checks for step and defaults to 1 if not set
	if(step==undefined){
		step = 1;
	}
	
	if(step>0){
		//Add in array for positive
		for (var a = start; a <= end; a+=step){
			//Pushes the element to array
			array.push(a);
		}
		return array;
	}
	else if(step<0){
		//Add in array for negatives

		//Alternate Solution: 
			// var b = start;
			// while(b >= end){
			// 	// array.push(b);
			// 	console.log(b);
			// 	b=b+step;
			// }

		//Note: Have to add step because step is negative already!! 
		for (var a = start; a >= end; a+=step){
			//Pushes the element to array
			array.push(a);
		}
		return array;

	}
}

function sumOfArray(array){
	//initializes our total var
	var total = 0;
	//sums up the array elements
	for(var i = 0; i < array.length; i++){
		total += array[i];
	}
	return total;
}


//Reverse an array challenge: 

function reverseArray (array){
    var newArray = [];
    // will iterate array
    var counter = 0;

    for(var i = array.length-1; i>=0; i--){
        newArray[counter] = array[i];
        counter += 1;
    }
    return newArray;
};

 

function reverseArrayInPlace(array){

	this.array = reverseArray(array);
	//Creates a public array that changes the array to reverse order
};


//List Function Challenge: 

//Create the List when given [1,2,3]
function arrayToList(array){
//NOTE NEED TO FIND A WAY TO MAKE THIS DYNAMIC	
	var list = {
	value:array[0],
	rest:{
		value:array[1],
		rest:{
			value:array[2],
			rest:null
			}
		}
	}
	return list;
}

	



//Produces an array from the list
function listToArray(object){
	var newArray = [];

//NOTE NEED TO FIND A WAY TO MAKE THIS DYNAMIC
	newArray[0] = object.value;
	
	newArray[1] = object.rest.value;
	
	newArray[2] = object.rest.rest.value;

	return newArray;
}


//Prepend : takes an element and a list and creates a new list that adds the element to the front of the input list
function prepend (listObject, element) {
	var newList = {
		value:element,
		rest:listObject
	}
	return newList;

}


// nth : returns the element at the given position in the list, or undefined. 
function nth(listObject, element){
	var newArray = listToArray(listObject);

	if(newArray[element] == undefined){
		return undefined;
	}else{
		return newArray[element];
	}

}

