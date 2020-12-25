const p = document.getElementsByClassName("products");
export const Validation = (e) => {
  if (e.currentTarget.classList !== "active") {
    if (e.currentTarget.id > 0) {
      document.querySelector(".Todos").classList.remove("active");
      e.currentTarget.classList.toggle("active");
      document
        .getElementById(`items${e.currentTarget.classList[1]}`)
        .classList.toggle("active");
    }
    if (e.currentTarget.id === "0") {
      for (let i = 0; i < p.length; i++) {
        if (p[i].classList === "active") {
          p[i].classList.remove("active");
        } else {
          p[i].classList.add("active");
        }
      }
      document.querySelector(".Todos").classList.add("active");
      document.querySelector(".Profissional").classList.remove("active");
      document.querySelector(".Reguladores").classList.remove("active");
      document.querySelector(".SócioAmbiental").classList.remove("active");
      document.querySelector(".Jurídico").classList.remove("active");
      document.querySelector(".ListasRestritivas").classList.remove("active");
      document.querySelector(".MídiaInternet").classList.remove("active");
      document.querySelector(".BenseImóveis").classList.remove("active");
      document.querySelector(".Cadastro").classList.remove("active");
      document.querySelector(".Financeiro").classList.remove("active");
    }
    if (
      document.querySelector(".Profissional").classList[2] &&
      document.querySelector(".Reguladores").classList[2] &&
      document.querySelector(".SócioAmbiental").classList[2] &&
      document.querySelector(".Jurídico").classList[2] &&
      document.querySelector(".ListasRestritivas").classList[2] &&
      document.querySelector(".MídiaInternet").classList[2] &&
      document.querySelector(".BenseImóveis").classList[2] &&
      document.querySelector(".Cadastro").classList[2] &&
      document.querySelector(".Financeiro").classList[2] === "active"
    ) {
      for (let i = 0; i < p.length; i++) {
        if (p[i].classList === "active") {
          p[i].classList.remove("active");
        } else {
          p[i].classList.add("active");
        }
      }
      document.querySelector(".Todos").classList.add("active");
      document.querySelector(".Profissional").classList.remove("active");
      document.querySelector(".Reguladores").classList.remove("active");
      document.querySelector(".SócioAmbiental").classList.remove("active");
      document.querySelector(".Jurídico").classList.remove("active");
      document.querySelector(".ListasRestritivas").classList.remove("active");
      document.querySelector(".MídiaInternet").classList.remove("active");
      document.querySelector(".BenseImóveis").classList.remove("active");
      document.querySelector(".Cadastro").classList.remove("active");
      document.querySelector(".Financeiro").classList.remove("active");
    }
  }
};
