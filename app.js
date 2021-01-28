function calculateTotal() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("servicequality").value;
  let numPeople = document.getElementById("numpeople").value;

  if (billAmt === "" || serviceQual === "") {
    alert("Please enter values");
    return;
  }

  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;
  }

  let total = (billAmt / numPeople) * serviceQual;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById("total").innerHTML = "<p>Suggested Tip For Each Person:<p>" + " " + "<sup>$</sup>" + total;
}



document.getElementById("calc").onclick = function() {
  calculateTotal();
  document.getElementById("total").style.display = "block";  
};





