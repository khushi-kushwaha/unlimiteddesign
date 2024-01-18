var light = document.querySelector("#light");
var root = document.documentElement;
var flag = 0;

light.addEventListener("click", function() {
  if (flag == 0) {
    root.style.setProperty("--primary", "#ffffff");
    root.style.setProperty("--secondary", "#000000");
    root.style.setProperty("--tertiary", "#F0C9FC");
    root.style.setProperty("--super", "#cd79f1");
    light.innerHTML = "Dark";
    flag = 1;
  } else {
    root.style.setProperty("--primary", "#000000");
    root.style.setProperty("--secondary", "#ffffff");
    root.style.setProperty("--tertiary", "#14171C");
    root.style.setProperty("--super", "#282C35");
    light.innerHTML = "Light";
    flag = 0;
  }
});
