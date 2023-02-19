let counterValue = 0;

const decrement = document.querySelector(`button [data-action="decrement"]`);
const increment = document.querySelector(`button [data-action="increment"]`);
const displayValue = document.querySelector("#value");
// const handleClick = () => {
//   console.log("event callback");
// };

decrement.addEventListener("click", onButtonDecrementClick);
increment.addEventListener("click", onButtonIncrementClick);

function onButtonDecrementClick(event) {
  return (counterValue -= 1);
  displayValue.textContent = counterValue;
}
function onButtonIncrementClick(event) {
  return (counterValue += 1);
  displayValue.textContent = counterValue;
}

// displayValue.textContent = counterValue;
