const newInput = document.querySelector("#name-input");
const newOutput = document.querySelector("#name-output");

newInput.addEventListener("input",(event)=>{
    const value = event.target.value.trim();
    newOutput.textContent = value || "Anonymous";
});
