const LinkedList = () => {
  return {
    headNode: null,
    tailNode: null,
    append: (value) => {
      const node = Node(value);
      if (this.headNode === null) {
        this.headNode = node;
        this.tailNode = node;
      } else {
        this.tailNode.nextNode = node;
        this.tailNode = node;
      }
    },
    prepend: (value) => {
      const node = Node(value);
      if (this.headNode === null) {
        this.headNode = node;
        this.tailNode = node;
      } else {
        node.nextNode = this.headNode;
        this.headNode = node;
      }
    },
    size: () => {
      let count = 0;
      let currNode = this.headNode;
      while (currNode !== null) {
        count++;
        currNode = currNode.nextNode;
      }
      return count;
    },
    head: () => {
      return this.headNode;
    },
    tail: () => {
      return this.tailNode;
    },
    at: (index) => {
      let currNode = this.headNode;
      let count = 0;
      while (count < index) {
        cound++;
        currNode = currNode.nextNode;
      }
      return currNode;
    },
    pop: () => {
      if (this.headNode === this.tailNode) {
        const currNode = headNode;
        this.headNode = null;
        this.tailNode = null;
        return currNode;
      }
      let currNode = this.headNode;
      while (currNode.nextNode !== this.tailNode) {
        currNode = currNode.nextNode;
      }
      currNode.nextNode = null;
      return this.tailNode;
    },
    contains: (value) => {
      if (this.headNode === null) {
        return false;
      }
      let currNode = this.headNode;
      while (currNode !== null) {
        if (currNode.value === value) {
          return true;
        }
        currNode = currNode.nextNode;
      }
      return false;
    },
    find: (value) => {
      if (this.headNode === null) {
        return null;
      }
      let currNode = this.headNode;
      let count = 0
      while (currNode !== null) {
        if (currNode.value === value) {
          return count;
        }
        count++;
        currNode = currNode.nextNode;
      }
    },
    toString: () => {
      let currNode = this.headNode;
      let repr = "";
      while (currNode !== null) {
        repr += `( ${currNode.value} ) -> `;
      }
      repr += "null";
      return repr;
    }
  }
}

const Node = (value = null) => {
  return {
    value,
    nextNode: null,
  }
}
