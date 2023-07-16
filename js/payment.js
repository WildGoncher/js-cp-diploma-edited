let tickets = JSON.parse(
  sessionStorage.getItem(sessionStorage.getItem("data-seance-id"))
);
let ticketWrapper = document.getElementsByClassName("ticket__info-wrapper")[0];
let ticketTitle = ticketWrapper.getElementsByClassName(
  "ticket__details ticket__title"
)[0];
ticketTitle.textContent = tickets.currentBuy["data-film-name"];

let ticketChairs = ticketWrapper.getElementsByClassName(
  "ticket__details ticket__chairs"
)[0];
ticketChairs.textContent = "";
Object.keys(tickets.currentBuy["chair"]).forEach((row, index) => {
  tickets.currentBuy["chair"][row].forEach((place, index) => {
    ticketChairs.textContent += `${row}/${place}`;
    if (tickets.currentBuy["chair"][row].length - 1 > index) {
      ticketChairs.textContent += ", ";
    }
  });
  if (Object.keys(tickets.currentBuy["chair"]).length - 1 > index) {
    ticketChairs.textContent += ", ";
  }
});
let ticketHall = ticketWrapper.getElementsByClassName(
  "ticket__details ticket__hall"
)[0];
ticketHall.textContent = tickets.currentBuy["data-hall-name"].substr(-1);
let ticketStart = ticketWrapper.getElementsByClassName(
  "ticket__details ticket__start"
)[0];
ticketStart.textContent = tickets.currentBuy["data-seance-time"];
let ticketCost = ticketWrapper.getElementsByClassName(
  "ticket__details ticket__cost"
)[0];
ticketCost.textContent = tickets.currentBuy["cost"];

document
  .getElementsByClassName("acceptin-button")[0]
  .addEventListener("mouseenter", function () {
    this.style.cursor = "pointer";
  });
