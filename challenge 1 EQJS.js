//Row
for (var length = 0; length <7;length++){
	if(length === 0){
		console.log("#");
	}else if(length !== 0){
		var counter = length;
		var string = "#";
		while(counter>0){
			var str2 = "#";
			string = string.concat(str2);
			counter--;
		}
		console.log(string);
	}


}







//Fizz Buzz Challenge
for (var i = 1; i<=100; i++){
	if(i%3==0 && i%5==0){
		console.log('FizzBuzz');
	}else if(i%3 == 0){
		console.log('Fizz');
	}else if(i%5 == 0){
		console.log('Buzz');
	}else{
		console.log(i);
	}
}




//Chess Challenge
//Row
var size = 10
for (var length = 1; length <=size;length++){
	if (length%2 !== 0){
		var counter = 0;
		var string = " ";
		
		while(counter<=size-2){
			if (counter%2==0){
				var str2 = "#";
				string = string.concat(str2);
			}
			else{
				var str3 = " ";
				string = string.concat(str3);

			}
			counter++;
			//console.log(string);
		}
		console.log(string);
	}else{
		var counter = 0;
		var string = "#";
		
		while(counter<=size-2){
			if (counter%2==0){
				var str2 = " ";
				string = string.concat(str2);
			}
			else{
				var str3 = "#";
				string = string.concat(str3);

			}
			counter++;
			//console.log(string);
		}
		console.log(string);
	}


}