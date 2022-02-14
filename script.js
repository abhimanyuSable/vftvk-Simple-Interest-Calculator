function compute()
{
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = p*years*rate/100;
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = "<br> If you deposit <mark>" + p + "</mark> <br />" +
                                                  "at an interest rate of <mark>" + rate + "</mark> % <br />" +
                                                  "You will receive an amount of <mark>" + interest + "</mark>, <br />" + 
                                                  "in the year <mark>" + year + "</mark>"; 


}

function updateRate() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
}

function ValidateInput(){
    var Principal = document.getElementById("principal").value;

    if (Principal > 0) {
        console.log("Value is positive");
    }

    else if (Principal <= 0) {
        console.log("The number is negative");
        alert("Enter a positive value for principal");
        document.getElementById("principal").focus();
    }

}