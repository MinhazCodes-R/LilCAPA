//NOTES:
// Update 2024 03 7
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


    const target = document.querySelector(tab.dataset.taba3Target);


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
  sideLength_mm = sideLength_mm/1000;
  let A = sideLength_mm**2;
  let L1 = length1_cm / 100.0;
  let L2 = length2_cm / 100.0;

  let r1 = (resistivity1 * L1) / A;
  let r2 = (resistivity2 * L2) / A;

  let totalResistance = r1 + r2;

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

    const target = document.querySelector(tab.dataset.taba6Target);


    taba6contents.forEach(tabcontent => {tabcontent.classList.remove('active');});//removing all active from the taba3contents

    taba6.forEach(tab2 =>{tab2.classList.remove('active');});//removing all active from taba3


    tab.classList.add('active');
    target.classList.add('active');

  });
});

//For question 1 but with variables of question 2

const assignment6question2button = document.getElementById('asign6question2button');

const assignment6question2output = document.getElementById('asign6question2output');


assignment6question2button.addEventListener('click',() =>{

  var r1 = parseFloat(document.getElementById('asn6question2a').value);
  var r2 = parseFloat(document.getElementById('asn6question2b').value);
  var r3 = parseFloat(document.getElementById('asn6question2c').value);
  var r4 = parseFloat(document.getElementById('asn6question2d').value);
  var r5 = parseFloat(document.getElementById('asn6question2e').value);
  var r6 = parseFloat(document.getElementById('asn6question2f').value);


  let ra = (1.0 / r3) + (1.0 / r4);
  ra = (1.0 / ra);
  let rb = r5 + r6;
  let rc = (1.0 / ra) + (1.0 / rb);
  rc = (1.0 / rc);
  let rd = rc + r2;
  let re = (1.0 / r1) + (1.0 / rd);
  let rt = (1.0 / re);

  assignment6question2output.innerHTML = "The total resistance between point A and B is: "+rt.toString()+" Ohms";
});



//For Question 2 but variables of question 1
//this was caused by an error with filing


const assignment6question1button = document.getElementById('asign6question1button');

const assignment6question1output = document.getElementById('asign6question1output');
const assignment6question1outputb = document.getElementById('asign6question1outputb');
const assignment6question1outputc = document.getElementById('asign6question1outputc');


assignment6question1button.addEventListener('click',()=>{

  var r1 = parseFloat(document.getElementById('asn6question1a').value);
  var r5 = parseFloat(document.getElementById('asn6question1b').value);
  var a1 = parseFloat(document.getElementById('asn6question1c').value);
  var a2 = parseFloat(document.getElementById('asn6question1d').value);
  var a3 = parseFloat(document.getElementById('asn6question1e').value);
  var v = parseFloat(document.getElementById('asn6question1f').value);

            
  var a5 = a1 - a2 + a3;
  console.log(a5);

  var v1 = r1 * a1;
  console.log(v1);

  var v2 = v - v1;
  console.log(v2);
  var r2 = v2/a2;
  console.log(r2);

  var v5 = a5 * r5;
  console.log(v5);
  var v3 = v - v5;
  console.log(v3);
  var r3 = v3/a3;
  console.log(r3);

  assignment6question1output.innerHTML = "The current at R5 is: "+a5.toString()+" A";
  assignment6question1outputb.innerHTML = "The resistance at R2 is: "+r2.toString()+" Ohms";
  assignment6question1outputc.innerHTML = "The resistance at R3 is: "+r3.toString()+" Ohms";

});

//for Question 3

const assignment6question3button = document.getElementById('asign6question3button');

const assignment6question3output = document.getElementById('asign6question3output');

assignment6question3button.addEventListener('click', ()=>{
  var r1 = parseFloat(document.getElementById('asn6question3').value);

  let r2 = ((r1 * (Math.sqrt(2.0) - 1)) / (1 - (Math.sqrt(2) / 2)));

  assignment6question3output.innerHTML = "The resistance value for R' is: "+ r2.toString()+ " Ohms";
});


//For Question 4
const assignment6question4button = document.getElementById('asign6question4button');

const assignment6question4output = document.getElementById('asign6question4outputa');
const assignment6question4outputb = document.getElementById('asign6question4outputb');
const assignment6question4outputc = document.getElementById('asign6question4outputc');

assignment6question4button.addEventListener('click',()=>{
  
  
  var e1 = parseFloat(document.getElementById('asn6question4a').value);
  var i2 = parseFloat(document.getElementById('asn6question4b').value);
  var r1 = parseFloat(document.getElementById('asn6question4c').value);
  var r2 = parseFloat(document.getElementById('asn6question4d').value);
  var r3 = parseFloat(document.getElementById('asn6question4e').value);

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

});

//For Question 5

const assignment6question5button = document.getElementById('asign6question5button');

const assignment6question5output = document.getElementById('asign6question5outputa');
const assignment6question5outputb = document.getElementById('asign6question5outputb');



assignment6question5button.addEventListener('click', () =>{

  r1 = parseFloat(document.getElementById('asn6question5a').value);
  r2 = parseFloat(document.getElementById('asn6question5b').value);
  r3 = parseFloat(document.getElementById('asn6question5c').value);
  r4 = parseFloat(document.getElementById('asn6question5d').value);
  r5 = parseFloat(document.getElementById('asn6question5e').value);
  r6 = parseFloat(document.getElementById('asn6question5f').value);
  r7 = parseFloat(document.getElementById('asn6question5g').value);
  r8 = parseFloat(document.getElementById('asn6question5h').value);
  e1 = parseFloat(document.getElementById('asn6question5i').value);
  e4 = parseFloat(document.getElementById('asn6question5j').value);
  e6 = parseFloat(document.getElementById('asn6question5k').value);

  let i = (e1 + e6)/(r1+r2+r3+r6+r7);
  let vab = Math.abs((-e4 -(i*r7) + e6 -(i*r6)));
  let fin = Math.abs((e1*r6+e1*r7+e4*r1+e4*r2+e4*r3+e4*r6+e4*r7-e6*r1-e6*r2-e6*r3)/(r1*r4+r1*r5+r1*r6+r1*r7+r1*r8+r2*r4+r2*r5+r2*r6+r2*r7+r2*r8+r3*r4+r3*r5+r3*r6+r3*r7+r3*r8+r4*r6+r4*r7+r5*r6+r5*r7+r6*r8+r7*r8));
   
  assignment6question5output.innerHTML = "The potential difference of Vab is: "+vab.toString()+"V";
  assignment6question5outputb.innerHTML = 'The current through r8 is: '+ fin.toString() + ' A';

});

//For Question 6

const assignment6question6button = document.getElementById('asign6question6button');

const assignment6question6output = document.getElementById('asign6question6outputa');


assignment6question6button.addEventListener('click', ()=>{

  r1 = parseFloat(document.getElementById('asn6question6a').value);
  r2 = parseFloat(document.getElementById('asn6question6b').value);
  r3 = parseFloat(document.getElementById('asn6question6c').value);
  r4= parseFloat(document.getElementById('asn6question6d').value);
  v1= parseFloat(document.getElementById('asn6question6e').value);

  rt = ((1.0/((1.0/(r1+r2))+(1.0/r3)))+(r4));

  i3 = v1/rt;

  i1 = ((v1 - (r4*i3))/(r1+r2));
  
  p = (i1**2.0)*(r2);

  assignment6question6output.innerHTML = "The going through R2 is: "+ p.toString()+ " W";
});

//For Question 7
const assignment6question7button = document.getElementById('asign6question7button');

const assignment6question7output = document.getElementById('asign6question7outputa');

assignment6question7button.addEventListener('click',()=>{

  var R = parseFloat(document.getElementById('asn6question7').value);

  let r = R*(((2**0.5)-1)/(1-((2**0.5)/2)));
  assignment6question7output.innerHTML = "The value of R' is: " + r.toString() + " Ohms";

});

//For Question 8

const assignment6question8button = document.getElementById('asign6question8button');

const assignment6question8output = document.getElementById('asign6question8outputa');
const assignment6question8outputb = document.getElementById('asign6question8outputb');
const assignment6question8outputc = document.getElementById('asign6question8outputc');



assignment6question8button.addEventListener('click', ()=>{

  
  var i3 = parseFloat(document.getElementById('asn6question8a').value);
  var e1 = parseFloat(document.getElementById('asn6question8b').value);
  var r1 = parseFloat(document.getElementById('asn6question8c').value);
  var r2 = parseFloat(document.getElementById('asn6question8d').value);
  var r3 = parseFloat(document.getElementById('asn6question8e').value);


  i3,e1,r1,r2,r3 = parseFloat(i3), parseFloat(e1),parseFloat(r1),parseFloat(r2),parseFloat(r3);

  var v2 = r2*i3
  var i1 = (e1-v2)/r1
  var i2 = i3-i1
  var e2 =((r3*(i2))+v2)

  assignment6question8output.innerHTML = "Value of I1 is " + i1.toString();
  assignment6question8outputb.innerHTML = "Value of I2 is " + i2.toString();
  assignment6question8outputc.innerHTML = "Value of E2 is " + e2.toString();

  assignment6_question8(assignment6question8texta,assignment6question8textb,assignment6question8textc,assignment6question8textd,assignment6question8texte);

});


//For Question 9

const assignment6question9button = document.getElementById('asign6question9button');

const assignment6question9output = document.getElementById('asign6question9outputa');
const assignment6question9outputb = document.getElementById('asign6question9outputb');


assignment6question9button.addEventListener('click', ()=>{
  
  var s = parseFloat(document.getElementById('asn6question9a').value);
  var p = parseFloat(document.getElementById('asn6question9b').value);

  console.log((s*s)-(4.0*(-1.0)*((-s)*p)));
  var r1 = (-s) + Math.sqrt((s*s)-(4.0*(-1.0)*((-s)*p)));
  r1 = r1/(-2);

  console.log(r1);

  var r2 = (-s) - Math.sqrt((s*s)-(4.0*(-1.0)*((-s)*p)));
  r2 = r2/(-2);
  console.log(r2);



  assignment6question9output.innerHTML = "The resistance of resistor 1 is " + r1.toString() + " ohms";
  assignment6question9outputb.innerHTML = "The resistance of resister 2 is " + r2.toString() + " ohms";


});

//For Question 10
const assignment6question10button = document.getElementById("asign6question10button");

const assignment6question10output = document.getElementById('asign6question10outputa');
const assignment6question10outputb = document.getElementById('asign6question10outputb');
const assignment6question10outputc = document.getElementById('asign6question10outputc');
const assignment6question10outputd = document.getElementById('asign6question10outputd');
const assignment6question10outpute = document.getElementById('asign6question10outpute');


assignment6question10button.addEventListener('click', ()=>{

  var r1 = parseFloat(document.getElementById('asn6question10a').value);
  var r2 = parseFloat(document.getElementById('asn6question10b').value);
  var r3 = parseFloat(document.getElementById('asn6question10c').value);
  var e1 = parseFloat(document.getElementById('asn6question10d').value);
  var e2 = parseFloat(document.getElementById('asn6question10e').value);
  var e3 = parseFloat(document.getElementById('asn6question10f').value);


  var v = (((e1/r1)+(e2/r2)+(e3/r3))/((1.0/r1)+(1.0/r2)+(1.0/r3)));

  var i1 = ((e1-v)/r1);
  var i2 = ((e2-v)/r2);
  var i3 = ((e3-v)/r3);

  
  assignment6question10output.innerHTML = "The current in I1 is: "+i1.toString()+" mA";
  assignment6question10outputb.innerHTML ="The current in I2 is: "+i2.toString()+" mA";
  assignment6question10outputc.innerHTML = "The current in I3 is: " + i3.toString() + " mA";
  assignment6question10outputd.innerHTML = "The voltage between c and f is: "+v.toString()+"V";
  let final_content =  "If you get one of the currents wrong, try multiplying the value by (-1), that should make it work properly.";
  assignment6question10outpute.innerHTML = final_content.bold();
  
});

//For Question 11

const assignment6question11button = document.getElementById("asign6question11button");

const assignment6question11output = document.getElementById('asign6question11outputa');


assignment6question11button.addEventListener('click', ()=>{

  
  var r = parseFloat(document.getElementById('asn6question11a').value);
  var e = parseFloat(document.getElementById('asn6question11b').value);asign6question12button

  var a = (1.71*r*e)-(2.71*r*2*e);
  var b = (1.71*r*1.71*r)-(2.71*r*3.71*r);


  var i2 = a/b;
  var i1 = (e - (1.71*r*i2))/(2.71*r);

  var v = ((i1+i2)*(1.71*r));

  var i4 = (v/(4.0*r));
  
  var iae = i4 - i1;

  assignment6question11output.innerHTML = "The current in Iae is : "+iae.toString()+" A";

});

//For Question 12 

const assignment6question12button = document.getElementById("asign6question12button");

const assignment6question12output = document.getElementById('asign6question12outputa');
const assignment6question12outputb = document.getElementById('asign6question12outputb');
const assignment6question12outputc = document.getElementById('asign6question12outputc');


assignment6question12button.addEventListener('click', ()=>{

  var c = parseFloat(document.getElementById('asn6question12a').value);
  var q1 = parseFloat(document.getElementById('asn6question12b').value);
  var r = parseFloat(document.getElementById('asn6question12c').value);
  var t1 = parseFloat(document.getElementById('asn6question12d').value);
  var t2 = parseFloat(document.getElementById('asn6question12e').value);

  var x1 = q1/c
  var x2 = x1/r
  var x3 = (-1.0*t1)/(r*c)

  var i1 = (x2*(Math.exp(x3)))

  var x4 = (-t2/(r*c))
  
  var q2 = (q1*(Math.exp(x4)))

  var i2 = ((q1/c)/r)

  assignment6question12output.innerHTML = "The value of current is: "+i1.toString()+" A";
  assignment6question12outputb.innerHTML = "The charge remaining is: "+q2.toString()+" uC";
  assignment6question12outputc.innerHTML = "The max current is: "+i2.toString()+" A";

});

//FOR Question 13
const assignment6question13button = document.getElementById("asign6question13button");

const assignment6question13output = document.getElementById('asign6question13outputa');


assignment6question13button.addEventListener('click', ()=>{
  var r1 = parseFloat(document.getElementById('asn6question13a').value);
  var r2 = parseFloat(document.getElementById('asn6question13b').value);
  var r3 = parseFloat(document.getElementById('asn6question13c').value);
  var v1 = parseFloat(document.getElementById('asn6question13d').value);
  var v2 = parseFloat(document.getElementById('asn6question13e').value);

  i = v1/(r1+r2);
  vab = Math.abs(v2-(i*r2));

  assignment6question13output.innerHTML = "The potential difference across points a and b is: "+ vab.toString()+" V";

});

//For Question 14

const assignment6question14button = document.getElementById("asign6question14button");

const assignment6question14output = document.getElementById('asign6question14outputa');

assignment6question14button.addEventListener('click', ()=>{
  var v = parseFloat(document.getElementById('asn6question14a').value);
  var r = parseFloat(document.getElementById('asn6question14b').value);
  var p = parseFloat(document.getElementById('asn6question14c').value);


  var r1 = ((v) + (Math.sqrt( ((-v)**2) -(4.0*(r)*(p)) )))/(2.0*r);
  var r2 = ((v) - (Math.sqrt( ((-v)**2) -(4.0*(r)*(p)) )))/(2.0*r);


  r1 = p/(r1*r1);
  r2 = p/(r2*r2);

  if (r1>r2){
    assignment6question14output.innerHTML = "The resistance values are: " + r1.toString()+" and " + r2.toString()+" in Ohms.";
  }
  else{

    assignment6question14output.innerHTML = "The resistance values are: " + r2.toString()+" and " + r1.toString()+" in Ohms.";
  }
});

//For Question 15

const assignment6question15button = document.getElementById("asign6question15button");

const assignment6question15output = document.getElementById('asign6question15outputa');

assignment6question15button.addEventListener('click', ()=>{

  var c = parseFloat(document.getElementById('asn6question15a').value);
  c = c*(1/1000000);
  var v1 = parseFloat(document.getElementById('asn6question15b').value);
  var v2 = parseFloat(document.getElementById('asn6question15c').value);
  var t = parseFloat(document.getElementById('asn6question15d').value);

  var valLn1 = Math.log(v1);

  var valLn2 = Math.log(v1-v2);

  var r=t/(c*(valLn1-valLn2));

  assignment6question15output.innerHTML = "The resistance value is: "+r.toString() +" Ohms.";
});

// For Question 16

const assignment6question16button = document.getElementById("asign6question16utton");

const assignment6question16output = document.getElementById('asign6question16outputa');
const assignment6question16outputb = document.getElementById('asign6question16outputb');

assignment6question16button.addEventListener('click', ()=>{

  var r1 = parseFloat(document.getElementById('asn6question16a').value);
  var r2 = parseFloat(document.getElementById('asn6question16b').value);
  var c1 = parseFloat(document.getElementById('asn6question16c').value);
  var c2 = parseFloat(document.getElementById('asn6question16d').value);
  var e = parseFloat(document.getElementById('asn6question16e').value);
  var t1 = parseFloat(document.getElementById('asn6question16f').value);
  var t2 = parseFloat(document.getElementById('asn6question16g').value);
  
  r1 = (1000)*r1;
  r2 = (1000)*r2;
  c1 = (1/1000000)*c1;
  c2 = (1/1000000)*c2;
  e = e * 1.0;
  t1 = t1 * (1/1000);
  t2 = t2 * (1/1000);


  ct = c1+c2;
  rt = (1.0/r1) + (1.0/r2);
  rt = 1/rt;

  var q1 = (c1*e*(1.0-Math.exp((-1.0*t1)/(rt*ct))));
  var q2 = (c2*e*(1.0-Math.exp((-1.0*t2)/(rt*ct))));
  
  assignment6question16output.innerHTML ="The value of the charge q1 on capacitor C1 is: "+q1.toString()+" C";
  assignment6question16outputb.innerHTML = "The value of the charge q2 on capacitor C2 is: "+q2.toString()+" C" ;
});


//Start of Assignment 7
//creating tab functionaility
const taba7 = document.querySelectorAll('[data-taba7-target]');
const taba7contents = document.querySelectorAll('[data-taba7-content]');

taba7.forEach(tab => {
  tab.addEventListener('click', ()=>{

    const target = document.querySelector(tab.dataset.taba7Target);
    console.log(target);


    taba7contents.forEach(tabcontent => {tabcontent.classList.remove('active');});//removing all active from the taba3contents

    taba7.forEach(tab2 =>{tab2.classList.remove('active');});//removing all active from taba3


    tab.classList.add('active');
    target.classList.add('active');

  });
});


//Question 1



const assignment7question1button = document.getElementById("asn7question1button");

const assignment7question1output = document.getElementById('asn7question1outputa');
const assignment7question1outputb = document.getElementById('asn7question1outputb');

assignment7question1button.addEventListener('click', ()=>{

  var v = parseFloat(document.getElementById('asn7question1a').value);
  var a = parseFloat(document.getElementById('asn7question1b').value);
  var E = parseFloat(document.getElementById('asn7question1c').value);

  var q = 1.6*10**(-19);
  var m = 9.11*10**(-31);
  var X = -q*E;
  var Y = m*a;
  var Z = q*v;

  var By = (X-Y)/Z;

  assignment7question1output.innerHTML = "the y component of the magnectic field in the region is " + By.toString() + "T";
  assignment7question1outputb.innerHTML = "the z component of the magnetic field in the region is 0 T ";

});

//Question 2

const assignment7question2button = document.getElementById("asn7question2button");

const assignment7question2output = document.getElementById('asn7question1outputa');
const assignment7question2outputb = document.getElementById('asn7question1outputb');
const assignment7question2outputc = document.getElementById('asn7question1outputc');
const assignment7question2outputd = document.getElementById('asn7question1outputd');

assignment7question2button.addEventListener('click', ()=>{

  var L = parseFloat(document.getElementById('asn7question2a').value)/100;
  var I = parseFloat(document.getElementById('asn7question2b').value);
  var B = parseFloat(document.getElementById('asn7question2c').value);
  var H = Math.sqrt(L**2 + L**2);
  var S = Math.sin(Math.PI/4);
  var F_ab = 0;
  var F_bc = I*L*B;
  var F_cd = I*H*B*S;
  var F_da = I*H*B;

  assignment7question2output.innerHTML = "the force on segment ab is : " + F_ab.toString() + "N";
  assignment7question2outputb.innerHTML = "the force on segment bc is : " + F_bc.toString() + "N";
  assignment7question2outputc.innerHTML = "the force on segment cd is : " + F_cd .toString()+ "N";
  assignment7question2outputd.innerHTML = "the force on segment da is : " + F_da.toString()+ "N";

});

//Question 3


const assignment7question3button = document.getElementById("asn7question3button");

const assignment7question3output = document.getElementById('asn7question3outputa');
const assignment7question3outputb = document.getElementById('asn7question3outputb');


assignment7question3button.addEventListener('click', ()=>{

  var M = parseFloat(document.getElementById('asn7question3a').value);
  var L = parseFloat(document.getElementById('asn7question3b').value);
  var N = parseFloat(document.getElementById('asn7question3c').value);
  var I = parseFloat(document.getElementById('asn7question3d').value);
  var B = parseFloat(document.getElementById('asn7question3e').value);

  var G = 9.8;
  var S = L/(N*4);
  var A = S**2;
  var X = M*G*(S/2);
  var Y = N*I*A*B;
  var theta = Math.atan(X/Y);

  // If there are any calculation errors it could be because of the radians to 
  //degree conversion

  theta = theta*180/(Math.PI);
  var phi = 90-theta;
  var D = theta*180/(Math.PI);
  var F = Math.sin(D);
  var T = N*I*A*B*F

  assignment7question3output.innerHTML = "the angle between the plane and the vertical is: " + phi.toString() + "degrees";
  assignment7question3outputb.innerHTML = "the torque acting on the coil due to the magnetic field is: " + T.toString() + "N";

});

//For Question 4


const assignment7question4button = document.getElementById("asn7question4button");

const assignment7question4output = document.getElementById('asn7question4outputa');
const assignment7question4outputb = document.getElementById('asn7question4outputb');


assignment7question4button.addEventListener('click', ()=>{

  var V = parseFloat(document.getElementById('asn7question4a').value);
  var B = parseFloat(document.getElementById('asn7question4b').value);
  var M1 = 238.0*1.66 /(10**27);
  var M2 = 235*1.66/(10**27);
  var q = 1.6/(10**19);
  var X1 = (2*q*V)/M1;
  var X2 = (2*q*V)/M2;
  var V1 = Math.sqrt(X1);
  var V2 = Math.sqrt(X2);
  var r1 = (M1*V1)/(q*B);
  var r2 = (M2*V2)/(q*B);

  console.log(r1);
  console.log(r2);

  assignment7question4output.innerHTML = "the radius of the circular path for the uranium-238 atom is: " + r1.toString() + "meters";
  assignment7question4outputb.innerHTML = "the radies of the circular path for the uranium 235 atom is: " + r2.toString() + "meters";

});

//Question 5

const assignment7question5button = document.getElementById("asn7question5button");


const assignment7question5outputa = document.getElementById("asn7question5outputa");
assignment7question5button.addEventListener("click", ()=>{


	var E = parseFloat(document.getElementById("asn7question5a").value);
	var B = parseFloat(document.getElementById("asn7question5b").value);

  var q = 1.6/(10**19);
  var K = E*q;
  var M = 1.67/(10**27);
  var X = (2*K)/M;
  var V = Math.sqrt(X);
  var R = (M*V)/(q*B)

	assignment7question5outputa.innerHTML = " the required radius of the cyclotron is: " , R.toString() , "meters";


});
//for question 6
const assignment7question6button = document.getElementById("asn7question6button");


const assignment7question6outputa = document.getElementById("asn7question6outputa");
const assignment7question6outputb = document.getElementById("asn7question6outputb");


assignment7question6button.addEventListener("click", ()=>{


	var I = parseFloat(document.getElementById("asn7question6a").value);
	var B1 = parseFloat(document.getElementById("asn7question6b").value);
	var V1  = parseFloat(document.getElementById("asn7question6c").value);
	var V2 = parseFloat(document.getElementById("asn7question6d").value);
	var D = parseFloat(document.getElementById("asn7question6e").value);
  
  var q = 1.6/(10**19);
  var X = (V2/V1);
  var B2 = X*B1;
  var N = (I*B1)/(V1*q*D);


	assignment7question6outputa.innerHTML = "the magnitude of the unknown field is: " + B2.toString() +  "T";
	assignment7question6outputb.innerHTML = "the charge carrier density is : " + N.toString() + "m^-3";


});

//For question 7

const assignment7question7button = document.getElementById("asn7question7button");


const assignment7question7outputa = document.getElementById("asn7question7outputa");
const assignment7question7outputb = document.getElementById("asn7question7outputb");


assignment7question7button.addEventListener("click", ()=>{


	var E = parseFloat(document.getElementById("asn7question7a").value);
  var q = 1.6/(10**19);
  E = E*q;
  var M = 1.67/(10**27);

	var A = parseFloat(document.getElementById("asn7question7b").value);
	var B = parseFloat(document.getElementById("asn7question7c").value);

  var S = A*180/(Math.PI);

	assignment7question7outputa.innerHTML = "the distance x is: " + R.toString() +"meters";
	assignment7question7outputb.innerHTML = "the entry and exit angles are the same";


});

//question 8

const assignment7question8button = document.getElementById("asn7question8button");


const assignment7question8outputa = document.getElementById("asn7question8outputa");


assignment7question8button.addEventListener("click", ()=>{


	var T = parseFloat(document.getElementById("asn7question8a").value);
	var A = parseFloat(document.getElementById("asn7question8b").value);
  D = A*180/(Math.PI);
  F = Math.sin(D);

	var B = parseFloat(document.getElementById("asn7question8c").value);

  U = F/(B*F);

	assignment7question8outputa.innerHTML = " the magnitude of its magnetic dipole moment is : " + U.toString() + "N*m/T";


});

//For Question 9

const assignment7question9button = document.getElementById("asn7question9button");


const assignment7question9outputa = document.getElementById("asn7question9outputa");
const assignment7question9outputb = document.getElementById("asn7question9outputb");
const assignment7question9outputc = document.getElementById("asn7question9outputc");


assignment7question9button.addEventListener("click", ()=>{


	var B = parseFloat(document.getElementById("asn7question9a").value);
	var R = parseFloat(document.getElementById("asn7question9b").value);

  var q = 1.6/(10**19);
  var u = 1.66/(10**27);

  var M1 = 28*u;
  var M2 = 32*u;
  var M3 = 28*u;
  var X1 = 2*M1;
  var X2 =  2*M2;
  var X3 = 2*M3;
  var X = (B**2)*(R**2)*(q);
  var V1 = X / X1;
  var V2 = X / X2;
  var V3 = X / X3;


	assignment7question9outputa.innerHTML = " the potential differene required for N2+ is : " + V1.toString() + " V";
	assignment7question9outputb.innerHTML = " the potential differene required for N2+ is : " +  V2.toString() + " V";
	assignment7question9outputc.innerHTML = " the potential differene required for N2+ is : " + V3.toString()+ " V" ;


});

//for question 10

const assignment7question10button = document.getElementById("asn7question10button");


const assignment7question10outputa = document.getElementById("asn7question10outputa");


assignment7question10button.addEventListener("click", ()=>{


	var L = parseFloat(document.getElementById("asn7question10a").value);
	var W = parseFloat(document.getElementById("asn7question10b").value);
	var I = parseFloat(document.getElementById("asn7question10c").value);
	var M = parseFloat(document.getElementById("asn7question10d").value);
	var N = parseFloat(document.getElementById("asn7question10e").value);

  var G = 9.8;
  var A = L*W;
  var B = (M*G*W) / ( 2*N*I*A);


	assignment7question10outputa.innerHTML = "The required magnetic field strength is: " + B.toString() + "T";


});