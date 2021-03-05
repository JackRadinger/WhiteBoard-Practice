// 1, 2, 3, 4, 5, 6, 7 - Problem 1
// 8, 9, 10, 11, 12, 13, 14 - Problem 2
// 15, 16, 17, 18 - Problem 3
// 19, 20, 21 - Problem 4
// 22, 23, 24 - Problem 5
// 25, 26, 27- Problem 6
// 28, 29, 30, 31 - Problem 7
// # Module 3 Whiteboarding Exercises
// ## Problem 1: Breadth First Search on a Graph
// Given the adjacency list below, how many friends would Joe visit if he were
// trying to get to Jesse using Breadth-First Traversal?
// NOTE: your function should return the number of friends visited, not including
// Joe himself
// ```javascript
// const adjacencyList = {
//   'derek':['selam', 'dean'],
//   'joe':['selam'],
//   'selam': ['derek', 'joe', 'dean', 'evan'],
//   'dean': ['derek', 'evan', 'selam'],
//   'sam': ['jen'],
//   'evan': ['selam', 'jesse', 'dean'],
//   'jen':['sam', 'javier'],
//   'javier':['jen'],
//   'chris':[],
//   'jesse': ['evan'],
// };
// ```
// ## Problem 2: Depth First Search on a Graph
// Given the adjacency list below, which friends would Joe visit if he were
// trying to get to Jesse using Depth-First Traversal?
// NOTE: your function should return a list of friends visited, not including Joe
// himself.
// ```javascript
// const adjacencyList = {
//   'derek':['selam', 'dean'],
//   'joe':['selam'],
//   'selam': ['derek', 'joe', 'dean', 'evan'],
//   'dean': ['derek', 'evan', 'selam'],
//   'sam': ['jen'],
//   'evan': ['selam', 'jesse', 'dean'],
//   'jen':['sam', 'javier'],
//   'javier':['jen'],
//   'chris':[],
//   'jesse': ['evan'],
// };
// ```
// ## Problem 3: Path Sum of Binary Tree
// Given the binary tree below and a sum, determine if the tree has a root-to-leaf
// path such that adding up all the values along the path equals the given sum.
// Return a boolean if you find a path.
// Example:
// pathSum(5, 22) where 5 is the root node and 22 is the sum => True
// explanation - 5 + 4 + 11 + 2 = 22
// ```js
// //       5
// //      / \
// //     4   8
// //    /   / \
// //   11  13  4
// //  /  \      \
// // 7    2      1
// ```
// ## Problem 4: Max Depth of Binary Tree
// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root
// node down to the furthest leaf node.
// ## Problem 5: Find Ancestors of a Node
// Given a binary tree, find the ancestors of the node of a particular value.
// Root will be a root node of a binary search tree and `k` is an integer value of
// a node whose ancestors you will need to find.
// Example:
// findAncestors(6, 10) => [6, 9, 12]
// ```js
//   //   6
//   //  / \
//   // 4   9
//   //   /  \
//   //  8   12
//   //      / \
//   //     10  14
// ```
// ## Problem 6: Mirror image trees
// Write a function that would return true if a binary tree is a mirror image of
// another binary tree.
// ## Problem 7: Reverse a Linked List
// Write a function that will reverse a singly linked list.







































// ## Problem 1: Breadth First Search on a Graph
// Given the adjacency list below, how many friends would Joe visit if he were
// trying to get to Jesse using Breadth-First Traversal?
// NOTE: your function should return the number of friends visited, not including
// Joe himself
// ```javascript

const adjacencyList = {
  'derek':['selam', 'dean'],
  'joe':['selam'],
  'selam': ['derek', 'joe', 'dean', 'evan'],
  'dean': ['derek', 'evan', 'selam'],
  'sam': ['jen'],
  'evan': ['selam', 'jesse', 'dean'],
  'jen':['sam', 'javier'],
  'javier':['jen'],
  'chris':[],
  'jesse': ['evan'],
};

function bfsSearch(adjacencyList, startingValue, targetValue) {
    if (!adjacencyList[startingValue].length) return null; 
    let visited = new Set();
    let distance = 0;
    let queue = [startingValue];

    while(queue.length) {
        let node = queue.shift();
        if(visited.has(node)) continue;
        visited.add(node);
        if(node === targetValue) return distance;
        else distance++;  //2
        let neighbors = adjacencyList[node];
        queue.push(...neighbors);        
    }
}




