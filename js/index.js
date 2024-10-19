let selected = [];
let totalPrice = 0;
const seatELement = document.getElementById("seat-selected");
const seatBtn = document.querySelectorAll(".seat-btn");
const totalSeat = document.getElementById("total-booked");
const available = document.getElementById("available-seat");
const bookedSeats = document.getElementById("booked-seats");
const remainingSeat = document.getElementById("remaining-seat");
const totalPrices = document.getElementById("total-price");
const cuponInputEL = document.getElementById("cupon-field");
const cuponbtnEL = document.getElementById("cupon-btn");
const defaultTextEL = document.getElementById("default-text");
const grandTotalEL = document.getElementById("grand-total-value");
const PhoneEL = document.getElementById("phone-number");
const nexEL = document.getElementById("next-btn");
const inputsDis = document.querySelectorAll(".m-input");
console.log(inputsDis);
console.log(seatBtn);
seatBtn.forEach((btn) => {
  console.log(seatELement);

  btn.addEventListener("click", function (event) {
    const value = btn.innerText;
    if (selected.includes(value)) {
      return alert("seat already booked");
    } else if (selected.length < 4) {
      event.target.classList.add("bg-primary", "text-whtie");
      selected.push(btn.innerText);
      console.log(selected);
      defaultTextEL.classList.add("hidden");
      totalSeat.innerText = selected.length;
      remainingSeat.innerText = selected.length;
      const availableSeat = parseFloat(available.innerText);
      const newAvailable = availableSeat - 1;
      available.innerText = newAvailable;
      seatELement.innerHTML += `<li class="font-normal text-black text-base flex justify-between">
  <span>${btn.innerText}</span>
  <span>Economy</span>
  <span>550</span>
  </li>`;
      totalPrice += 550;
      totalPrices.innerText = totalPrice;
      if (selected.length > 3) {
        cuponInputEL.removeAttribute("disabled");
        cuponbtnEL.removeAttribute("disabled");
      }
      inputsDis.forEach((field) => field.removeAttribute("disabled"));
    } else {
      return alert("maximum Seat booked");
    }
  });
});
//add cupon
document.getElementById("cupon-btn").addEventListener("click", function () {
  let cuponsave = 0;
  const cuponValue = cuponInputEL.value;
  if (cuponValue != "NEW50" && cuponValue != "Couple 20") {
    alert("Your Provided  cupon is not valid");
    return;
  }
  if (cuponValue == "NEW50") {
    cuponsave = totalPrice * 0.15;
  } else if (cuponValue == "Couple 20") {
    cuponsave = totalPrice * 0.2;
  }
  const showCuponPrice = document.getElementById("show-cupon-price");
  showCuponPrice.innerHTML = ` 
              <p class="">Discount</p>
              <p>
                <span>-BDT</span>
                <span>${cuponsave}</span>
              </p>`;
  const grandvalue = totalPrice - cuponsave;
  console.log(cuponsave);
  grandTotalEL.innerText = grandvalue;
});
//next btn
PhoneEL.addEventListener("input", function (e) {
  const inputValue = e.target.value;
  if (inputValue.length >= 11) {
    nexEL.removeAttribute("disabled");
  }
});

document.getElementById("btn-continue").addEventListener("click", function () {
  window.location.reload();
});
