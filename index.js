// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }
// wrapGifts(gifts);




function writeCards(names, eventName) {
    const array = [];
    for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    debugger;
    }
    return array;
}

function countDown() {
    let subtract = 10; 
        while (subtract >= 0) {
            console.log(subtract);
        subtract--;
    }
}
