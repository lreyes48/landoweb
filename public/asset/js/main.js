
const input = document.getElementById('inputt');
const change = document.getElementById('test');
const rickroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

window.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        validate(event);
        after();
        
    }
})
function validate(event) {
    if (input.value === "help") {
        change.innerHTML = "secret, ... ";
    }
    else if (input.value === "Chambon2022") {
        window.open("Chambon2022", '_blank');
    }
    else if (input.value === "amor <3") {
        window.open("mcknz", '_blank');
    }
    else if (input.value === "secret") {
        window.open(rickroll, '_blank')
    }
    else {
        console.log("nada")
    }
    
    
}
function after() {
    input.value = "";
}
