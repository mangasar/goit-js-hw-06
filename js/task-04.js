let counterValue = 0;
const btns = document.querySelectorAll("#counter button");
const spanValue = document.querySelector("#value");

const onClick = (event) => {
    if (event.target.getAttribute("data-action") === 'increment'){
        counterValue++;
    } else {
        counterValue--;
    }
    spanValue.innerText = counterValue;
};

for (const btn of btns){ 
    btn.addEventListener("click", onClick);
}



