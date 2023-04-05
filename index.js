//we need toggle where we count 25% discount
//- 10K pageviews / $8 per month (72$)
//- 50K pageviews / $12 per month(108$)
//- 100K pageviews / $16 per month(144$)
//- 500k pageviews / $24 per month(216$)
//- 1M pageviews / $36 per month(324$)
let views = document.getElementById("title");
let cash = document.getElementById("dolar");
let month = document.getElementById("month");
let rangeInput = document.getElementById("rangeInput");
let viewers = views.textContent;
let checked = document.getElementById("check");

let sliderValue = 16;
rangeInput.oninput = function() {
  let thumbPosition = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
  let gradient =  'linear-gradient(to right, #10D8C4  0%, #10D8C4 '  + thumbPosition + '%, #ffffff' + thumbPosition + '%,rgba(255, 255, 255, 1))'
  rangeInput.style.backgroundImage = gradient;
  sliderValue = this.value;
  cash.textContent = "$" + value ;

  if( value === "8"){
    views.textContent = "10K PAGEVIEWS";
  } else if(value === "12"){
    views.textContent = "50K PAGEVIEWS";
  } else if(value === "16"){
    views.textContent = "100K PAGEVIEWS";
  }else if(value === "24"){
    views.textContent = "500K PAGEVIEWS";
  }else if(value === "36"){
    views.textContent = "1M PAGEVIEWS";
  } else if(value === "73"){
    views.textContent = "10K PAGEVIEWS";
 } else if(value === "108"){
    views.textContent = "50K PAGEVIEWS";
 } else if(value === "144"){
    views.textContent = "100K PAGEVIEWS";
 }else if(value === "216"){
    views.textContent = "500K PAGEVIEWS";
 }else if(value === "324"){
    views.textContent = "1M PAGEVIEWS";
 }
 };



checked.addEventListener("change", function(){
  if(this.checked){
    rangeInput.min = 72;
    rangeInput.max = 324;
    rangeInput.value = rangeInput.value * 12 * 0.75;
    rangeInput.oninput();
  } else {
    rangeInput.min = 8;
    rangeInput.max = 36;
  }

});
  


//use throw and catch debugging 
//make smaller problems 
//jest  testing page
//use typescript  

