//maybe delte on the way back?
//faster speed


const { initializeApp } = require('firebase/app')


console.log(app);

console.log('hey');



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
        }, parseInt(newtime[1])*1750)

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
            //window.open(instagramapp, '_blank')
        }, parseInt(newtime[0])*0);
        
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
        }, parseInt(newtime[2])*0);
    }
    else if (input.value.toLowerCase() === "links") {
        clear();
        instchar2();
        document.activeElement.blur();
        insta.classList.add("textmovewow");
        insta.innerHTML = "instagram";
        setTimeout(function() {
            insta.classList.remove("textmovewow");
        }, parseInt(newtime[3])*2500)
        
        setTimeout(function() {
            gittychar2();
            gitty.classList.add('textmovewow');
            gitty.innerHTML = "github";
        }, parseInt(newtime[3])*3000)

        setTimeout(function() {
            gitty.classList.remove('textmovewow');
            document.getElementById("inputt").focus();
        }, parseInt(newtime[4])*5250)
        
    }
    else if (input.value.toLowerCase()=== "potato") {
        clear();
        potatochar();
        document.activeElement.blur();
        change.classList.add("textmovewow");
        change.innerHTML = "sir this is a wendys"
        setTimeout(function() {
            document.getElementById("inputt").focus();
            change.classList.remove("textmovewow");
        }, parseInt(newtime[0])*1450)
    }
    else if (input.value.toLowerCase() === "clear") {
        clear();
    }
    else if (input.value.toLowerCase()=== "") {
        console.log("hey, madge.")
    }

    else {
        clear();
        nocommandchar();
        document.activeElement.blur();
        change.classList.add("textmovewow");
        change.innerHTML = "Unavailable command, type 'help' for a list of available commands."
        setTimeout(function(){
            document.getElementById("inputt").focus();
            change.classList.remove("textmovewow");
        }, parseInt(newtime[5])*1750)
    }
    
    
}
function after() {
    input.value = "";
}
function clear() {
    change.classList.remove("textmovewow");
    change.innerHTML = "";
    insta.innerHTML = "";
    gitty.innerHTML = "";
}
//ua = navigator.platform;
//console.log(ua);