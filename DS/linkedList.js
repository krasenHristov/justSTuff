class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}


class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  printList () {
    let curr = this.head

    while(curr) {
      console.log(curr.data)
      curr = curr.next
    }
  }

  append (data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  appendLeft (data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      newNode.next = this.head
    }

    this.length++
    return this
  }

  pop () {
    if (!this.head) return
    if (this.head === this.tail && this.head) {
      const removedVal = this.head
      this.head = null
      this.tail = null
      this.length--
      return removedVal
    }

    let curr = this.head

    while (curr.next !== this.tail) {
      curr = curr.next
    }

    const removedVal = this.tail.data

    this.tail = curr
    this.tail.next = null
    this.length--

    return removedVal
  }

  popLeft () {
    if (!this.head) return
    if (this.head === this.tail) {
      const removedVal = this.head.data
      this.head = null
      this.tail = null
      this.length--
      return removedVal
    }

    const removedVal = this.head.data
    this.head = this.head.next
    this.length--

    return removedVal
  }

  getByIndex (index) {
    let curr = this.head

    for (let i = 0; i < index; i++) {
      curr = curr.next
    }

    if (curr) return curr.data
    return undefined
  }

  getLength () {
    return this.length
  }

  findByVal(val) {
    let curr = this.head
    let index = 0

    while(curr) {
      if (curr.data === val) return [curr.data, index]
      index++
      curr = curr.next
    }

    return undefined
  }
}

const linkedList = new LinkedList()
linkedList.append("data-1")
linkedList.append("data1")
linkedList.append("data2")

console.log("@INDEX", linkedList.getByIndex(3))
console.log("LEN", linkedList.getLength())
console.log("GET BY VAL", linkedList.findByVal("data2"))
linkedList.printList()