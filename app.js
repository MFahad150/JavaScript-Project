// Ticket class to create ticket objects
class Ticket {
  constructor(event, price, quantity) {
    this.event = event;
    this.price = price;
    this.quantity = quantity;
  }

  // method to check if tickets are available
  checkAvailability() {
    return this.quantity > 0;
  }

  // method to book a ticket
  bookTicket() {
    if (this.checkAvailability()) {
      this.quantity -= 1;
      console.log(`Ticket booked for ${this.event} at $${this.price}.`);
    } else {
      console.log(`Sorry, tickets for ${this.event} are sold out.`);
    }
  }
}

// Create some ticket objects
const event1 = new Ticket("Concert", 50, 20);
const event2 = new Ticket("Comedy Show", 35, 10);
const event3 = new Ticket("Theater Play", 40, 5);

// Book tickets for an event
event1.bookTicket(); // Ticket booked for Concert at $50.
event1.bookTicket(); // Ticket booked for Concert at $50.
event1.bookTicket(); // Ticket booked for Concert at $50.
event2.bookTicket(); // Ticket booked for Comedy Show at $35.
event3.bookTicket(); // Ticket booked for Theater Play at $40.
event3.bookTicket(); // Ticket booked for Theater Play at $40.
event3.bookTicket(); // Ticket booked for Theater Play at $40.
event3.bookTicket(); // Ticket booked for Theater Play at $40.
event3.bookTicket(); // Ticket booked for Theater Play at $40.
event3.bookTicket(); // Sorry, tickets for Theater Play are sold out.

