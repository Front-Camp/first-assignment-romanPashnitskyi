/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
function sumElements(array){
var sum = 0;

	for(var i = 0; i < array.length; i++){
		if (isFinite(array[i])) {
			
			sum += Number(array[i]);
		}
	}
	return sum;
}

export default sumElements;
