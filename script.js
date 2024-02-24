//NOTES:
// I mixed up assignment 3 and 5 so all names with assignment3 are actually 5 and all
// names with assignment 5 are actually 3
//If changes are made in the code then please edit this
//and remove the corresponding note


//tabs for the upper selector
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

//checking if any tabs are clicked

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    })
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active');
  });
});


//assignment1


//assignment2

const taba2 = document.querySelectorAll('[data-taba2-target]');
const taba2contents = document.querySelectorAll('[data-taba2-content]');


console.log(taba2);

taba2.forEach(tab =>{
  tab.addEventListener('click', ()=>{

    const target = document.querySelector(tab.dataset.taba2Target);
    console.log(target);
    console.log(target.classList);
    taba2contents.forEach(taba2content => {

      taba2content.classList.remove('active');

    });
    taba2.forEach(tab =>{
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    target.classList.add('active')

  });
});




//assignment3


//this is for assignment 3

//For the TABS of each question
const taba3 = document.querySelectorAll('[data-taba3-target]');
const taba3contents = document.querySelectorAll('[data-taba3-content]');

taba3.forEach(tab => {
  tab.addEventListener('click', ()=>{

    console.log(tab)
    const target = document.querySelector(tab.dataset.taba3Target);
    console.log(target);
    console.log(target.classList);

    taba3contents.forEach(tabcontent => {tabcontent.classList.remove('active');});//removing all active from the taba3contents

    taba3.forEach(tab2 =>{tab2.classList.remove('active');});//removing all active from taba3


    tab.classList.add('active');
    target.classList.add('active');

  });
});

//Starting the retrieving of answer and display Assignment 3
//for question 1
const assignment3question1text = document.getElementById('asn3question1');
const assignment3question1button = document.getElementById('asign3question1button');
const assignment3question1output = document.getElementById('asign3question1output');

assignment3question1button.addEventListener('click',()=>{
  assignment3question1output.innerHTML = 3600*parseFloat(assignment3question1text.value).toString() + " C of charge has left the battery";
});
//For question 2
const assignment3question2texta = document.getElementById('asn3question2a');
const assignment3question2textb = document.getElementById('asn3question2b');
const assignment3question2button = document.getElementById('asign3question2button');
const assignment3question2output = document.getElementById('asign3question2output');
const assignment3question2outputb = document.getElementById('asign3question2outputb');


assignment3question2button.addEventListener('click',()=>{
  
 var D = parseFloat(assignment3question2texta.value); D = D/1000;
 var R = D/2;
 var I = parseFloat(assignment3question2textb.value);I= I*((1.0e-6));
 var q = 1.6e-19;
 var N = I/q;
 var A = Math.PI * Math.pow(R, 2);
 var J = I / A;
 assignment3question2output.innerHTML = "The number of electrons that hit the screen per second is: " + N.toString();
 assignment3question2outputb.innerHTML = "The current density of the electron beam is: " + J.toString() + " A/m^2";

});

//For Question 3

const assignment3question3texta = document.getElementById('asn3question3a');
const assignment3question3textb = document.getElementById('asn3question3b');
const assignment3question3button = document.getElementById('asign3question3button');
const assignment3question3output = document.getElementById('asign3question3output');
const assignment3question3outputb = document.getElementById('asign3question3outputb');

assignment3question3button.addEventListener('click',()=>{
  
  var Q = parseFloat(assignment3question2texta.value);
  var W = parseFloat(assignment3question2textb.value);
  var I = (Q*W)/(2*Math.PI);
  assignment3question3outputb.innerHTML = "the average current represented by the spinning sphere is : " + I.toString() + " A";

});

//For Question4

const assignment3question4texta = document.getElementById('asn3question4a');
const assignment3question4textb = document.getElementById('asn3question4b');
const assignment3question4button = document.getElementById('asign3question4button');
const assignment3question4output = document.getElementById('asign3question4output');
const assignment3question4outputb = document.getElementById('asign3question4outputb');


assignment3question4button.addEventListener('click', ()=> {
  
  let B = parseFloat(assignment3question4texta.value); B=B* (10 ** 6);
  let q = 1.6e-19;
  let m = 3.3475e-27;
  let x = (B * 2) / m;
  let V = Math.sqrt(x);
  let filler1 = parseFloat(assignment3question4textb.value);
  let t = q / filler1;
  let d = V * t;
  assignment3question4output.innerHTML = "The atoms are: " + d.toFixed(5).toString() + " meters apart";

});

//For Question 5


const assignment3question5texta = document.getElementById('asn3question5a');
const assignment3question5textb = document.getElementById('asn3question5b');
const assignment3question5button = document.getElementById('asign3question5button');
const assignment3question5output = document.getElementById('asign3question5output');

assignment3question5button.addEventListener('click', ()=> {
  

  let R = assignment3question5texta.value;
  let f = assignment3question5textb.value;
  let N = parseFloat(R) * Math.pow(parseFloat(f), 2);


  assignment3question5output.innerHTML = "The new resistance is: " + N.toFixed(4).toString() + " ohm";

});

//For Question 6

let calculateResistance = (sideLength_mm, resistivity1, length1_cm, resistivity2, length2_cm) => {
  console.log(sideLength_mm,resistivity1,length1_cm,resistivity2,length2_cm);
  sideLength_mm = sideLength_mm/1000;
  let A = sideLength_mm**2;
  let L1 = length1_cm / 100.0;
  let L2 = length2_cm / 100.0;

  let r1 = (resistivity1 * L1) / A;
  let r2 = (resistivity2 * L2) / A;

  let totalResistance = r1 + r2;
  console.log(totalResistance);
  totalResistance = totalResistance.toString()
  let return_statement =  "The total resistance between the ends of the rods is:" + totalResistance + " ohm";

  return return_statement;
};

const assignment3question6texta = document.getElementById('asn3question6a');
const assignment3question6textb = document.getElementById('asn3question6b');
const assignment3question6textc = document.getElementById('asn3question6c');
const assignment3question6textd = document.getElementById('asn3question6d');
const assignment3question6texte = document.getElementById('asn3question6e');
const assignment3question6button = document.getElementById('asign3question6button');
const assignment3question6output = document.getElementById('asign3question6output');

assignment3question6button.addEventListener('click', ()=>{

  assignment3question6output.innerHTML = calculateResistance(parseFloat(assignment3question6texta.value),
    parseFloat(assignment3question6textb.value),parseFloat(assignment3question6textc.value),parseFloat(assignment3question6textd.value),
    parseFloat(assignment3question6texte.value));

});

//For QUestion 7

function calculateTimeToTravel(diameter_cm, length_km, current, freeChargeDensity) {
  const pi = Math.PI;
  const q = 1.6e-19;

  const d = diameter_cm / 100.0;
  const l = length_km * 1000.0;
  const r = d / 2.0;
  const A = pi * Math.pow(r, 2);
  const V = current / (freeChargeDensity * q * A);
  const t = l / V;

  return t.toString();
}

const assignment3question7texta = document.getElementById('asn3question7a');
const assignment3question7textb = document.getElementById('asn3question7b');
const assignment3question7textc = document.getElementById('asn3question7a');
const assignment3question7textd = document.getElementById('asn3question7b');

const assignment3question7button = document.getElementById('asign3question7button');

const assignment3question7output = document.getElementById('asign3question7output');

assignment3question7button.addEventListener('click', () =>{
  assignment3question7output.innerHTML = calculateTimeToTravel(parseFloat(assignment3question7texta.value),parseFloat(assignment3question7textb.value),
  parseFloat(assignment3question7textc.value),parseFloat(assignment3question7textd.value));
});

//For Question 8

const assignment3question8texta = document.getElementById('asn3question8a');
const assignment3question8textb = document.getElementById('asn3question8b');
const assignment3question8textc = document.getElementById('asn3question8c');
const assignment3question8textd = document.getElementById('asn3question8d');
const assignment3question8texte = document.getElementById('asn3question8e');

const assignment3question8button = document.getElementById('asign3question8button');

const assignment3question8output = document.getElementById('asign3question8output');
const assignment3question8outputb = document.getElementById('asign3question8outputb');
const assignment3question8outputc = document.getElementById('asign3question8outputc');




function calculatePowerLoss( mainVoltage, wireLength, wireResistance, resistancePerMeter, loadCurrent) {

      const D = resistancePerMeter;
      const r = wireResistance;
      const L = wireLength;
      const V1 = mainVoltage;
      const I = loadCurrent;

      const R = r / D;
      const R1 = L * R;
      const V = V1 - (I * R1 * 2);
      const P = V * I;
      const PL = (I**2) * (R1 * 2);

      assignment3question8output.innerHTML = "the voltage at the customer's house is: " + V.toFixed(3).toString() + " Volts";

      assignment3question8outputb.innerHTML = "the power that the customer is receiving is : " + P.toFixed(3).toString() + " W ";

      assignment3question8outputc.innerHTML = "the power lost in the copper wires is : " + PL.toFixed(3).toString() + " W";

      
  }

assignment3question8button.addEventListener('click', () => {
  
  calculatePowerLoss(parseFloat(assignment3question8texta.value),parseFloat(assignment3question8textb.value),
  parseFloat(assignment3question8textc.value), parseFloat(assignment3question8textd.value), parseFloat(assignment3question8texte.value));

});


//For Question 9
//quick note having same named functions breaks the entire website
//for that reason the prefix of 2 was added at the end for the following funciton
function calculateResistance2(changeInCurrent, initialVoltage, finalVoltage) {

  const C = changeInCurrent;
  const V1 = initialVoltage;
  const V2 = finalVoltage;

  const R = (V1 - V2) / C;

  return "The resistance of the resistor is: "+R.toFixed(2).toString()+" ohm";
}

const assignment3question9texta = document.getElementById('asn3question9a');
const assignment3question9textb = document.getElementById('asn3question9b');
const assignment3question9textc = document.getElementById('asn3question9c');

const assignment3question9button = document.getElementById('asign3question9button');

const assignment3question9output = document.getElementById('asign3question9output');

assignment3question9button.addEventListener('click', ()=>{
  
assignment3question9output.innerHTML = calculateResistance2(parseFloat(assignment3question9texta.value),
parseFloat(assignment3question9textb.value), parseFloat(assignment3question9textc.value));

});


//For Question 10
function calculateOutputIncrease(surgeVoltage, lightbulbVoltage, lightbulbWattage) {

  const S = surgeVoltage;
  const V = lightbulbVoltage;
  const W = lightbulbWattage;

  const C = Math.pow(S, 2) / Math.pow(V, 2);
  const c = C * 100 - 100;
  return "The output will increase by: "+ C.toFixed(4).toString()+"%";
}
const assignment3question10texta = document.getElementById('asn3question10a');
const assignment3question10textb = document.getElementById('asn3question10b');
const assignment3question10textc = document.getElementById('asn3question10c');

const assignment3question10button = document.getElementById('asign3question10button');

const assignment3question10output = document.getElementById('asign3question10output');

assignment3question10button.addEventListener('click',()=>{
  assignment3question10output.innerHTML = calculateOutputIncrease(parseFloat(assignment3question10texta.value), parseFloat(assignment3question10textb.value),parseFloat(assignment3question10textc.value));
});


//For Question 11

const assignment3question11texta = document.getElementById('asn3question11a');
const assignment3question11textb = document.getElementById('asn3question11b');
const assignment3question11textc = document.getElementById('asn3question11c');
const assignment3question11textd = document.getElementById('asn3question11d');


const assignment3question11button = document.getElementById('asign3question11button');

const assignment3question11output = document.getElementById('asign3question11output');
const assignment3question11outputb = document.getElementById('asign3question11outputb');

function calculateWireProperties(mass, resistivity, density, requiredResistance) {
  const pi = Math.PI;

  const M = mass;
  const P = resistivity;
  const D = density;
  const R = requiredResistance;

  const V = M / (D * 1.0e6);
  const X = (V * R) / P;
  const L = Math.sqrt(X);
  const Y = V / (pi * L);
  const r = Math.sqrt(Y);
  const dia = r * 2;

  assignment3question11output.innerHTML = " the required length is : " + L.toString() + "meters";
  assignment3question11outputb.innerHTML = " the diameter of the wire is : " + dia.toFixed(3).toString()+ "meters";
}

assignment3question11button.addEventListener('click', ()=>{
  calculateWireProperties(parseFloat(assignment3question11texta.value),parseFloat(assignment3question11textb.value)
  ,parseFloat(assignment3question11textc.value),parseFloat(assignment3question11textd.value));
});



//For Question12