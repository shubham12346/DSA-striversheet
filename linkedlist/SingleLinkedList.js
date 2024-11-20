class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // Insert at last
  insertAtLast(data) {
    const newNode = new Node(data);
    let current;
    if (!this.head) {
      this.head = newNode;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Insert at Index

  insertAt(data, index) {
    // if index is out of range
    if (index < 0 || index > this.size) {
      console.log("Index out of range");
      return;
    }

    // if it is first node ;
    if (index === 0) {
      this.insertFirst(data);
    }

    const newNode = new Node(data);
    let current, previous;
    current = this.head;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = newNode;
    newNode.next = current;
    this.size++;
  }

  // Get at index
  getAt(index) {
    // if index is out of range
    if (index > this.size || index < 0) {
      console.error("Out of Index ");
      return;
    }
    let current = this.head;
    let pointer = 0;
    while (pointer < index) {
      current = current.next;
      pointer++;
    }
    console.log("pointer", current, "index", index, "pointer", pointer);
  }

  // Remove at index
  removeAtIndex(index) {
    // if index is out of range
    if (index < 0 || index >= this.size) {
      console.log("Index out of range");
      return;
    }
    let previous,
      current = this.head;
    if (index === 0) {
      this.head = this.head.next;
    }
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
    current = null;
  }
  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print last data
  printEndData() {
    let current = this.head;
    while (current.next) {
      console.log(current.data);
      current = current.next;
    }
    console.log("the last node ", current);
  }

  printAllData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    console.log("******************************");
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(99);
ll.insertFirst(101);
ll.printAllData();
ll.insertAt(1000, 1);
ll.printAllData();
ll.removeAtIndex(2);
ll.printAllData();
ll.printEndData();
ll.printAllData();
