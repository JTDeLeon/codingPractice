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

//Create the List when given an array
function arrayToList(array){
	var finalValue = array[array.length-1];
	//Takes away the first index value and sets to newValue
	var newValue = array.shift();

	if(newValue!=undefined){
		//Creates List
		var list = {};
		//Assigns newValue to object
		list.value = newValue;
		//Checks to see if last property will be set to null or use recursion
		if(newValue == finalValue){
			list.rest = null;
		}else{
			list.rest = arrayToList(array);
		}
	}
	return list;
}

	



//Produces an array from the list
function listToArray(list){
	var newArray = [];
	//Traverses into the object link
	for(var node = list; node; node = node.rest){
		newArray.push(node.value);
	}
	return newArray;
}


//Prepend : takes an element and a list and creates a new list that adds the element to the front of the input list
function prepend (listObject, element) {
	var newList = {
		value:element,
		rest:listObject
	}
	return newList;
	//return {value:element, rest:listObject};

}


// nth : returns the element at the given position in the list, or undefined. 
function nth(list, element){
	//If the list is empty with no values, then return undefined
	if(!list)
		return undefined;
	//If the index is zero, return the current list's value
	else if(element == 0)
		return list.value;
	/*Otherwise we want to move the list pointer forward by recursion with the 
	next level in the list with element-1 counting down until we reach zero, at that 
	point is when we will have found our object we want to pull the value from*/
	else 
		return nth(list.rest, element-1);

}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(prepend(null,20),10));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

