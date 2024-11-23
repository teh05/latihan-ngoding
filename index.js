class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a node at the end of the list
    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Remove a node from the list
    remove(value) {
        if (this.head === null) return null;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let previous = null;
        while (current !== null && current.value !== value) {
            previous = current;
            current = current.next;
        }

        if (current === null) return null;

        previous.next = current.next;
        this.size--;
    }

    // Print the list
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: 1 2 3
list.remove(2);
list.print(); // Output: 1 3


console.log("hello world ")