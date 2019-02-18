/* 
But Before to see how asynchronous JS works
 let's see how synchronous javascript work 
*/

const second = () => {
  console.log('Hello there!');
}
const first = () => {
  console.log('Hi there!');
  second();
  console.log('The End');
}
first();