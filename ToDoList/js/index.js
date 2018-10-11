const list = document.querySelector(".list");
const input = document.querySelector(".form-input");
const btnClick = document.querySelector(".form-button");

function handleBtnClick(e) {
  e.preventDefault();

  if (!input.value) return;

  const li = document.createElement("li");
  li.classList.add("list-item");

  const p = document.createElement("p");
  const btn = document.createElement("button");

  p.textContent = input.value;
  btn.textContent = "x";

  li.append(p, btn);
  list.appendChild(li);
  input.parentElement.reset();
}

btnClick.addEventListener("click", handleBtnClick);

function handleRemoveLi(e) {
  e.preventDefault();

  if (e.target.nodeName !== "BUTTON") return;

  e.target.parentNode.remove();
}

list.addEventListener("click", handleRemoveLi);
