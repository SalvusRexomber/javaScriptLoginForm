

let loginButton = document.querySelector("#login");
const felhasznalo = document.querySelector('#felhasznalonev')
const elsoJelszo = document.querySelector("#firstPassword");
const masodikJelszo = document.querySelector("#secondPassword");
let myemail = document.querySelector("#email");
let uzenet = document.querySelector("#spanUzenet");
let loginInput = document.querySelector("#login");

function bejelentkezes(event){

  if(elsoJelszo.value != masodikJelszo.value){
    uzenet.innerText="A jelszavak nem egyeznek meg!"
    event.preventDefault();
  }
  
  
  
  else{
//Felhasználónév - jó formátum megadása


felhasznalo.addEventListener('#felhasznalonev', function (e) {
  this.setCustomValidity("")
  this.checkValidity();
  this.nextElementSibling.innerHTML = this.validationMessage
})
felhasznalo.addEventListener('invalid', function (e) {
  if (this.validity.patternMismatch) {
    this.setCustomValidity("Kövesse a következő formátumot: 5 betű - 5 szám  (AbCdE-12345)")
  } else {
    this.setCustomValidity("")
  }
  this.nextElementSibling.innerHTML = this.validationMessage
});


//Jelszó1- 7 és 16 karakter között, csak karaktereket, számokat, aláhúzást tartalmazhat és az első betűnek karakternek kel lennie!


elsoJelszo.addEventListener("#firstPassword", function(t){
  this.setCustomValidity("");
  this.checkValidity();
  this.nextElementSibling.innerHTML = this.validationMessage;
})
elsoJelszo.addEventListener('invalid', function (e) {
  if (this.validity.patternMismatch) {
    this.setCustomValidity("A jelszó 8 és 16 közötti karakterszámú, amely kis-, és nagybetűkből, illetve számokból áll. (Példa: ABCD1234)")
  } else {
    this.setCustomValidity("")
  }
  this.nextElementSibling.innerHTML = this.validationMessage
});


//Jelszó - mind a kettő beírt azonos legyen



masodikJelszo.addEventListener("#secondPassword", function(t){
  this.setCustomValidity("");
  this.checkValidity();
  this.nextElementSibling.innerHTML = this.validationMessage;
})
masodikJelszo.addEventListener('invalid', function (e) {
  if (this.validity.patternMismatch) {
    this.setCustomValidity("A jelszó 8 és 16 közötti karakterszámú, amely kis-, és nagybetűkből, illetve számokból áll. (Példa: ABCD1234)")
  } else {
    this.setCustomValidity("")
  }
  this.nextElementSibling.innerHTML = this.validationMessage
});



//E-mail


myemail.addEventListener("#secondPassword", function(t){
  this.setCustomValidity("");
  this.checkValidity();
  this.nextElementSibling.innerHTML = this.validationMessage
})
myemail.addEventListener('invalid', function (e) {
  if (this.validity.patternMismatch) {
    this.setCustomValidity("Csak .hu végződésű e-mail címek.")
  } else {
    this.setCustomValidity("")
  }
  this.nextElementSibling.innerHTML = this.validationMessage
});



  }
}


loginButton.addEventListener("click", bejelentkezes);



/////////////////////////////////////////////////////////////////////////////////////////////////

//Countdown

const countdownAera = document.querySelector('.countdown');
const numbersArea = document.querySelector('.numbers');
const stopButton = document.querySelector('.stop');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');

let myBar = document.querySelector("#myBar");

let interval;
let count = 0;
const height = countdownAera.getBoundingClientRect().height;
let offset;

function timerInterval(){

  interval = setInterval(() => {
    count++;
    offset = height * count
    numbersArea.style.transform = `translateY(-${offset}px)`
    
    if(count >=11){ clearInterval(interval)
    };
  }, 1000);
  count = 0;
  offset = -19;
};


function createTimer(){
  clearInterval(interval);
  count=0;
  
  interval = setInterval(() => {
    count++;
    offset = height * count
    numbersArea.style.transform = `translateY(-${offset}px)`
    
    if(count >=11){ clearInterval(interval)};
  }, 1000);
  count = 0;
  offset = -19;
}

startButton.addEventListener('click', timerInterval);
startButton.addEventListener('click', move);
resetButton.addEventListener('click', createTimer);
resetButton.addEventListener('click', createLine);



//TimerLine

let i = 0;
let width = 1;
const time = 110;
let id;

function move() {
  if (i == 0) {
    i = 1;
    id = setInterval(frame, time);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        myBar.style.width = 0 + "%";
      } else {
        width++;
        myBar.style.width = width + "%";
      }
    }
  }
}

function createLine(){
    i = 0;
    width = 1;
    clearInterval(id);
    i = 0;
    myBar.style.width = 0 + "%";
    move();
}
