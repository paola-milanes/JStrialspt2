'use strict';

// 1. printIndices
function printIndices(items) {
  let i = 0;
  for(const itm of items) {
    
    console.log(`${itm}. ${i}`)
    i+= 1
  }
  // Replace this with your code
}

// 2. everyOtherItem
function everyOtherItem(items) {
  let result = [];
  for(const i in items ){
    if(i % 2 === 0 ){
      result.push(items[i]);
    }

  }
    console.log(result);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItem = items.sort((a,b)=> a-b.slice(0,n)) ;
  console.log(sortedItem.reverse());
  
// printIndices(["apple","cherry","blueberry"]);