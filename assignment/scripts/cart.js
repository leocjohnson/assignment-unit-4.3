console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
console.log('Here is our basket!', basket)

const maxItems = 5;
console.log('The maximum number of items is', maxItems)

function addItem(item){
    console.log(' - In function addItem. - ');
    if(isFull()===false){
        basket.push(item);
        console.log('Added', item, 'to basket.');
        return true;
    }else{
        console.log('Sorry, the basket is full! There is no room for', item);
        return false;
    }
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

function isFull(){
    console.log(' - In function isFull - ');
    if(basket.length<maxItems){
        console.log('The basket is not full.');
        return false;
    }else if(basket.length>=maxItems){
        console.log('The basket is full.');
        return true;
    }
}

isFull();

addItem('salmon');
addItem('tuna');
addItem('beef');

listItems();

addItem('wood');
addItem('matches');

addItem('money');

function removeItem(item){
    console.log(' - In function removeItem - ');
    if(basket.includes(item)===true){
        console.log(item, 'has been found in the basket.');
        basket.splice(basket.indexOf(item), 1);
        console.log(item, 'has been removed from the basket.');
        return item;
    }else{
        console.log(item, 'was not found in the basket.')
        return null;
    }   
}

removeItem('salmon');

listItems();

removeItem('oranges');

console.log('----- testing code below -----');
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
