
const input = document.getElementById('inputt');
const change = document.getElementById('test');
const rickroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const instagram = "https://www.instagram.com/leandroreyes__/";

window.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        validate(event);
        after();
        
    }
})
function validate(event) {
    if (input.value.toLowerCase() === "help"  ) {
        change.innerHTML = "secret, links ... ";
    }
    else if (input.value.toLowerCase() === "Chambon2022") {
        window.open("Chambon2022", '_blank');
    }
    else if (input.value.toLowerCase() === "amor <3") {
        window.open("mcknz", '_blank');
    }
    else if (input.value.toLowerCase() === "secret") {
        window.open(rickroll, '_blank');
    }
    else if (input.value.toLowerCase() === "instagram") {
        change.innerHTML = "Opening Instagram...";
    }
    else if (input.value.toLowerCase() === "links") {
        change.innerHTML = "instagram";
    }
    else if (input.value.toLowerCase() === "clear") {
        change.innerHTML = "";
    }
    else {
        console.log("nada")
    }
    
    
}
function after() {
    input.value = "";
}
