function updateTimeBox() {
    const d = new Date();
    let time = d.toLocaleTimeString();
    document.getElementById("timeNow").textContent = time;
}
updateTimeBox();
setInterval(updateTimeBox, 1000);