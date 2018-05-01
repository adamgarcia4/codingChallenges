const tree = {
	val: 1,
	left: {
		val: 2,
		left: {
			val: 3,
			left: {
				val: 4,
				left: null,
				right: null
			},
			right: {
				val: 5,
				left: null,
				right: null
			}
		},
		right: {
			val: 6,
			left: null,
			right: null
		}
	},
	right: {
		val: 7,
		left: {
			val: 8,
			left: null,
			right: null
		},
		right: {
			val: 9,
			left: {
				val: 10,
				left: null,
				right: null
			}
			,
			right: null
		}
	}
}

console.log(sum(tree)) // 55

// Recursion

// 1. Base Case
// 2. Make sure that current works

// Node { val, leftNode, righNode}

var testNode = {
	val: 1,
	left: {
		val: 2,
		left: null,
		right: null
	},
	right: null
}

console.log(sum(testNode));

function sum(node) {
	// Base Case
	if(node == null) {
		return 0;
	}

	return node.val + sum(node.left) + sum(node.right);
}



// implement a function that counts the seconds passed up to n
countSeconds(4);// 1 2 3 4
countSeconds(6);// 1 2 3 4 5 6


function countSeconds(n, i = 1) {

	// Base Case to not infinitely recurse
	if(i > n) return;

	setTimeout(function() {
		console.log(i); // 1 to screen
		countSeconds(n, i+1);
	},1000);
}


// setTimeout(() => console.log('hey'), 500)



