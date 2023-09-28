const siteTitle = document.getElementById("site-title");
siteTitle.innerText = "RedDOT Cloud Engineers";

const contentText = document.getElementsByClassName("content-text");

Array.from(contentText).forEach((el) => {
  el.innerText = el.innerText.replace(
    "RedDot Technologies",
    "RedDOT Cloud Engineers"
  );
  el.innerText = el.innerText.toUpperCase();
});

const siteDesc = document.querySelector("#site-description");
siteDesc.innerText = "Your trusted partner in the Cloud!";

const contentDiv = document.querySelector(".content");
contentDiv.style.textAlign = "justify";

const altNavs = document.querySelectorAll("#nav > li:nth-of-type(odd)");
altNavs.forEach((el) => (el.style.backgroundColor = "rgba(0,0,0,0.5)"));
