function login() {
  const password = document.getElementById("password").value;
  const errorEl = document.getElementById("loginError");

  const name = document.getElementById("loginName").value.trim();

  if (Number(password) === 1229) {
    // Notify form
    const notifyForm = document.getElementById("notifyForm");
    let timeInput = document.getElementById("loginTime");
    if (!timeInput) {
      timeInput = document.createElement("input");
      timeInput.type = "hidden";
      timeInput.name = "message";
      timeInput.id = "loginTime";
      notifyForm.appendChild(timeInput);
    }
    const displayName = name ? name : "Someone";
    timeInput.value =
      displayName + " logged in ❤️ at " + new Date().toLocaleString();
    notifyForm.submit();

    errorEl.textContent = "Loading...";

    setTimeout(() => {
      // Hide login, show updates
      document.getElementById("loginPage").classList.add("hidden");
      document.body.classList.add("updates-bg");

      const updatesPage = document.getElementById("updatesPage");
      updatesPage.classList.add("visible");

      initUpdates();
    }, 1000);
  } else {
    errorEl.textContent = "Wrong password!";
  }
}

// ─── UPDATES LOGIC ───
function initUpdates() {
  // Chat bubble toggle
  const boxOpen = document.getElementById("open");
  const messageBox = document.querySelector(".message-box");

  document.getElementById("remove").addEventListener("click", () => {
    messageBox.style.display = "none";
    boxOpen.style.display = "block";
  });
  boxOpen.onclick = function () {
    messageBox.style.display = "block";
    boxOpen.style.display = "none";
  };

  // Birthday gift link
  const link = document.getElementById("link");
  const birthday_date = new Date("2026-05-14");
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (new Date() >= birthday_date) {
      window.open(link.href, "_blank");
    } else {
      link.innerHTML = "The gift will open at exact May 14, 2026";
      alert("The gift will open at exact May 14, 2026");
    }
  });

  // Image zoom
  const overlay = document.getElementById("overlay");
  const photos = document.querySelectorAll("update img");
  photos.forEach((img) => {
    img.addEventListener("click", () => {
      img.classList.toggle("zoom");
      overlay.classList.toggle("active");
      document.body.classList.add("no-scroll");
    });
  });
  overlay.addEventListener("click", () => {
    photos.forEach((img) => img.classList.remove("zoom"));
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
}