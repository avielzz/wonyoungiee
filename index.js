  document.addEventListener("DOMContentLoaded", function () {
    let content = document.getElementById('content');
    let textContent = `avi is currently ${navigator.onLine ? "on>>" : "off<<"} `;
    content.textContent = textContent;
  });
  