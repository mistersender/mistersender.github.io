window.addEventListener("load", function(){
 // var page = document.getElementsByClassName("c-page")[0];
 // page.style.msTransform = page.style.webkitTransform = page.style.transform = "translateY(" + window.outerHeight + "px)";
 document.body.className += " is-loaded";

 var percentages = document.body.getElementsByClassName("c-graph__percentage");
 for(var i = 0; i < percentages.length; i++){
  var current_percent = parseInt(percentages[i].innerHTML.match(/\d+/g)[0]); //basically, get the value of the percentage ie "80%", remove the "%" sign and convert to a number
  percentages[i].setAttribute("data-percent", percentages[i].innerHTML); //must be an attribute as we use css to display this data in a pseudo element
  percentages[i].style.width = percentages[i].innerHTML;
  if(current_percent > 60){
   percentages[i].className += " c-graph__percentage--primary";
  }
  else if(current_percent < 21){
   percentages[i].className += " c-graph__percentage--exploring";
  //  percentages[i].parentNode.classList.toggle("is-disabled"); //just add this since we start with exploring disabled
  }
  else{
   percentages[i].className += " c-graph__percentage--rudimentary";
  }
 }

 document.getElementsByClassName("js-skills")[0].addEventListener("click", function(e){
  if(e.target.classList.contains("js-tag")){
   e.target.classList.toggle("is-disabled");
   e.target.dataset.category && document.getElementsByClassName("c-graph--" + e.target.dataset.category)[0].classList.toggle("is-disabled"); //if it has a category, show or hide accordingly.
   if(e.target.dataset.level){ //if it has a category, show or hide accordingly.
    var levels = document.getElementsByClassName("c-graph__percentage--" + e.target.dataset.level);
    for(var i = 0; i < levels.length; i++){
     levels[i].parentNode.classList.toggle("is-disabled");
    }
   }
  }
 });
})
