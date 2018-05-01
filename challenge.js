//-----------Problem 1-------------

// This problem can be solved in O(n) time by keeping a counter that increments or decrements given a "(" or ")" token respectively.

function problem1() {
   var inputStr = "((((((())))((()(((())))))(()()((())(())(()((())())((((()()))(((()))))))()))(())))()(()()(((())))()))))))(()()())())((((()()))))(((())))))(())(()(((()))()(())(()()())()(()))(()()))(((((())((()))))()))))))))))))()(()(())())))()(()))()())(((())((())((((()())((()(((((((()()()())())((())))(())()))(()())))()))(((()()()(()()()())((()))(()))()())))()((()()(((()(()(((())(((((()((()(())(()(((()()))(())(((())((((((((())))()(()((()()))(()()()(()))))))))()()()))())(()((((())())()(((((((()()(()())())))())(()))))(()()(()(()(()()((()()()))()((((()(((()(()()))(()(())())))()()()(((()(())())))((()()))(()))((()()(()()()()(()())(())))())()()))())(())(()))))()())())((()))((())())))(()(()()()(()))(((())(((()(((((()())())))())()))))(()(()))))())(())()((())()())))((()(()))))))(()(()()))((()))()((())(()())))))(())(()()(()))))))((()()))(()(()))((())()())(((()()(()))((((())((((()))()()()(()()))()(()())(()(())((())(((())()((()(())((()))(((((())(())))((())())))())())(()(())()()(())())())(((((((()()()))))(())(()()(()()))()(()))))())))((((()))((()()))))))))(()(())))((()(())(()()((()))((((((())((()()()((()()()(((()))))())(()()()()(())(())(())())(()(()()(()(()(((()()(((()))()(((()(()(((()())())())))()()()))((())()()())()())()()()))((()(()()()()())())(())))((()))())(((())(()(((((()()(((((((()(()())))))((()))((()))()((((((()))(((()(()(((()()(())))(()()()((()))()(())))(()())((())()((()())))))()(()))()(((()))())))(()()(()())((())()())))(()())((()())())())((())()()(()))))))))((()(())(()())(((()()()))(()(()(()()))))((()()))()()))))))()(()))()()())((((()))(())()(())()))))))(()((()()(((())()()))))()((()((((())(((()()((()()(((()))(((()(()(()())(()()(())))(())()())))(()()())(((()))((())))))((())))(((()(((()(()(()))(((()))((()())()())(())(()()()()(((()(";
   var arr1 = inputStr.split("");
   var height = 0;
   arr1.forEach(function(i) {
      (i=="(") ? height++ : height--;
   });
   console.log(height);
}

//-----------Problem 2-------------

// Location State fully captured by a vertical and horizontal counter.

// Time Complexity (O(n))
// Space Complexity (O(n))

// First step is to parse next element in string and update position state.
// Second step is to lookup in a HashTable to see if the space has been visited more than once.  This is done in O(1) time.

// The lookup value in the HashTable is then put through the following logic:
// A key not being present in the HashTable means that this space hasn't been visited.  Therefore, insert a key/value pair of 1, indicating that this spot has been visited exactly once.
// A value of 1 in the HashTable indicates that the space has been visited exactly once.  Therefore, encountering this a second time fulfills the requirement of visiting a space more than once.  Therefore, add to "Visited Counter".  Mark the value in the HashTable as "2" so repeat encounters won't be added.
// A value of 2 in the HashTable indicates that we have already visited this space more than once.  Therefore, don't overcount.

function problem2() {

   var inputStr = "v<><^^v^^v<^^<>><>vv<<>><<>>v>^v^<<>>vv^>vv>^<>^><^vv^>>^v^<^^>^<<v^><v^^><>^^v>^v>v^<v^>^^v<v^v>^^<>v><<<<>^>v>^<><^<^vv<>vv^<>v^vv^^^^>v^<v<><>>^<<<<^^^v^^^>v^^^<v<^^<<^<<>><<<<<v>^vv^<><<^>>>^^<vv>>^^^^vv<v<>vv<^>v>>v^^>v<>^^<>>><<<v<<<>>v<<vv^<<^^<><v^<>>^<<><<^v^<^v>^>^v^v<v><<>>^<vv^<>>>v>>>v><>vv>v<v>vv><^^v><v<>v><^>v<>v><>^<^^<^^v<^vv^<<>^^vv<<^<>>><^^<v^>^><^<<^>>v^>>>><^^>v^^>vv><^^><>>>^>>v^^<<>><<^^<^<>><>v>>^v>v^^<<v<vv<vv^<<^><<v<><><<><^^<>v>^vvv><v>^v>^>>>>^^v^<><<vv>>v><vv<<v>><^<>^^v<^<vv>^<<v<^v<^v^^<<vv^^>v>>>^<^^v^vv>>^<^<^v^<^v<><<^<v<^>^^>^^<^>v<<^v^v><v<v<v<>>>^vv><>>><<^>^>^<^vvv^^<<v>>v><<v^^><v<vv^<v^>>v<^<>v^>><^><^>^<^>>^>^>>vv>v^v<vv<>v^<v^^vv<^>>vv<^>^>>v^v^v<<v<><v^v<^^>><<<^><<<>^vv<vv<^^v<vv<<v^^<<><>v^>v<>>^^^^^^^^>^<^^>vvv^<<<<<v^>^v>>>v<><v<^v>v^<^^^<<><<>vv<v>^vv<<><<^v<<<^v>^>^^><><>^>vv><>^vvv<^^vv^<>^<^<><^<^v^^<v^>v><vv><v^v>vv><>^^^<<><^>v<^><^^^^<^^v>^>v^<v^<v^v<^<vvvv>^^^^^>^^<^^^v^^><v^^^^<<vv<<vvvv><<>vvv>>^<vvv>v^>^><<vv^^>>^v^<^<vv^^>>^^>v^><><^>^v^>^><^^^<^v^v<<v>v^^v>>v<>>>^vv><^<<>^v>>^>>^^<v>>^v>v<^<>^^>v^><>v^>^>^>v<v^^<^>vvvv<v<<v^^>>v<^<^^>v><v<v><>v>^v^v>><^<>vv^v<>v^^<^<vv<<<<>>^<^^<>v<v>>><^>>>><><v^^v^>>v>v><v>^><vv<>^vv>vv>^<>^^><^vvvv^><<^>>^v>v>v^>^><^^^<^>^>><^>vv^^v<>^vv>>^^<<>>><<vvv<v<>^^<^";
   var inputArr = inputStr.split("");

   // Vert and Horiz captures the entire location.
   var loc = {
      v: 0, // Vertical Location
      h: 0, // Horizontal Location
      newVisited: 0, // This is the counter of new locations,
      key: function() {
         return this.v + ":" + this.h;
      }
   };

   var visitedMap = {}; // Stores list of Positions visited

   // The Starting location is considered as visited
   visitedMap[loc.key()] = "1";

   inputArr.forEach(function(newPos) {

      // Step 1: Update Position
      updatePosition(newPos,loc);

      // Step 2: Perform "Visited Logic"
      checkVisited(loc, visitedMap);

   });

   console.log(loc.newVisited);
}

// Step 1 Logic
function updatePosition(i,obj) {
   switch(i) {
      case "v":
      obj.v--;
      break;
      case "^":
      obj.v++;
      break;
      case "<":
      obj.h--;
      break;
      case ">":
      obj.h++;
      break;
      default:
      console.log('Invalid Entry!');
      break;
   }
}

// Step 2 Logic
function checkVisited(loc, visitedMap) {
   if(visitedMap[loc.key()] == undefined){ // Not visited yet
      visitedMap[loc.key()] = 1; // Now it was visited
   } else if(visitedMap[loc.key()] == 1){ // We visited it already, so add to the new Visited counter
      loc.newVisited++;
      visitedMap[loc.key()] = 2;
   }
}

problem1()
problem2()
