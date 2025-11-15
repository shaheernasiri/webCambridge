document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const toggleBtn = document.getElementById("toggle-theme");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    form.reset();
  });

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});