/**  
Curried Add

Write a function called curriedAdd. If you give this function a number, it returns a new function to you. If you give this function no arguments, it returns the total of all the numbers you’ve passed to it so far.
 */

function curriedAdd(total) {
	// if user enters no argument into curriedAdd()
	if (total === undefined) return 0;
	return function addNext(num) {
		if (num === undefined) return total;
		total += num;
		return addNext;
	};
}

module.exports = { curriedAdd };
