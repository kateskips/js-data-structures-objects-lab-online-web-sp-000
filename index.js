const obj = { foo: "bar" };
 
const newObj = Object.assign({}, obj);
 
newObj;
// => { foo: "bar" }
 
delete newObj['foo'];
// => true
 
newObj;
// => {}
 
obj;
// => { foo: "bar" }