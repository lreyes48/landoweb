const rootstuff = document.querySelector(':root');
const input = document.getElementById('inputt');
const change = document.getElementById('test');
const gitty = document.getElementById("Github");
const insta = document.getElementById("Instagram");
const rickroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const instagram = "https://www.instagram.com/leandroreyes__/";
const instagramapp = 'instagram://www.instagram.com/leandroreyes__'
const github = "https://github.com/that1mexicanguy";
var linksHelp = ("sir this is a wendys")
var heyyy = linksHelp.length;
var helpChar = ('secret, links, ...');
const newtime = ["4s", "3s" , "2s", "2.5s", "2s", "7s"]


const timevalue = parseInt(getComputedStyle(rootstuff).getPropertyValue('--time'));

function instachar() {
    const characterLength = 20;
    
    rootstuff.style.setProperty('--steps', characterLength);
    rootstuff.style.setProperty('--time', newtime[0])
}
function helpchar2() {
    const characterLength = 18;
    rootstuff.style.setProperty('--steps', characterLength);
    rootstuff.style.setProperty('--time', newtime[1]);
}
function gitchar() {
    const characterLength = 17;
    rootstuff.style.setProperty('--steps', characterLength);
    rootstuff.style.setProperty('--time', newtime[2])
}
function instchar2() {
    const characterLength = 9;
    rootstuff.style.setProperty('--steps', characterLength);
    rootstuff.style.setProperty('--time', newtime[3])
}
function gittychar2() {
    const characterLength = 6;
    rootstuff.style.setProperty('--steps', characterLength);
    rootstuff.style.setProperty('--time', newtime[4])

}
function nocommandchar() {
    const characterLength = 68;
    rootstuff.style.setProperty('--steps', characterLength);
    rootstuff.style.setProperty('--time', newtime[5])
}
function potatochar(){
    const characterLength = 20;
    rootstuff.style.setProperty('--steps',characterLength);
    rootstuff.style.setProperty('--time', newtime[0]);
}