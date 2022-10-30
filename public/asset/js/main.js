//finetune the time it takes to type.

window.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        validate(event);
        after();
        
    }
})
function validate(event) {
    if (input.value.toLowerCase() === "help"  ) {
        clear();
        helpchar2();
        document.activeElement.blur();
        change.classList.add("textmovewow");
        change.innerHTML = helpChar;
        setTimeout(function(){
            document.getElementById("inputt").focus();
            change.classList.remove('textmovewow');
        }, timevalue*1000)

    }
    else if (input.value.toLowerCase() === "Chambon2022") {
        clear();
        window.open("Chambon2022", '_blank');
    }
    else if (input.value.toLowerCase() === "amor <3") {
        clear();
        window.open("mcknz", '_blank');
    }
    else if (input.value.toLowerCase() === "secret") {
        clear();
        window.open(rickroll, '_blank');
    }
    else if (input.value.toLowerCase() === "instagram") {
        clear();
        instachar();
        document.activeElement.blur();
        change.classList.add("textmovewow");
        change.innerHTML = "Opening Instagram...";
        setTimeout(function(){
            window.open(instagram, '_blank');
            document.getElementById("inputt").focus();
            change.classList.remove('textmovewow');
        }, timevalue*1000);
        
    }
    else if (input.value.toLowerCase() === "github") {
        clear();
        gitchar();
        document.activeElement.blur();
        change.classList.add("textmovewow");
        change.innerHTML = "Opening Github..."
        setTimeout(function() {
            window.open(github, '_blank')
            document.getElementById("inputt").focus();
            change.classList.remove("textmovewow");
        }, timevalue*1000);
    }
    else if (input.value.toLowerCase() === "links") {
        clear();
        instchar2();
        document.activeElement.blur();
        insta.classList.add("textmovewow");
        insta.innerHTML = "instagram";
        setTimeout(function() {
            insta.classList.remove("textmovewow");
        }, timevalue*1000)
        
        setTimeout(function() {
            gittychar2();
            gitty.classList.add('textmovewow');
            gitty.innerHTML = "github";
        }, timevalue*1001)

        setTimeout(function() {
            gitty.classList.remove('textmovewow');
            document.getElementById("inputt").focus();
        }, timevalue*2000)
        
    }
    else if (input.value.toLowerCase() === "clear") {
        clear();
    }

    else {
        clear();
        change.innerHTML = "Unavailable command, type 'help' for a list of available commands."
    }
    
    
}
function after() {
    input.value = "";
}
function clear() {
    change.innerHTML = "";
    insta.innerHTML = "";
    gitty.innerHTML = "";
}