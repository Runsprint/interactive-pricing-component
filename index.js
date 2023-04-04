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
let value = rangeInput.value; 
let dolar = cash.textContent; // I connect dolar which will aqual to rangeinput, cuz when it start moving, dollar will change automaticaly
value = dolar;

rangeInput.addEventListener("input", function() {
  let thumbPosition = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
  let gradient =  'linear-gradient(to right, #10D8C4  0%, #10D8C4 '  + thumbPosition + '%, #ffffff' + thumbPosition + '%,rgba(255, 255, 255, 1))'
  rangeInput.style.backgroundImage = gradient;
  
  if(value == 1){
    dolar = 8;
    viewers = 10;
  }
});

//use throw and catch debugging 
//make smaller problems 
//jest  testing page
//use typescript

