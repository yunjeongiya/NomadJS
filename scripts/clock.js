const clock = document.querySelector("#clock");

function showTime() {
  const cur = new Date();
  const hour = String(cur.getHours()).padStart(2, "0");
  const min = String(cur.getMinutes()).padStart(2, "0");
  const sec = String(cur.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hour}:${min}:${sec}`;
}
showTime();
setInterval(showTime, 1000);