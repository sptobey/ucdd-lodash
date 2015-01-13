/**
 * Gets the first element of `array`.
 *
 * @example
 *
 * _.first([1, 2, 3]);
 * // => 1
 *
 * _.first([]);
 * // => undefined
 */
function first(array) {
    if (array.length === 0)
        return undefined
    else
        return array[0]
}

/**
 * Gets all but the first element of `array`.
 *
 * @example
 *
 * _.rest([1, 2, 3]);
 * // => [2, 3]
 */
function rest(array) {
    
    return array.splice(1)
}

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 *
 * @example
 *
 * _.indexOf([1, 2, 3, 1, 2, 3], 2);
 * // => 1
 *
 */
function indexOf(array, value) {
	for(var i = 0; i < array.length; i++) {
		if(array[i] == value) {
			return i;
		}
	}
	return -1;
}

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
    var compacted = [];
    var len = array.length;
    for (var i = 0 ; i < len ; i++){
        if(array[i]){
            compacted.push(array[i])
        }
    }
    return compacted;
}

/**
 * Gets the value of a specified property from all objects in an array
 *
 *	@example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 }
 * ];
 *
 * _.pluck(users, 'user');
 * // => ['barney', 'fred']
 *
 */
function pluck(array, key) {
    return "not yet implemented"
}


/**
 * Creates an array excluding all provided values
 *
 * @example
 *
 * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
 * // => [2, 3, 4]
 */
function without(array) {
	// Hint: Read this article about using the "arguments" variable
	// to access all provided values
	//
	// http://www.w3schools.com/js/js_function_parameters.asp
	//
	//

    return "not yet implemented"
}

// Export functions
var lib = {}
lib.first = first
lib.rest = rest
lib.indexOf = indexOf
lib.compact = compact
lib.without = without
lib.pluck = pluck

module.exports = lib
