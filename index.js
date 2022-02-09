// Code your solutions in this file
/*
for ([initialization]; [condition];[iteration]) {
    [loop body]
}
*/
/* for (let age = 30; age <40; age ++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
    };
return gifts;
};

wrapGifts(gifts);
*/

//for loop
function writeCards(names,event){
    const thanksArray=[];
    for(let i =0; i< names.length;i++){
        let message =`Thank you, ${names[i]}, for the wonderful ${event} gift!`
        thanksArray[i]=message;
        debugger;
    };
    return thanksArray; 
};
writeCards(["Charlie", "Samip", "Ali]"],"birthday"); 

//while loop
/*
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
    let i =0; 
    while(i<gifts.length){
        console.log(`Wrapped ${gifts[i]} and added a bow!`); 
        i++;
    }
    return gifts; 
};

wrapGifts(gifts);
*/
function countDown(n){
    while(n>-1) {
        console.log(n)
        n--
    }
};