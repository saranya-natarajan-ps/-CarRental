"use strict";

window.onload = function(){
   const estimateBtn = document.getElementById("estimateTotalCost");
   estimateBtn.onclick = calculateEstimate;
};    

function calculateEstimate(){
   let totalCost = 0
   let optionCost = 0
   let surcharge = 0
   //basefare calculation
   let numberOfDays = document.getElementById("numberOfDays");
   let totalDays = Number(numberOfDays.value);
   let basicCarRental = totalDays * 29.99;

   //checkbox selection calculations - options
   let tollTagChkbox = document.getElementById("tollTagChkbox")
   if (tollTagChkbox.checked){
    let etCharge = totalDays * 3.95;
    optionCost = optionCost + etCharge
   }
   let gpsChkbox = document.getElementById("gpsChkbox");
   if (gpsChkbox.checked){
    let gpsCharge = totalDays * 2.95;
    optionCost = optionCost + gpsCharge;
   }
   let roadsideChkbox = document.getElementById("roadsideChkbox");
   if (roadsideChkbox.checked){
    let rsaCharge = totalDays * 2.95;
    optionCost = optionCost + rsaCharge;
   }

   //radio button calculations - Under 25 surcharge
   let selectedOption = document.querySelector("input[name='under25']:checked");
   if (selectedOption.value == "yes"){
    surcharge = (basicCarRental * 30)/100
   }
   else {
    surcharge = 0
   }

   totalCost = basicCarRental + optionCost + surcharge

   let carRental = document.getElementById("carRental");
   carRental.innerHTML = "Car rental: " +basicCarRental.toFixed(2);
   let options = document.getElementById("options");
   options.innerHTML = "Options: " +optionCost.toFixed(2);
   let under25Surcharge = document.getElementById("under25Surcharge");
   under25Surcharge.innerHTML = "Under 25 Surcharge: " +surcharge.toFixed(2);
   let totalDue = document.getElementById("totalDue");
   totalDue.innerHTML = "Total due: " +totalCost.toFixed(2);
}

