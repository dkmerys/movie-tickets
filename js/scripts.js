//Business Logic:


function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age; 
  // this.price = 8;
}

// write a prototype method that uses the properties of the object to determine the price and adds price as a new property to the object

Ticket.prototype.calculatePrice = function() {
  this.price = 8;

  if (this.time === "matinee" || this.age <= 10 || this.age >= 65){
    this.price -= 2
  } else (this.title == 'Fast and Furious....innnnnnn Spaaaaaaace (New Release)'); {
      this.price += 10
    }
    
  }
//User Interface Logic:

$(document).ready(function() {
  $("form#box-office").submit(function(event){
    event.preventDefault();
    var inputtedMovieTitle = $("#movie-title").val();
    var inputtedMovieTime = $("input:radio[name=movie-time]:checked").val();
    var userAge = parseInt($("input#age").val());
    if (isNaN(userAge)){
      $(".results").html("Please REFRESH and enter your age using a number.");
      $("#showTime").hide();
      }
        
    var ticket = new Ticket(inputtedMovieTitle, inputtedMovieTime, userAge);
    ticket.calculatePrice();
    $("#priceOutput").html(ticket.price);
    $("input#age").val("");
    $("#showTime").text(ticket.title + " at " + ticket.time);
    $(".results").fadeToggle();
      console.log()
  })
});