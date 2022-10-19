
const input = document.getElementById('inputt');
const change = document.getElementById('test');

window.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        validate(event);
        after();
        
    }
})
function validate(event) {
    if (input.value === "help") {
        change.innerHTML = "List of commands haha";
    }
    else if (input.value === "Chambon2022") {
        window.open("Chambon2022", '_blank');
    }
    else {
        console.log("nada")
    }
    
}
function after() {
    input.value = "";
}
//very counter productive but, make new css CLASS, not id, and then swap them out maybe?
