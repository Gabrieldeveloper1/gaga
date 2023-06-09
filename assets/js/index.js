
const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");
menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});

new TypeIt(".name-title", {
  strings: "",
  speed: 75,
  loop: false,
}).go();

new TypeIt("#asyncExec", {
  waitUntilVisible: true,
})
  .type("Frontend")
  .exec(async () => {
    //-- Return a promise that resolves after something happens.
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve();
      }, 2500);
    });
  })
  .type(" Developer")
  .go();