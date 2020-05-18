// Implement a Queue datastructure using two stacks.a
// DO NOT create an array inside of the "Queue" class.
// Queue should implement the methods "add", "remove", and "peek".
// For a reminder on what each method does, look back at the Queue exercise.


class Stack{
  constructor(){
    this.data = [];
  }

  add(record){
    this.data.push(record);
  }

  remove(){
    return this.data.pop();
  }

  peek(){
    return this.data[this.data.length - 1];
  }
}


class Queue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
   }

  add(record){
    this.stack1.push(record);
  }

  remove(){
    while (this.stack1.peek()){
      this.stack2.push(this.stack1.pop());
    }

    const record = this.stack1.pop();

    while (this.stack2.peek()){
      this.stack1.push(this.stack2.pop());
    }

    return record;
  }

  peek(){
    while (this.stack1.peek()){
      this.stack2.push(this.stack1.pop());
    }

    const record = this.stack2.pop();

    while (this.stack2.peek()){
      this.stack1.push(this.stack2.pop());
    }

    return record;
  }
}


const qq = new Queue()
qq.add(1)
qq.add(2)
