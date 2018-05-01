var tree = {
	data: 1,
	left: {
		data: 2,
		left: {
			data: 8,
			left: {
				data: 9,
				left: null,
				right: null
			},
			right: {
				data: 10,
				left: null,
				right: null
			}
		},
		right: null
	},
	right: {
		data: 3,
		left: {
			data: 5,
			left: null,
			right: null
		},
		right: null
	}
};

function getPathToNode() {
	var pathA = [];
	var pathB = [];
	var aFound = foundNode(tree, pathA, 9);
	var bFound = foundNode(tree, pathB, 10);

	pathA = pathA.reverse();
	pathB = pathB.reverse();

	var sameCounter = 0;

	while (sameCounter < pathA.length && pathA[sameCounter] == pathB[sameCounter]) {
		sameCounter++;
	}
	console.log(pathA[sameCounter - 1]);
}

getPathToNode();

// returns boolean if we find a match!
// Node is current node to examine
// pathArr is the complete path of the parent of the 'node' element
// nodeVal is the value of the given node
function foundNode(node, pathArr, nodeVal) {

	// Base Case
	// If node is null, then we didn't find the node and pop upwards.
	if (node == null) return false;

	// console.log('patharr at beg is', pathArr);
	// console.log('node is: ', node.data);

	// Match!
	if (node.data == nodeVal) {
		pathArr.push(node.data);
		return true;
	} else {
		// No Match, so we should check to see if left has a match

		// PathArr only updates if node is found
		if (foundNode(node.left, pathArr, nodeVal)) {
			pathArr.push(node.data);
			return true;
		} else if (foundNode(node.right, pathArr, nodeVal)) {
			pathArr.push(node.data);
			return true;
		} else {
			return false;
		}
	}

}