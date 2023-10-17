console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
    console.log(' - In function addItem. - ');
    basket.push(item);
    console.log('Added', item, 'to basket.');
    return true;
}

addItem('banana');
addItem('oranges');
addItem('bread');

function listItems(){
    console.log(' - In function listItems. - ');
    if(basket.length>0){
        console.log('The basket currently contains:');
        for(let item of basket){
            console.log(item);
        }
    }else{
        console.log('The basket is empty.');
    }
}

listItems();

function empty(){
    console.log(' - In function empty. - ');
    while(basket.length>0){
        basket.pop();
    }
    console.log('The basket has been emptied! Take a look:');
    console.log('Basket:', basket);
}

empty()

console.log('--- testing code below ---');
// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
