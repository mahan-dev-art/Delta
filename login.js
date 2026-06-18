const ADMIN_PASSWORD = "1234";

let menu = JSON.parse(localStorage.getItem("menu")) || [];

/* LOGIN */
function login() {
  const pass = document.getElementById("pass").value;

  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem("logged", "true");
    showPanel();
  } else {
    alert("رمز اشتباه ❌");
  }
}

function logout() {
  localStorage.removeItem("logged");
  location.reload();
}

/* CHECK LOGIN */
function showPanel() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("adminPanel").style.display = "block";
  render();
}

if (localStorage.getItem("logged") === "true") {
  showPanel();
}

/* MENU */
function addItem() {
  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;
  const price = document.getElementById("price").value;

  if (!name) return;

  menu.push({ name, desc, price });
  save();
  render();

  document.getElementById("name").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("price").value = "";
}

function deleteItem(i) {
  menu.splice(i, 1);
  save();
  render();
}

function save() {
  localStorage.setItem("menu", JSON.stringify(menu));
}

/* RENDER */
function render() {
  const list = document.getElementById("menuList");
  list.innerHTML = "";

  menu.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>☕ ${item.name}</h3>
      <p>${item.desc}</p>
      <div class="price">${item.price}</div>
      <button class="delete" onclick="deleteItem(${i})">حذف</button>
    `;

    list.appendChild(div);
  });
}