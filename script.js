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
  
  var Q = parseFloat(assignment3question3texta.value);
  var W = parseFloat(assignment3question3textb.value);
  var I = (Q*W)/(2*Math.PI);
  assignment3question3outputb.innerHTML = "the average current represented by the spinning sphere is : " + I.toString() + " A";

});

//For Question4
//This question is not in the loncapa

// const assignment3question4texta = document.getElementById('asn3question4a');
// const assignment3question4textb = document.getElementById('asn3question4b');
// const assignment3question4button = document.getElementById('asign3question4button');
// const assignment3question4output = document.getElementById('asign3question4output');
// const assignment3question4outputb = document.getElementById('asign3question4outputb');


// assignment3question4button.addEventListener('click', ()=> {
  
//   let B = parseFloat(assignment3question4texta.value); B=B* (10 ** 6);
//   let q = 1.6e-19;
//   let m = 3.3475e-27;
//   let x = (B * 2) / m;
//   let V = Math.sqrt(x);
//   let filler1 = parseFloat(assignment3question4textb.value);
//   let t = q / filler1;
//   let d = V * t;
//   assignment3question4output.innerHTML = "The atoms are: " + d.toFixed(5).toString() + " meters apart";

// });

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

//BEGINING OF ASSIGNMENT 6
//tab functionality

const taba6 = document.querySelectorAll('[data-taba6-target]');
const taba6contents = document.querySelectorAll('[data-taba6-content]');

taba6.forEach(tab => {
  tab.addEventListener('click', ()=>{

    console.log(tab)
    const target = document.querySelector(tab.dataset.taba6Target);
    console.log(target);
    console.log(target.classList);

    taba6contents.forEach(tabcontent => {tabcontent.classList.remove('active');});//removing all active from the taba3contents

    taba6.forEach(tab2 =>{tab2.classList.remove('active');});//removing all active from taba3


    tab.classList.add('active');
    target.classList.add('active');

  });
});

//For question 1 but with variables of question 2
const assignment6question2texta = parseFloat(document.getElementById('asn6question2a').value);
const assignment6question2textb = parseFloat(document.getElementById('asn6question2b').value);
const assignment6question2textc = parseFloat(document.getElementById('asn6question2c').value);
const assignment6question2textd = parseFloat(document.getElementById('asn6question2d').value);
const assignment6question2texte = parseFloat(document.getElementById('asn6question2e').value);
const assignment6question2textf = parseFloat(document.getElementById('asn6question2f').value);

const assignment6question2button = document.getElementById('asign6question2button');

const assignment6question2output = document.getElementById('asign6question2output');


function calculateTotalResistance0601(r1, r2, r3, r4, r5, r6) {
  console.log(r1,r2,r3,r4,r5,r6);
  let ra = (1.0 / r3) + (1.0 / r4);
  ra = (1.0 / ra);
  let rb = r5 + r6;
  let rc = (1.0 / ra) + (1.0 / rb);
  rc = (1.0 / rc);
  let rd = rc + r2;
  let re = (1.0 / r1) + (1.0 / rd);
  let rt = (1.0 / re);
  
  assignment6question2output.innerHTML = "The total resistance between point A and B is: "+rt.toString()+" Ohms";
}

assignment6question2button.addEventListener('click',() =>{
  calculateTotalResistance0601(assignment6question2texta,assignment6question2textb,assignment6question2textc,assignment6question2textd,assignment6question2texte,assignment6question2textf);
});



//For Question 2 but variables of question 1
//this was caused by an error with filing



const assignment6question1texta = parseFloat(document.getElementById('asn6question1a').value);
const assignment6question1textb = parseFloat(document.getElementById('asn6question1b').value);
const assignment6question1textc = parseFloat(document.getElementById('asn6question1c').value);
const assignment6question1textd = parseFloat(document.getElementById('asn6question1d').value);
const assignment6question1texte = parseFloat(document.getElementById('asn6question1e').value);
const assignment6question1textf = parseFloat(document.getElementById('asn6question1f').value);

const assignment6question1button = document.getElementById('asign6question1button');

const assignment6question1output = document.getElementById('asign6question1output');
const assignment6question1outputb = document.getElementById('asign6question1outputb');
const assignment6question1outputc = document.getElementById('asign6question1outputc');

function calculateResistance6(r1, r5,a1,a2,a3,v) {
  r1,r5,a1,a2,a3,v = 1.0*r1,1.0*r5,1.0*a1,1.0*a2,1.0*a3,1.0*v
            
  a5 = a1 - a2 + a3

  v1 = r1 * a1
  v2 = v - v1
  r2 = v2/a2

  v5 = a5 * r5
  v3 = v - v5
  r3 = v3/a3
  assignment6question1output.innerHTML = "The current at R5 is: "+a5.toString()+" A";
  assignment6question1outputb.innerHTML = "The resistance at R2 is: "+r2.toString()+" Ohms";
  assignment6question1outputc.innerHTML = "The resistance at R3 is: "+r3.toString()+" Ohms";

}


assignment6question1button.addEventListener('click',()=>{
  calculateResistance6(assignment6question1texta,assignment6question1textb,assignment6question1textc,assignment6question1textd,assignment6question1texte,assignment6question1textf);
  console.log('hell');  
});

//for Question 3
const assignment6question3text = parseFloat(document.getElementById('asn6question3').value);

const assignment6question3button = document.getElementById('asign6question3button');

const assignment6question3output = document.getElementById('asign6question3output');

function calculateResistance06(r1) {
  r1 = parseFloat(r1);
  let r2 = ((r1 * (Math.sqrt(2.0) - 1)) / (1 - (Math.sqrt(2) / 2)));

  assignment6question3output.innerHTML = "The resistance value for R' is: "+ r2.toString()+ " Ohms";
}

assignment6question3button.addEventListener('click', ()=>{
  calculateResistance06(assignment6question3text);
});


//For Question 4

const assignment6question4textb = parseFloat(document.getElementById('asn6question4a').value);
const assignment6question4textc = parseFloat(document.getElementById('asn6question4b').value);
const assignment6question4textd = parseFloat(document.getElementById('asn6question4c').value);
const assignment6question4texte = parseFloat(document.getElementById('asn6question4d').value);
const assignment6question4textf = parseFloat(document.getElementById('asn6question4e').value);

const assignment6question4button = document.getElementById('asign6question4button');

const assignment6question4output = document.getElementById('asign6question4outputa');
const assignment6question4outputb = document.getElementById('asign6question4outputb');
const assignment6question4outputc = document.getElementById('asign6question4outputc');

function calculateElectricValues(e1,i2,r1,r2,r3) {
  console.log('hello');

  e1 = parseFloat(e1); i2=parseFloat(i2);r1=parseFloat(r1);parseFloat(r2);parseFloat(r3);

  e1 = 1.0 * e1;
  r1 = 1.0 * r1;
  r2 = 1.0 * r2;
  r3 = 1.0 * r3;

  let i1 = (e1 - (i2 * r2)) / r1;
  let i3 = i2 - i1;
  let v2 = (i2 * r2) + (i3 * r3);

  assignment6question4output.innerHTML = "Current in I1: "+ i1.toString()+ "A";
  assignment6question4outputb.innerHTML = "Current in I2: "+ i3.toString()+ "A";
  assignment6question4outputc.innerHTML = "Voltage in E2: "+ v2.toString()+ "V";
}

assignment6question4button.addEventListener('click',()=>{
  calculateElectricValues(assignment6question4textb,assignment6question4textc,assignment6question4textd,assignment6question4texte,assignment6question4textf);
});

//For Question 5

const assignment6question5textb = parseFloat(document.getElementById('asn6question5a').value);
const assignment6question5textc = parseFloat(document.getElementById('asn6question5b').value);
const assignment6question5textd = parseFloat(document.getElementById('asn6question5c').value);
const assignment6question5texte = parseFloat(document.getElementById('asn6question5d').value);
const assignment6question5textf = parseFloat(document.getElementById('asn6question5e').value);
const assignment6question5textg = parseFloat(document.getElementById('asn6question5f').value);
const assignment6question5texth = parseFloat(document.getElementById('asn6question5g').value);
const assignment6question5texti = parseFloat(document.getElementById('asn6question5h').value);
const assignment6question5textj = parseFloat(document.getElementById('asn6question5i').value);
const assignment6question5textk = parseFloat(document.getElementById('asn6question5j').value);
const assignment6question5textl = parseFloat(document.getElementById('asn6question5k').value);

const assignment6question5button = document.getElementById('asign6question5button');

const assignment6question5output = document.getElementById('asign6question5outputa');
const assignment6question5outputb = document.getElementById('asign6question5outputb');

function asignment6question5function(r1,r2,r3,r4,r5,r6,r7,r8,e1,e4,e6){
  r1 = parseFloat(r1);
  r2 = parseFloat(r2);
  r3 = parseFloat(r3);
  r4 = parseFloat(r4);
  r5 = parseFloat(r5);
  r6 = parseFloat(r6);
  r7 = parseFloat(r7);
  r8 = parseFloat(r8);
  e1 = parseFloat(e1);
  e4 = parseFloat(e4);
  e6 = parseFloat(e6);

  let i = (e1 + e6)/(r1+r2+r3+r6+r7);
  let vab = Math.abs((-e4 -(i*r7) + e6 -(i*r6)));
  let fin = Math.abs((e1*r6+e1*r7+e4*r1+e4*r2+e4*r3+e4*r6+e4*r7-e6*r1-e6*r2-e6*r3)/(r1*r4+r1*r5+r1*r6+r1*r7+r1*r8+r2*r4+r2*r5+r2*r6+r2*r7+r2*r8+r3*r4+r3*r5+r3*r6+r3*r7+r3*r8+r4*r6+r4*r7+r5*r6+r5*r7+r6*r8+r7*r8));
   
  assignment6question5output.innerHTML = "The potential difference of Vab is: "+vab.toString()+"V";
  assignment6question5outputb.innerHTML = 'The current through r8 is: '+ fin.toString();
};

assignment6question5button.addEventListener('click', () =>{

  asignment6question5function(assignment6question5textb,assignment6question5textc,assignment6question5textd,assignment6question5texte,assignment6question5textf,assignment6question5textg,assignment6question5texth,assignment6question5texti,assignment6question5textj,assignment6question5textk,assignment6question5textl);

});

//For Question 6
const assignment6question6texth = parseFloat(document.getElementById('asn6question6a').value);
const assignment6question6texti = parseFloat(document.getElementById('asn6question6b').value);
const assignment6question6textj = parseFloat(document.getElementById('asn6question6c').value);
const assignment6question6textk = parseFloat(document.getElementById('asn6question6d').value);
const assignment6question6textl = parseFloat(document.getElementById('asn6question6e').value);

const assignment6question6button = document.getElementById('asign6question6button');

const assignment6question6output = document.getElementById('asign6question6outputa');

function asignment6question6(r1,r2,r3,r4,v1){
  r1,r2,r3,r4,v1=parseFloat(r1),parseFloat(r2),parseFloat(r3),parseFloat(r4),parseFloat(v1);

  rt = ((1.0/((1.0/(r1+r2))+(1.0/r3)))+(r4));

  i3 = v1/rt;

  i1 = ((v1 - (r4*i3))/(r1+r2));
  
  p = (i1**2.0)*(r2);

  assignment6question6output.innerHTML = "The going through R2 is: "+ p.toString()+ " W";  

};

assignment6question6button.addEventListener('click', ()=>{

  asignment6question6(assignment6question6texth,assignment6question6texti,assignment6question6textj,assignment6question6textk,assignment6question6textl);

});

//For Question 7
const assignment6question7text = parseFloat(document.getElementById('asn6question7').value);

const assignment6question7button = document.getElementById('asign6question7button');

const assignment6question7output = document.getElementById('asign6question7output');

function asign6question7(R){
  R = parseFloat(R);

  let r = R*(((2**0.5)-1)/(1-((2**0.5)/2)));
  assignment6question7output.innerHTML = "The value of R' is: " + r.toString();

};

assignment6question7button.addEventListener('click',()=>{

  asign6question7(assignment6question7text);

});

//For Question 8

const assignment6question8texta = parseFloat(document.getElementById('asn6question8a').value);
const assignment6question8textb = parseFloat(document.getElementById('asn6question8b').value);
const assignment6question8textc = parseFloat(document.getElementById('asn6question8c').value);
const assignment6question8textd = parseFloat(document.getElementById('asn6question8d').value);
const assignment6question8texte = parseFloat(document.getElementById('asn6question8e').value);

const assignment6question8button = document.getElementById('asign6question8button');

const assignment6question8output = document.getElementById('asign6question8outputa');
const assignment6question8outputb = document.getElementById('asign6question8outputb');
const assignment6question8outputc = document.getElementById('asign6question8outputc');

function assignment6_question8(i3,e1,r1,r2,r3){

  i3,e1,r1,r2,r3 = parseFloat(i3), parseFloat(e1),parseFloat(r1),parseFloat(r2),parseFloat(r3);

  var v2 = r2*i3
  var i1 = (e1-v2)/r1
  var i2 = i3-i1
  var e2 =((r3*(i2))+v2)

  assignment6question8output.innerHTML = "Value of I1 is " + i1.toString();
  assignment6question8outputb.innerHTML = "Value of I2 is " + i2.toString();
  assignment6question8outputc.innerHTML = "Value of E2 is " + e2.toString();

};

assignment6question8button.addEventListener('click', ()=>{

  assignment6_question8(assignment6question8texta,assignment6question8textb,assignment6question8textc,assignment6question8textd,assignment6question8texte);

});


//For Question 9
const assignment6question9textd = parseFloat(document.getElementById('asn6question9a').value);
const assignment6question9texte = parseFloat(document.getElementById('asn6question9b').value);

const assignment6question9button = document.getElementById('asign6question9button');

const assignment6question9output = document.getElementById('asign6question9outputa');
const assignment6question9outputb = document.getElementById('asign6question9outputb');

function asignment6question9(s,p){
  s,p = parseFloat(s), parseFloat(p);
  s,p=1.0*s,1.0*p;
  var r1 = ((-s) + (sqrt((s**2)-(4.0*(-1.0)*((-s)*p)))))/(-2.0);
  var r2 = ((-s) - (sqrt((s**2)-(4.0*(-1.0)*((-s)*p)))))/(-2.0);
  assignment6question9output.innerHTML = "The resistance of resistor 1 is" + r1.toString();
  assignment6question9output.innerHTML = "The resistance of resister 2 is" + r2.toString();

}

assignment6question9button.addEventListener('click', ()=>{

  asignment6question9(assignment6question9textd,assignment6question9texte);

});

//For Question 10

const assignment6question10textb = parseFloat(document.getElementById('asn6question10a').value);
const assignment6question10textc = parseFloat(document.getElementById('asn6question10b').value);
const assignment6question10textd = parseFloat(document.getElementById('asn6question10c').value);
const assignment6question10texte = parseFloat(document.getElementById('asn6question10d').value);
const assignment6question10textf = parseFloat(document.getElementById('asn6question10e').value);
const assignment6question10textg = parseFloat(document.getElementById('asn6question10f').value);

const assignment6question10button = document.getElementById("asign6question10button");

const assignment6question10output = document.getElementById('asign6question10outputa');
const assignment6question10outputb = document.getElementById('asign6question10outputb');
const assignment6question10outputc = document.getElementById('asign6question10outputc');
const assignment6question10outputd = document.getElementById('asign6question10outputd');
const assignment6question10outpute = document.getElementById('asign6question10outpute');

function asign3question10(r1,r2,r3,e1,e2,e3){

  r1,r2,r3,e1,e2,e3 = parseFloat(r1),parseFloat(r2),parseFloat(r3),parseFloat(e1),parseFloat(e2),parseFloat(e3); 

  var v = (((e1/r1)+(e2/r2)+(e3/r3))/((1.0/r1)+(1.0/r2)+(1.0/r3)))

  var i1 = ((e1-v)/r1)
  var i2 = ((e2-v)/r2)
  var i3 = ((e3-v)/r3)
  
  assignment6question10output.innerHTML = "The current in I1 is: "+i1.toString()+"mA";
  assignment6question10outputb.innerHTML ="The current in I2 is: "+i2.toString()+"mA";
  assignment6question10outputc.innerHTML = "The current in I3 is: " + i3.toString() + "mA";
  assignment6question10outputd.innerHTML = "The voltage between c and f is: "+v.toString()+"V";
  assignment6question10outpute.innerHTML = "If you get one of the currents wrong, try multiplying the value by (-1), that should make it work properly.";
};

assignment6question10button.addEventListener('click', ()=>{
  asign3question10(assignment6question10textb,assignment6question10textc,assignment6question10textd,assignment6question10texte,assignment6question10textf,assignment6question10textg);
});

//For Question 11


const assignment6question11texta = parseFloat(document.getElementById('asn6question11a').value);
const assignment6question11textb = parseFloat(document.getElementById('asn6question11b').value);

const assignment6question11button = document.getElementById("asign6question11button");

const assignment6question11output = document.getElementById('asign6question11outputa');

function asign3question11(r,e){

  r, e = parseFloat(r), parseFloat(e);

  var i2 = ((1.71*r*e)-(2.71*r*2*e))/((1.71*r*1.71*r)-(2.71*r*3.71*r));
  var i1 = (e - (1.71*r*i2))/(2.71*r);

  var v = ((i1+i2)*(1.71*r));

  var i4 = (v/(4.0*r));
  
  var iae = i4 - i1;

  assignment6question11output.innerHTML = "The current in Iae is : "+iae.toString()+" A";

};

assignment6question11button.addEventListener('click', ()=>{

  asign3question11(assignment6question11texta,assignment6question11textb);

});

//For Question 12 


const assignment6question12texta = parseFloat(document.getElementById('asn6question12a').value);
const assignment6question12textb = parseFloat(document.getElementById('asn6question12b').value);
const assignment6question12textc = parseFloat(document.getElementById('asn6question12c').value);
const assignment6question12textd = parseFloat(document.getElementById('asn6question12d').value);
const assignment6question12texte = parseFloat(document.getElementById('asn6question12e').value);

const assignment6question12button = document.getElementById("asign6question12button");

const assignment6question12output = document.getElementById('asign6question12outputa');
const assignment6question12outputb = document.getElementById('asign6question12outputb');
const assignment6question12outputc = document.getElementById('asign6question12outputc');

function asign6question12(c,q1,r,t1,t2){
  c,q1,r,t1,t2 = parseFloat(c), parseFloat(q1), parseFloat(r), parseFloat(t1),parseFloat(t2);

  var x1 = q1/c
  var x2 = x1/r
  var x3 = (-1.0*t1)/(r*c)

  var i1 = (x2*(Math.exp(x3)))

  var x4 = (-t2/(r*c))
  
  var q2 = (q1*(Math.exp(x4)))

  var i2 = ((q1/c)/r)

  assignment6question12output.innerHTML = "The value of current is: "+i1.toString()+" A";
  assignment6question12outputb.innerHTML = "The charge remaining is: "+q2.toString()+" C";
  assignment6question12outputc.innerHTML = "The max current is: "+i2.toString()+" A";
};

assignment6question12button.addEventListener('click', ()=>{

  asign6question12(assignment6question12texta,assignment6question12textb,assignment6question12textc,assignment6question12textd,assignment6question12texte);

});

//FOR Question 13


const assignment6question13texta = parseFloat(document.getElementById('asn6question12a').value);
const assignment6question13textb = parseFloat(document.getElementById('asn6question12b').value);
const assignment6question13textc = parseFloat(document.getElementById('asn6question12c').value);
const assignment6question13textd = parseFloat(document.getElementById('asn6question12d').value);
const assignment6question13texte = parseFloat(document.getElementById('asn6question12e').value);

const assignment6question13button = document.getElementById("asign6question13button");

const assignment6question13output = document.getElementById('asign6question13outputa');

function asignment6question13(r1,r2,r3,v1,v2){
  r1,r2,r3,v1,v2 = parseFloat(r1),parseFloat(r2), parseFloat(r3), parseFloat(v1), parseFloat(v2);

  var i = v1/(r1+r2);
  var vab = Math.abs(v2-(i*r2));
  assignment6question13output.innerHTML = "The potential difference across points a and b is: "+vab.toString()+" V";
};

assignment6question13button.addEventListener('click', ()=>{

  asignment6question13(assignment6question13texta,assignment6question13textb,assignment6question13textc,assignment6question13textd,assignment6question13texte);

});

//For Question 14
const assignment6question14texta = parseFloat(document.getElementById('asn6question14a').value);
const assignment6question14textb = parseFloat(document.getElementById('asn6question14b').value);
const assignment6question14textc = parseFloat(document.getElementById('asn6question14c').value);

const assignment6question14button = document.getElementById("asign6question14button");

const assignment6question14output = document.getElementById('asign6question14outputa');

function asignment6question14(v,r,p){
  v,r,p = parseFloat(v), parseFloat(r), parseFloat(p);


  var r1 = ((v) + (Math.sqrt( ((-v)**2) -(4.0*(r)*(p)) )))/(2.0*r);
  var r2 = ((v) - (Math.sqrt( ((-v)**2) -(4.0*(r)*(p)) )))/(2.0*r);


  r1 = p/(r1**2);
  r2 = p/(r2**2);

  assignment6question14output.innerHTML = "The resistance values are: "+r1.toFixed(3).toString()+" and "+r2.toFixed(3).toString()+" in Ohms.";
            
};

assignment6question14button.addEventListener('click', ()=>{
  asignment6question14(assignment6question14texta,assignment6question14textb,assignment6question14textc);
});

//For Question 15
const assignment6question15texta = parseFloat(document.getElementById('asn6question15a').value);
const assignment6question15textb = parseFloat(document.getElementById('asn6question15b').value);
const assignment6question15textc = parseFloat(document.getElementById('asn6question15c').value);

const assignment6question15button = document.getElementById("asign6question15button");

const assignment6question15output = document.getElementById('asign6question15outputa');

function assingment6question15(c,v1,v2,t){

  c,v1,v2,t = parseFloat(c), parseFloat(v1), parseFloat(v2),parseFloat(t);
  
  var valLn1 = Math.log(v1);

  var valLn2 = Math.log(v1-v2);

  var r=t/(c*(valLn1-valLn2));

  assignment6question15output.innerHTML = "The resistance value is:"+r.toString() +"Ohms.";


};

assignment6question15button.addEventListener('click', ()=>{
  assingment6question15(assignment6question15texta,assignment6question15textb,assignment6question15textc);
});

// For Question 16

const assignment6question16textc = parseFloat(document.getElementById('asn6question16a').value);
const assignment6question16textd = parseFloat(document.getElementById('asn6question16b').value);
const assignment6question16texte = parseFloat(document.getElementById('asn6question16c').value);
const assignment6question16textf = parseFloat(document.getElementById('asn6question16d').value);
const assignment6question16textg = parseFloat(document.getElementById('asn6question16e').value);
const assignment6question16texth = parseFloat(document.getElementById('asn6question16f').value);

const assignment6question16button = document.getElementById("asign6question16utton");

const assignment6question16output = document.getElementById('asign6question16outputa');
const assignment6question16outputb = document.getElementById('asign6question16outputb');

function asign6question16(r1,r2,c1,c2,e,t1,t2){
  r1,r2,c1,c2,e,t1,t2 = parseFloat(r1),parseFloat(r2),parseFloat(c1),parseFloat(c2),parseFloat(e),parseFloat(t1),parseFloat(t2);

  r1,r2,c1,c2,e,t1,t2 = (1.0e3)*r1,(1.0e3)*r2,(1.0e-6)*c1,(1.0e-6)*c2,1.0*e,(1.0e-3)*t1,(1.0e-3)*t2;

  ct = c1+c2;
  rt = 1.0/((1.0/r1) + (1.0/r2));

  q1 = (c1*e*(1.0-Math.exp((-1.0*t1)/(rt*ct))));
  q2 = (c2*e*(1.0-Math.exp((-1.0*t2)/(rt*ct))));
  
  assignment6question16output.innerHTML ="The value of the charge q1 on capacitor C1 is: "+q1.toString()+" C";
  assignment6question16outputb.innerHTML = "The value of the charge q2 on capacitor C2 is: "+q2.toString()+" C" ;

};

assignment6question16button.addEventListener('click', ()=>{

  
  asign6question16(assignment6question16textc,assignment6question16textd,assignment6question16texte,assignment6question16textf,assignment6question16textg,assignment6question16texth);

});