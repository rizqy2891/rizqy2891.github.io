
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


const judul = document.getElementsByTagName('h1')[0];
judul.style.fontSize = '50px' ;
judul.style.fontWeight = 'bold' ;
judul.style.color= 'rgba(199, 230, 230, 0.3)';
judul.style.textShadow= '5px 5px 5px rgba(182, 206, 206, 0.3)';
