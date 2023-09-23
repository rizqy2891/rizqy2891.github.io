
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_card .card");

const filterCard = e => {
  const selectedName = e.target.dataset.name;

  document.querySelector(".filter_buttons .active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach(card => {
    const cardName = card.dataset.name;
    if (selectedName === "all" || selectedName === cardName) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
};

filterButtons.forEach(button => button.addEventListener("click", filterCard));
