const rootstuff = document.querySelector(':root');
const input = document.getElementById('inputt');
const change = document.getElementById('test');
const gitty = document.getElementById("Github");
const insta = document.getElementById("Instagram");
const rickroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const instagram = "https://www.instagram.com/leandroreyes__/";
const github = "https://github.com/that1mexicanguy";
var linksHelp = (['github',
'instagram',
'random,'
])
var heyyy = linksHelp.toString().length;
var helpChar = ('secret, links, ...');

const timevalue = parseInt(getComputedStyle(rootstuff).getPropertyValue('--time'));
console.log(helpChar.length);
function instachar() {
    const characterLength = 20;
    
    rootstuff.style.setProperty('--steps', characterLength);
}
function helpchar2() {
    const characterLength = 18;
    rootstuff.style.setProperty('--steps', characterLength);
}
function gitchar() {
    const characterLength = 17;
    rootstuff.style.setProperty('--steps', characterLength);
    
}
function instchar2() {
    const characterLength = 9;
    rootstuff.style.setProperty('--steps', characterLength);
}
function gittychar2() {
    const characterLength = 6;
    rootstuff.style.setProperty('--steps', characterLength);
}