let total;
//total is a global variable, its value is null
let dice = [];

//this function sets up the start of a new game
function init(){
    total = 0;
    //local total is 0
    let htmlstring = '';
    //loop to create the html for each die
    for (let i = 0; i < 5; i++) {
        htmlstring += `<img src="images/0.png" alt="die" class="die" id="die${i}">`;
    }
    console.log(htmlstring);
    //target the elements with the id 'dicetray' and change its html content
    document.getElementById('dicetray').innerHTML = htmlstring;
}

//this function rolls the dice
function rollDice(){
    for (let i = 0; i < 5; i++) {
        dice[i] = Math.floor(Math.random()*6) + 1;
        document.getElementById('die' + i).setAttribute('src', `images/${dice[i]}.png`);
        console.log(dice[i]);
    }
}
init();
