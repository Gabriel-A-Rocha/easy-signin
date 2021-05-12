document.querySelectorAll("span").forEach((e) => {
  e.addEventListener("click", copyText);
});

function copyText(event) {
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      const text = event.srcElement.innerText;
      navigator.clipboard.writeText(text);
      console.log(text);
    }
  });
}
