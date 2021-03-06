"use strict";

//var FAQ = null;
var community = null;
var key = "communityData";

//var FAQData = ["How long does it take for t-shirt to change color?", "How long does the t-shirt last?","How to wash the t-shirt?","How can I return the t-shirt?", "Which t-shirt is best for me?"];
//var communityData = ["Does the t-shirt work differently on different continents?", "Does the t-shirt work differently when wet?","What are the delivery charges?","I want to order 100 t-shirts for school students. Can I get a discount?","Should I let my children wear this t-shirt? Is it safe for skin?"]


$(document).ready(function() {
  //FAQ = document.getElementById("FAQBody");
  community = document.getElementById("communityBody");
  var userData = JSON.parse(getStoredValue(key));
  var communityContent = community.innerHTML;
  /*for (var i = 0; i < communityData.length; i++) {
    communityContent+="<tr><td>"+communityData[i]+"</td><td>"+Math.floor((Math.random() * 10) + 1)+"</td></tr>";
  }*/
  if (userData !== null) {
    for (var i = 0; i < userData.length; i++) {
      communityContent+="<tr><td>"+userData[i]+"</td><td>"+0+"</td></tr>";
    }
    community.innerHTML= communityContent;
  }
});




$("#questionForm").submit(function(event){
   handleForm(event);
});



function handleForm(event) {
  ie8SafePreventEvent(event);
  var value = getStoredValue(key);
  var form = document.forms["question"];
  if (form["human"].checked===false) {
    alert("You must be a Human to submit a question!");
    return;
  }
  var message = form["message"].value;

  if (value === null) {
    storeValue(key,JSON.stringify([message]));
  }else{
    var newVar = JSON.parse(value).concat([message]);
    storeValue(key,JSON.stringify(newVar));
  }
  form.reset();
  location.reload();
}

function ie8SafePreventEvent(e){
 if(e.preventDefault){
   e.preventDefault()
 }else{
   e.stop()
 };

  e.returnValue = false;
  e.stopPropagation();
}


/*FAQ js*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("open");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
