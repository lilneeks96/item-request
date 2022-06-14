const usernameList = document.getElementById('username_list');
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.getElementById("showDate").innerHTML = date;

var quantity = document.getElementById('howMany').value;
var itemLink = document.getElementById('link').value;
var currentUsername = document.getElementById('username_list');
var currentPriority = document.getElementById('priority_list');
console.log(currentUsername.value);
console.log(currentPriority.value);
console.log(itemLink);
console.log(quantity);
console.log(today);


var updateUsername = document.getElementById('username_list').addEventListener('change', function(e) {
    console.log(e.target.options[e.target.selectedIndex].getAttribute('id'));
});

var updatePrio = document.getElementById('priority_list').addEventListener('change', function(e) {
    console.log(e.target.options[e.target.selectedIndex].getAttribute('id'));
});

var updateLink = document.getElementById('howMany').addEventListener('change', function(e) {
    console.log(e.target[e.target.selectedIndex].getAttribute('value'));
});


// function val() {
//     d = document.getElementById("howMany").value;
//     alert(d);
// }

console.log('hello, you reached the end of the Script');