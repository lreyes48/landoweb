setTimeout(function() {
    console.log("Enter Code:")
}, parseInt(1500))
setTimeout(function() {
  document.getElementById("bello").innerHTML = "For hint type: 'hint' in the terminal";
}, parseInt(120000))
setTimeout(function() {
  document.getElementById("bello").innerHTML = "When in doubt, INSPECT! (in console)";
}, parseInt(180000))

Object.defineProperty(window, "foursevenzerofour", {
    get: function() {
      window.open("step2", '_blank')
      return "Great Job!!";
    }
  });
