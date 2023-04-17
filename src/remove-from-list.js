const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (l === null) {
    return null;
  }
 //для самого первого элемента. Меняем указатель HEAD на следующий узел
  while (l.value === k) {
    l = l.next
  }

  let current = l;

//у текущего узла есть за ним узел next, который не равняется null
  while (current.next) {
    if (current.next.value === k) {
      //смещаю на одно значение
      current.next = current.next.next;
    } else {
      //просто перехожу к следующему элементу
      current = current.next
    }
    this.length --
  }

 return l;
}

module.exports = {
  removeKFromList
};
