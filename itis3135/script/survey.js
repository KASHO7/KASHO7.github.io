document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".byo-form");
  const coursesContainer = document.getElementById("coursesContainer");
  const addCourseButton = document.getElementById("addCourseButton");
  const resultContainer = document.getElementById("result");

  addCourseButton.addEventListener("click", addCourseField);
  form.addEventListener("submit", submitForm);
  form.addEventListener("reset", resetForm);

  function addCourseField() {
    const courseFields = document.getElementById("courseFields");
    const newCourseField = document.createElement("div");
    newCourseField.innerHTML = `
        <input type="text" class="courseInput" required>
        <button type="button" class="deleteButton">Delete</button><br>
      `;
    courseFields.appendChild(newCourseField);

    const deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        this.parentElement.remove();
      });
    });
  }

  function submitForm(event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      mascot: document.getElementById("mascot").value,
      image: document.getElementById("image").value, // For file input, use .value to get the filename
      imageCaption: document.getElementById("imageCaption").value,
      funnyThing: document.getElementById("funnyThing").value,
      anythingElse: document.getElementById("anythingElse").value,
      agreeCheckbox: document.getElementById("agreeCheckbox").checked,
    };

    resultContainer.innerHTML = `
        <h2>Intro Page Preview:</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Mascot:</strong> ${formData.mascot}</p>
        <p><strong>Image:</strong> ${formData.image}</p>
        <p><strong>Image Caption:</strong> ${formData.imageCaption}</p>
        <p><strong>Funny Thing:</strong> ${formData.funnyThing}</p>
        <p><strong>Anything Else:</strong> ${formData.anythingElse}</p>
        <p><strong>Agree Checkbox:</strong> ${
          formData.agreeCheckbox ? "Checked" : "Unchecked"
        }</p>
      `;

    const courseInputs = document.querySelectorAll(".courseInput");
    let courses = "";
    courseInputs.forEach((input) => {
      courses += input.value + ", ";
    });
    courses = courses.slice(0, -2);
    resultContainer.innerHTML += `<p><strong>Courses Currently Taking:</strong> ${courses}</p>`;

    form.style.display = "none";
    resultContainer.style.display = "block";
  }

  function resetForm() {
    form.style.display = "block";
    resultContainer.style.display = "none";
  }
});
