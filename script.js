document.addEventListener("DOMContentLoaded", function () {
  const currentTimeInMs = document.getElementById("currentUTCTime");

  function updateUTCTime() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    const utcTime = `${hours}:${minutes}:${seconds}`;
    currentTimeInMs.textContent = utcTime;
  }

  updateUTCTime();
  setInterval(updateUTCTime, 1000);
});
