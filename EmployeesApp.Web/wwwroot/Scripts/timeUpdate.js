function updateTimeBox() {
    document.getElementById("timeNow").textContent = new Date().toLocaleTimeString();
}
setInterval(updateTimeBox, 1000);
updateTimeBox();