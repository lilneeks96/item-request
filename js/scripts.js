const usernameList = document.getElementById('username_list');
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.getElementById("showDate").innerHTML = date;

var quantity = document.getElementById('howMany').value;
var itemLink = document.getElementById('link').value;
var currentUsername = document.getElementById('username_list').value;
var currentPriority = document.getElementById('priority_list').value;
console.log(currentUsername);
console.log(currentPriority);
console.log(itemLink);
console.log(quantity);
console.log(today);

var allData = today;

// [currentUsername, currentPriority, itemLink, quantity, today];

function clickMe(){
    console.log('hi');
}

document.getElementById("done").addEventListener("click", myFunction);

function myFunction() {
    
    document.getElementById("paste").innerHTML = allData;
}


var updateUsername = document.getElementById('username_list').addEventListener('change', function(e) {
    console.log(e.target.options[e.target.selectedIndex].getAttribute('id'));
});



console.log('hello, you reached the end of the Script');