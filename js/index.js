// Calculate TIP
function calculateTip(){
    let billAmt = document.getElementById("billAmt").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let noOfPeople = document.getElementById("peopleAmt").value;

    // Validate input
    if(billAmt === "" || serviceQual === 0){
        alert("Please filled all fields!");
        return;
    }
    // Check if noOfPeople empty or less than equal 1
    if(noOfPeople === "" || noOfPeople <= 1){
        noOfPeople = 1;
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="block";
    }
    // Calculate Tip
    let total = (billAmt * serviceQual) / noOfPeople;
    // Round Of two decimal
    total = Math.round(total*100) / 100;
    // Round of upto two digit after decimal
    total = total.toFixed(2);
    
    // Display
    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML=total;
}
// Hides the tip amount on load
document.getElementById("totalTip").style.display="none";
document.getElementById("tip").style.display="none";

function clrscr(){
    document.getElementById("billAmt").value="";
    document.getElementById("serviceQual").selectedIndex = 0;
    document.getElementById("peopleAmt").value="";
    document.getElementById("totalTip").style.display="none";
    document.getElementById("tip").value="0.00";
    document.getElementById("each").style.display="none";
}