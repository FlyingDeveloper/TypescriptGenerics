// NOTE: Requires version 0.9.0.0 or greater of the Typescript compiler

class GenCollection<T> {
    collection : T[];

    constructor() {
      this.collection = new Array<T>();
    }   
 
    first() : T {
      return this.collection.length > 0 ? this.collection[0] : null;
    }i

    add(item : T) {
      this.collection[this.collection.length] = item;
    }
}

var a = new GenCollection<number>();
a.add(7);
a.add(12);
console.log(a.first());
console.log(JSON.stringify(a.collection));

var b = new GenCollection<string>();
b.add("Hello");
b.add("Hi");
console.log(b.first());
console.log(JSON.stringify(b.collection));

var c = new GenCollection<any>();
c.add("Hello");
c.add("Hi");
c.add(99);
c.add(6.2);
c.add([1,2,3]);
console.log(c.first());
console.log(JSON.stringify(c.collection));
