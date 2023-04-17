const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
constructor () {
  this.rootNode = null;
}


  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  const node = new Node(data);
   if(!this.rootNode) {
    this.rootNode = node;
    return
   }

   let current = this.rootNode;

   while (true) {
    if (data < current.data) {
      if (!current.left) {
        current.left = node;
        break;
      }
      current = current.left;
    } else if (data > current.data) {
      if (!current.right) {
        current.right = node;
        break;
      }
      current = current.right
    } else {
      break;
    }
   }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.rootNode;
    while(current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.rootNode;

    while(current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.rootNode;
    while (current && current.left) {
      current = current.left
    }
    return current ? current.data : null
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.rootNode;
    while (current && current.right) {
      current = current.right
    }
    return current ? current.data : null
  }
}


module.exports = {
  BinarySearchTree
};