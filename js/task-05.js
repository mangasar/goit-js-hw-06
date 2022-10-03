const refs = {
input: document.querySelector('#name-input'),
changeName: document.querySelector('#name-output')
};

refs.input.addEventListener( 'input', onInputChange )

function onInputChange (event) {
    console.log (event.currentTarget.value)
    refs.changeName.textContent = event.currentTarget.value;
    if (event.currentTarget.value === ""){
        refs.changeName.textContent = "Anonymus"
    }
}

