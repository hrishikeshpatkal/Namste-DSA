class Stack {
    constructor() {
        this.items = [];
        
    }
    push(element){
        this.items.push(element)
        return this.items.length;

    }
    pop(){
       return (this.items.length === 0) ? "Stack is empty" : this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items = [];
    }


}
    let stack = new Stack();
    console.log(stack.push(10)); // Should output 1
    console.log(stack.push(20)); // Should output 2
    console.log(stack.push(30)); // Should output 3
    console.log(stack.peek()); // Should output 30
    console.log(stack.pop()); // Should output 30
    console.log(stack.peek()); // Should output 20
    console.log(stack.isEmpty()); // Should output false
    console.log(stack.size()); // Should output 2
    stack.clear();
    console.log(stack.isEmpty()); // Should output true

