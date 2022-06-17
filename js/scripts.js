// function refreshPage(){
//   window.location.reload();
// } 
var usernameList = document.getElementById('username_list');
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.getElementById("showDate").innerHTML = date;

var quantity = document.getElementById('howMany');
var itemLink = document.getElementById('link');
var currentUsername = document.getElementById('username_list');
var currentPriority = document.getElementById('priority_list');
console.log(currentUsername);
// console.log(currentPriority);
console.log(itemLink);
console.log(quantity);
console.log(today);

// var itemDisplay = itemLink.value;
var howManyDisplay = quantity.value;
var submitUsername = currentUsername;
var submitPriority = currentPriority
var dateData = today;


// [currentUsername, currentPriority, itemLink, quantity, today];



// document.getElementById("done").addEventListener("click", clickMe);

// function myFunction() {
    
//     document.getElementById("date_display").innerHTML = dateData;
//     document.getElementById("user_display").innerHTML = submitUsername.value;
//     document.getElementById("priority_display").innerHTML = submitPriority.value;
//     document.getElementById("link_display").innerHTML = itemDisplay.value;
//     document.getElementById("howMany_display").innerHTML = howManyDisplay.value;
// }

// let formDiv = ['username_list',]

var updateUsername = document.getElementById('username_list').addEventListener('change', function(e) {
    document.getElementById("user_display").innerHTML = (e.target.options[e.target.selectedIndex].getAttribute('id'));
    
});

// var updatePriority = document.getElementById('priority_list').addEventListener('change', function(e) {
//     document.getElementById("priority_display").innerHTML = (e.target.options[e.target.selectedIndex].getAttribute('id'));
    
// });


var updateDate = document.getElementById("howMany").addEventListener('change', function(e) {
    document.getElementById("howMany_display").innerHTML = document.getElementById('howMany').value;
    
});


// const input = document.querySelector('input');
// const log = document.getElementById('log');

// input.addEventListener('change', updateValue);
// function updateValue(e) {
//   log.textContent = e.target.value;
//   const url = link.value;
//   window.open(url);
// }




// const link = document.getElementById("link");
// const button = document.getElementById("done");
// button.addEventListener("click", event => {
//   const url = link.value;
//   window.open(url);
// });


// function removeHttp(url) {
//   var url = document.getElementById('urlhtml');
//   return url.replace(/^https?:\/\//, '');
// }

// function clickMe(){

//   console.log('submitted');
// }

// 👇️ "example.com"
// console.log(removeHttp('http://www.amazon.com'));

// // 👇️ "example.com"
// console.log(removeHttp('http://example.com'));

// function setHttp(urlhtml) {
//   this = document.getElementById('urlhtml');
//   if (urlhtml.search(/^http[s]?\:\/\//) == -1) {
//     urlhtml = 'http://' + urlhtml;
//   }
//   return urlhtml;
// }
// alert(setHttp("www.amazon.com"));




// function getUrlList() {
//   var url = {
//     urlhtml
//   };
//   var i = 0;
//   var thisList = "";

//   url.urlhtml = document.getElementById("urlhtml").value;

//   urlList.push(url);
//   for (i = 0; i < urlList.length; i++) {
//     thisList += "<a target='blank' href='" + urlList[i].urlhtml + "'>" + urlList[i].urlhtml + "</a><br>";
//   }
  
//   document.getElementById("showurls").innerHTML = thisList;

  
  
// }


const addItem = document.querySelector("#form"); addItem.addEventListener("submit", (e) => { e.preventDefault(); });

var urlList = [];

function ValidURL(str) {
    str =  document.getElementById('urlhtml').value;
    var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) {
      alert("Please include HTTPS://");
    } else {
        var str = {
            urlhtml
          };
          var i = 0;
          var thisList = "";
        
          str.urlhtml = document.getElementById("urlhtml").value;
        
          urlList.push(str);
          for (i = 0; i < urlList.length; i++) {
            thisList += "<a target='blank' href='" + urlList[i].urlhtml + "'>" + urlList[i].urlhtml + "</a><br>";
          }
          
          document.getElementById("showurls").innerHTML = thisList;
      console.log('function cosmpleted')
    }
  }




// function clearURL(){
//   urlList.length = 0;
// }


// var rosterListings = "";
//     for (var i = 0; i < teamRoster.length; i++) {
//         rosterListings = rosterListings + " <a href='" + idList[i] + "'>" + teamRoster[i] + "</a>,";
//     }
//     $("#teamRoster").text(rosterListings);



// document.getElementById("goto").addEventListener("click", goTo);

// let inputVal = document.querySelector('#link').value;
// //Manipulate your URL, add https:// or replace http:// with https:// or add www:



// window.open(inputVal);

// function goTo() {  
//   var result = document.getElementById("searchbar").value;  
//   window.location.href = '/user/'+result;
// }

// const input = document.querySelector('link');
// const log = document.getElementById('link_display');

// input.addEventListener('change', updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }


// var updateLink = document.getElementById("link").addEventListener('change', function(e) {
//     document.getElementById("link_display").innerHTML = document.getElementById('link').value;
    
// });





console.log('hello, you reached the end of the Script');