let navItem = document.getElementsByClassName("list-item");

const validateEmail = () => {
  let input = document.getElementById("newsletterInput");

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
};

const addActiveClass = (event) => {
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].classList.remove("active");
  }

  
  event.target.parentElement.classList.add("active");
};

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", addActiveClass);
}
