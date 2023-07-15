(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  const bodyMenuRef = document.querySelector("[data-body-hidden]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-close");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-close");
  });

  menuBtnRef.addEventListener("click", () => {
    bodyMenuRef.classList.toggle("is-lock");
   });
  
  mobileBtnClose.addEventListener("click", () => {
    bodyMenuRef.classList.toggle("is-lock");
  });
})();