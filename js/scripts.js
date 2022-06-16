const usernameList = document.getElementById('username_list');
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.getElementById("showDate").innerHTML = date;

var quantity = document.getElementById('howMany');
var itemLink = document.getElementById('link');
var currentUsername = document.getElementById('username_list');
var currentPriority = document.getElementById('priority_list');
console.log(currentUsername);
console.log(currentPriority);
console.log(itemLink);
console.log(quantity);
console.log(today);

var itemDisplay = itemLink.value;
var howManyDisplay = quantity.value;
var submitUsername = currentUsername;
var submitPriority = currentPriority
var dateData = today;


// [currentUsername, currentPriority, itemLink, quantity, today];

function clickMe(){
    console.log('hi');
}

document.getElementById("done").addEventListener("click", myFunction);

function myFunction() {
    
    document.getElementById("date_display").innerHTML = dateData;
    document.getElementById("user_display").innerHTML = submitUsername.value;
    document.getElementById("priority_display").innerHTML = submitPriority.value;
    document.getElementById("link_display").innerHTML = itemDisplay.value;
    document.getElementById("howMany_display").innerHTML = howManyDisplay.value;
}


var updateUsername = document.getElementById('username_list').addEventListener('click', function(e) {
    document.getElementById("user_display").innerHTML = (e.target.options[e.target.selectedIndex].getAttribute('id'));


    // console.log(e.target.options[e.target.selectedIndex].getAttribute('id'));
});



console.log('hello, you reached the end of the Script');