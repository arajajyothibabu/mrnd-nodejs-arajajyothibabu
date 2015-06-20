
exports.Sum = function(num1, num2){
    return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
    var i=0,sum=0;
    for(i=0;i<arrayOfNums.length;i++)
    {
        sum += arrayOfNums[i];
    }
    return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
    var i=0,sum=0,k=0,flag =0;
    var tempArray = [];
	for(i = 0; i < arrayOfNums.length; i++) 
	{
		for(var j=0;j< tempArray.length;j++)
            if(tempArray[j] == arrayOfNums[i])
            {
                flag = 1;
                break;
            }
        if(!flag)
        {
            sum += arrayOfNums[i];
            tempArray[k++] = arrayOfNums[i];
        }
        flag = 0;
	}
    return sum;
}

exports.ReverseString = function(str){
  return str.split("").reverse().join(""); 
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
    for(var i=0;i<arrayOfStrings.length;i++)
    {
        arrayOfStrings[i] = exports.ReverseString(arrayOfStrings[i]);
    }
    return arrayOfStrings;
}