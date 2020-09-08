//Øvelse 25
let element1 = document.getElementById('ID1');
let element2 = document.querySelector('#ID2');
let element3 = document.getElementsByTagName('h3');
let element4 = document.querySelector('h4');
let element5 = document.getElementsByClassName('Klasse1');
let element6 = document.querySelector('.Klasse2');

console.log(element1.innerHTML);
console.log(element2.innerHTML);
console.log(element3[0].innerHTML);
console.log(element4.innerHTML);
console.log(element5[0].innerHTML);
console.log(element6.innerHTML);


//Øvelse 25.2
let navn = document.querySelector('#øvelse25');
navn.innerHTML = 'Martin';


//Øvelse 26
let button1 = document.querySelector('.buttonPressMe');
button1.addEventListener('click', function () {
  alert(button1.innerText);
});


//Øvelse 27
let button2 = document.querySelector('#stikkontakt');
button2.addEventListener('click', function () {
  document.body.style.backgroundColor = 'yellow';
});


//Øvelse 28
let allePKnapper = document.querySelectorAll('.p-knap');
allePKnapper.forEach(function (knap) {
  knap.addEventListener('click', function () {
    alert(knap.innerText);
  });
});


//Øvelse 28.1
let RipRapRup = document.querySelectorAll('.RRR');
const RRRArr = Array.from(RipRapRup);

RipRapRup.forEach(function () {
  RRRArr[1].addEventListener('click', function () {
    document.querySelector('.Rap').style.fontSize = '2em';
  });
  RRRArr[2].addEventListener('click', function () {
    alert('Rup');
  });
});





//Øvelse 28.2
let navnArray = ["Martin", "Jacob", "Jonas", "Kim", "Alex"]
let TomDivElement = document.querySelector(".tomDiv")

navnArray.forEach(function(navn){
  TomDivElement.innerHTML = TomDivElement.innerHTML + `<p class="className"> ${navn}</p>`;
})




//Øvelse 29
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let select = document.querySelector('#operation');
let button = document.querySelector('#button1');
let resultat = document.querySelector('#resultat');
button.addEventListener('click', function () {
  switch (select.value) {
    case '+':
      resultat.innerHTML = Number(input1.value) + Number(input2.value);
      break;
    case '-':
      resultat.innerHTML = Number(input1.value) - Number(input2.value);
      break;
    case '*':
      resultat.innerHTML = Number(input1.value) * Number(input2.value);
      break;
    case '/':
      resultat.innerHTML = Number(input1.value) / Number(input2.value);
      break;

    default:
      break;
  }
});



























