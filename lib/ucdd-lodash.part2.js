/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0);
 * // => []
 */
function range(start, end) {
    var out = [];
    if(arguments.length > 1) {
        startNum = start;
        endNum = end;
    } else {
        // I like my way more but it does not match...
        //startNum = start < 0 ? start+1 : 0;
        //endNum = start < 0 ? 1 : start;
        startNum = 0;
        endNum = start < 0 ? 0 : start;
    }
    for(var i = startNum; i < endNum; i++) {
        out.push(i);
    }
    return out;
}


/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names.
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 */
function pick(object, propertyNames) {
    var out = new Object();
    if(arguments.length < 2) {
        return out;
    }
    var len = propertyNames.length;
    for(var i = 0; i < len; i++) {
        if(object[propertyNames[i]]) {
            out[propertyNames[i]] = object[propertyNames[i]];
        }
    }
    return out;
}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) {
    var len = collection.length;
    for(var i = 0; i < len; i++) {
        if(predicate(collection[i])) {
            return true;
        }
    }
    return false;
}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) {
    var len = collection.length;
    for(var i = 0; i < len; i++) {
        if( !(predicate(collection[i])) ) {
            return false;
        }
    }
    return true;
}

/**
 * Iterates over elements of `collection`, returning the first element
 * that have the properties of the given
 * object, else `false`.
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 *
 * _.find(users, { 'age': 1 })
 * // => { 'user': 'pebbles', 'age': 1,  'active': false }
 *
 */
function find(collection, object) {
    // shortcut to poor input
    if(arguments.length == 1) {
        return collection[0];
    }
    
    var len = collection.length;
    for(var i = 0; i < len; i++) {
        // Has no effect:
        //if(object == null) {return undefined;}
        var match = true;
        for(var attribute in object) {
            if(object.hasOwnProperty(attribute) && 
               collection[i].hasOwnProperty(attribute)) {
                if(collection[i][attribute] != object[attribute]) {
                    match = false
                    break;
                } // else good
            } else {
                return undefined;
            }
        }
        if(match) {
            return collection[i];
        }
    }
    return undefined;
}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib
