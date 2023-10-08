document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".byo-form");
  const coursesContainer = document.getElementById("courseFields");
  const addCourseButton = document.getElementById("addCourseButton");
  const resultContainer = document.getElementById("result");

  addCourseButton.addEventListener("click", addCourseField);
  form.addEventListener("submit", submitForm);
  form.addEventListener("reset", resetForm);

  function addCourseField() {
    const newCourseField = document.createElement("div");
    newCourseField.innerHTML = `
        <input type="text" class="courseInput" required>
        <button type="button" class="deleteButton">Delete</button><br>
    `;
    coursesContainer.appendChild(newCourseField);

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
      image: document.getElementById("image").files[0], // Get the image file
      imageCaption: document.getElementById("imageCaption").value,
      personalBackground: document.getElementById("personalBackground").value,
      professionalBackground: document.getElementById("professionalBackground")
        .value,
      academicBackground: document.getElementById("academicBackground").value,
      subjectBackground: document.getElementById("subjectBackground").value,
      computerPlatform: document.getElementById("computerPlatform").value,
      coursesTaking: document.getElementById("coursesTaking").value,
      funnyThing: document.getElementById("funnyThing").value,
      additionalInfo: document.getElementById("additionalInfo").value,
      agreeCheckbox: document.getElementById("agreeCheckbox").checked,
    };

    const reader = new FileReader();
    reader.onload = function () {
      resultContainer.innerHTML = `
          <h2>Intro Page Preview:</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Mascot:</strong> ${formData.mascot}</p>
          <p><strong>Image:</strong> <img src="${
            reader.result
          }" alt="Uploaded Image"></p>
          <p><strong>Image Caption:</strong> ${formData.imageCaption}</p>
          <p><strong>Personal Background:</strong> ${
            formData.personalBackground
          }</p>
          <p><strong>Professional Background:</strong> ${
            formData.professionalBackground
          }</p>
          <p><strong>Academic Background:</strong> ${
            formData.academicBackground
          }</p>
          <p><strong>Background in Subject:</strong> ${
            formData.subjectBackground
          }</p>
          <p><strong>Primary Computer Platform:</strong> ${
            formData.computerPlatform
          }</p>
          <p><strong>Courses I’m Taking:</strong> ${formData.coursesTaking}</p>
          <p><strong>Funny Thing:</strong> ${formData.funnyThing}</p>
          <p><strong>Additional Info:</strong> ${formData.additionalInfo}</p>
          <p><strong>Agree Checkbox:</strong> ${
            formData.agreeCheckbox ? "Checked" : "Unchecked"
          }</p>
      `;
      form.style.display = "none";
      resultContainer.style.display = "block";
    };

    if (formData.image) {
      reader.readAsDataURL(formData.image);
    } else {
      resultContainer.innerHTML = "Image not selected!";
    }
  }

  function resetForm() {
    form.style.display = "block";
    resultContainer.style.display = "none";
    // Clear course fields
    coursesContainer.innerHTML = "";
  }
});
