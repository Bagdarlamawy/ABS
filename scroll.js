window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("agymdagy");
        document
          .querySelector("header .mazir a[href*=" + id + "]")
          .classList.add("agymdagy");
      });
    }
  });
};    