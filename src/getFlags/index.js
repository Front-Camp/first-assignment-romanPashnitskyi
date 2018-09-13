/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
function getFlags(a,b) {
    var len = a.length;
    for (var i=0; i < len; i=i+5000) {
        b.unshift.apply( b, a.slice( i, i+5000 ) );
    }
}

export default getFlags;
