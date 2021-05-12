$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

document.querySelectorAll("span").forEach((e) => {
  e.addEventListener("click", copyText);
});

function copyText(event) {
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
      const textClicked = event.srcElement.innerText;
      navigator.clipboard.writeText(textClicked);
      $("span").tooltip("hide");
    }
  });
}
