const one = document.getElementById("seat-1");
const two = document.getElementById("seat-2");
const three = document.getElementById("seat-3");
const four = document.getElementById("seat-4");
const five = document.getElementById("seat-5");
const six = document.getElementById("seat-6");
const seven = document.getElementById("seat-7");
const eight = document.getElementById("seat-8");
const nine = document.getElementById("seat-9");

const woba1 = document.getElementById("wOBA1");
const woba2 = document.getElementById("wOBA2");
const woba3 = document.getElementById("wOBA3");
const woba4 = document.getElementById("wOBA4");
const woba5 = document.getElementById("wOBA5");
const woba6 = document.getElementById("wOBA6");
const woba7 = document.getElementById("wOBA7");
const woba8 = document.getElementById("wOBA8");
const woba9 = document.getElementById("wOBA9");

const lotteCalculateButton = document.getElementById("lotteCalculate");


function calculate (){
  const result = (Number(one.value)*Number(woba1.value) + Number(two.value)*Number(woba2.value) + 
  Number(three.value)*Number(woba3.value) + Number(four.value)*Number(woba4.value) + 
  Number(five.value)*Number(woba5.value) + Number(six.value)*Number(woba6.value) + Number(seven.value)*Number(woba7.value) + 
  Number(eight.value)*Number(woba8.value) + Number(nine.value)*Number(woba9.value))  /
   (Number(one.value)+Number(two.value)+Number(three.value)+
   Number(four.value)+Number(five.value)+Number(six.value)+Number(seven.value)+Number(eight.value)+Number(nine.value));
  
  document.getElementById("lotteResult").innerHTML = result.toFixed(3);
   
}

/*상대팀*/
const oneE = document.getElementById("seat-1E");
const twoE = document.getElementById("seat-2E");
const threeE = document.getElementById("seat-3E");
const fourE = document.getElementById("seat-4E");
const fiveE = document.getElementById("seat-5E");
const sixE = document.getElementById("seat-6E");
const sevenE = document.getElementById("seat-7E");
const eightE = document.getElementById("seat-8E");
const nineE = document.getElementById("seat-9E");

const woba1E = document.getElementById("wOBA1E");
const woba2E = document.getElementById("wOBA2E");
const woba3E = document.getElementById("wOBA3E");
const woba4E = document.getElementById("wOBA4E");
const woba5E = document.getElementById("wOBA5E");
const woba6E = document.getElementById("wOBA6E");
const woba7E = document.getElementById("wOBA7E");
const woba8E = document.getElementById("wOBA8E");
const woba9E = document.getElementById("wOBA9E");

const enemyCalculateButton = document.getElementById("enemyCalculate");


function calculateE() {
  const result = (Number(oneE.value)*Number(woba1E.value) + Number(twoE.value)*Number(woba2E.value) + 
  Number(threeE.value)*Number(woba3E.value) + Number(fourE.value)*Number(woba4E.value) + 
  Number(fiveE.value)*Number(woba5E.value) + Number(sixE.value)*Number(woba6E.value) + Number(sevenE.value)*Number(woba7E.value) + 
  Number(eightE.value)*Number(woba8E.value) + Number(nineE.value)*Number(woba9E.value))  /
   (Number(oneE.value)+Number(twoE.value)+Number(threeE.value)+
   Number(fourE.value)+Number(fiveE.value)+Number(sixE.value)+Number(sevenE.value)+Number(eightE.value)+Number(nineE.value));
  
  document.getElementById("enemyResult").innerHTML = result.toFixed(3);
}

lotteCalculateButton.addEventListener("click", calculate);
enemyCalculateButton.addEventListener("click", calculateE);