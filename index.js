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
  cash.textContent = "$" + sliderValue ;

  if( sliderValue === "8" || sliderValue === "73"){
    views.textContent = "10K PAGEVIEWS";
  } else if(sliderValue === "12" || sliderValue === "108"){
    views.textContent = "50K PAGEVIEWS";
  } else if(sliderValue === "16"|| sliderValue === "144"){
    views.textContent = "100K PAGEVIEWS";
  }else if(sliderValue === "24" || sliderValue === "216"){
    views.textContent = "500K PAGEVIEWS";
  }else if(sliderValue === "36" || sliderValue === "324" ){
    views.textContent = "1M PAGEVIEWS";
  }
 };


 rangeInput.oninput();
checked.addEventListener("change", function(){
  if(this.checked){
    rangeInput.min = 72;
    rangeInput.max = 324;
    rangeInput.value = sliderValue * 12 * 0.75;
    
  } else {
    rangeInput.min = 8;
    rangeInput.max = 36;
    rangeInput.value = sliderValue / 12 / 0.75;
  }
  rangeInput.oninput();
});
  


//use try and catch debugging 
//make smaller problems 
//jest  testing page
//use typescript  

