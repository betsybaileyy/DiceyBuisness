// 2. Clicking the button should create a new Die object (thus causing a div to be 
//     added to the screen with a random number 1-6)


let die;
let dieArray = []

class Die {
    constructor() {
        this.div = document.createElement('div');
        const container = document.getElementById('container');
        this.div.classList.add('die');
        container.appendChild(this.div);
        this.value = randomVal(1, 7);

        this.div.innerHTML = this.value;
        console.log(this.value);

        this.div.addEventListener('click', () => {
            console.log(this);
            console.log('here');
            this.value = randomVal(1, 7);
            this.div.innerHTML = this.value;
        });
    };
    
    roll() {
                // this.div.addEventListener('click', () => {
                // this.randomVal(1, 7);
                this.value = randomVal(1, 7);

                this.div.innerHTML = this.value;
            }
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let value = randomVal(1, 7);

console.log(value);

let buttonGenerate = document.getElementById('button-generate');
buttonGenerate.addEventListener('click', insertDie);

let buttonRoll = document.getElementById('button-roll');
buttonRoll.addEventListener('click', roll);

let buttonSum = document.getElementById('button-sum');
buttonSum.addEventListener('click', sum);

function insertDie() {
    die = new Die();
    dieArray.push(die);
}
function roll() {
    console.log('hey');
    for (var i = 0; i < dieArray.length; i++) {
        dieArray[i].roll(); //a loop is a way (used most often) to access the elements in an array
    }
}

function sum() {
    let x = 0;

    for (var i = 0; i < dieArray.length; i++) {
        x = x + dieArray[i].value;

        console.log(x);
    }
    console.log(x);

    alert(x);
}