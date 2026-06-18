const menu = [
  {
    name: "اسپرسو",
    desc: "قهوه غلیظ و کلاسیک با طعم قوی",
    price: "85,000 تومان"
  },
  {
    name: "لاته",
    desc: "قهوه نرم و کرمی با شیر بخار داده شده",
    price: "120,000 تومان"
  },
  {
    name: "کاپوچینو",
    desc: "ترکیب متعادل قهوه، شیر و فوم",
    price: "110,000 تومان"
  },
  {
    name: "کولد برو",
    desc: "قهوه سرد و ملایم",
    price: "150,000 تومان"
  }
];

function renderMenu() {

  // گرفتن داده از localStorage
  let menu = JSON.parse(localStorage.getItem("menu")) || [];

  const list = document.getElementById("menuList");
  list.innerHTML = "";

  // اگر چیزی نبود
  if (menu.length === 0) {
    list.innerHTML = "<p style='text-align:center'>منویی وجود ندارد ☕</p>";
    return;
  }

  menu.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>☕ ${item.name}</h3>
      <p>${item.desc}</p>
      <div class="price">${item.price}</div>
    `;

    list.appendChild(card);
  });
}

renderMenu();

