//Business Logic:
// function PriceSummary() {
//   this.tickets = [];
// }


function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age; 
}

// Ticket.prototype.summary = function() {
//  $(placeholder)return this.title + " at " + this.time;
// }

// write a prototype method that uses the properties of the object to determine the price and adds price as a new property to the object

Ticket.prototype.calculatePrice = function() {
  var price = 8;
  if (this.time === cheap || this.age < 10 || this.age > 65){
    price -= 2
  } else if (this.title == 'Fast and Furious....innnnnnn Spaaaaaaace (New Release)') {
      price += 10
    }
    else {
      return price
    }
    console.log(price)
  }


//User Interface Logic:

$(document).ready(function() {
  $("form#box-office").submit(function(event){
    event.preventDefault();
    var inputtedMovieTitle = $("#movie-title").val();
    var inputtedMovieTime = $("input:radio[name=movie-time]:checked").val();
    var userAge = parseInt($("input#age").val());
    if (isNaN(userAge)){
      $(".results").html("Please enter your age using a number.");
      $("#showTime").hide();
      }
        
    var ticket = new Ticket(inputtedMovieTitle, inputtedMovieTime, userAge);
    // ticket.calculatePrice(ticket)
    $("priceOutput").html(ticket.price);
    $(".results").fadeToggle();
    $("input#age").val("");
  })
});