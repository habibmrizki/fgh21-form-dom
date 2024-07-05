// const formSurvey = document.getElementById("form-survey");
// // nama

// const content = document.createElement("div");

// const names = document.createElement("label");
// names.textContent = "Siapa nama anda?";
// names.setAttribute("for", "fname");

// const inputWrapper = document.createElement("div");

// const inputName = document.createElement("input");
// inputName.setAttribute("type", "text");
// names.setAttribute("id", "fname");

// content.appendChild(names);
// inputWrapper.appendChild(inputName);
// content.appendChild(inputWrapper);
// formSurvey.appendChild(content);

// // umur
// const content2 = document.createElement("div");

// const age = document.createElement("label");
// age.textContent = "Berapa umur anda?";
// age.setAttribute("for", "age");

// const inputWrapper2 = document.createElement("div");

// const inputAge = document.createElement("input");
// inputAge.setAttribute("type", "text");
// inputAge.setAttribute("id", "age");

// content2.appendChild(age);
// inputWrapper2.appendChild(inputAge);
// content2.appendChild(inputWrapper2);
// formSurvey.appendChild(content2);

// // radio
// const content3 = document.createElement("div");
// content3.textContent = "Apa Jenis Kelamin anda?";

// const radioInput = document.createElement("input");
// radioInput.setAttribute("type", "radio");
// radioInput.setAttribute("name", "gender");
// const radioLabel = document.createElement("label");
// const radioLabelText = document.createTextNode("Laki-laki");
// radioLabel.setAttribute("for", "Laki-laki");

// const radioInputP = document.createElement("input");
// radioInputP.setAttribute("type", "radio");
// radioInputP.setAttribute("name", "gender");
// const radioLabelP = document.createElement("label");
// const radioLabelTextP = document.createTextNode("Perempuan");
// radioLabel.setAttribute("for", "Perempuan");

// formSurvey.appendChild(content3);
// formSurvey.appendChild(radioInput);
// formSurvey.appendChild(radioLabelText);
// formSurvey.appendChild(radioInputP);
// formSurvey.appendChild(radioLabelTextP);

// // perokok
// const content4 = document.createElement("div");
// content4.textContent = "apakah anda perokok?";

// const radioInput2 = document.createElement("input");
// radioInput2.setAttribute("type", "radio");
// radioInput2.setAttribute("name", "question");
// const radioLabel2 = document.createElement("label");
// const radioLabelText2 = document.createTextNode("yes");
// radioLabel2.setAttribute("for", "ya");

// const radioInput3 = document.createElement("input");
// radioInput3.setAttribute("type", "radio");
// radioInput3.setAttribute("name", "question");
// const radioLabel3 = document.createElement("label");
// const radioLabelText3 = document.createTextNode("no");
// radioLabel3.setAttribute("for", "no");

// formSurvey.appendChild(content4);
// formSurvey.appendChild(radioInput2);
// formSurvey.appendChild(radioLabelText2);
// formSurvey.appendChild(radioInput3);
// formSurvey.appendChild(radioLabelText3);

// // pertanyaan jenis rokok
// const content5 = document.createElement("div");
// content5.textContent = "Jika ada perokok, jenis rokok apa yang anda pakai?";

// const smoker = document.createElement("div");
// const radioInputSmoker = document.createElement("input");
// radioInputSmoker.setAttribute("type", "checkbox");
// const nameSmoker = document.createElement("label");
// nameSmoker.textContent = "dajrum";
// nameSmoker.setAttribute("for", "dajrum");

// smoker.appendChild(radioInputSmoker);
// smoker.appendChild(nameSmoker);

// const smoker2 = document.createElement("div");
// const radioInputSmoker2 = document.createElement("input");
// radioInputSmoker2.setAttribute("type", "checkbox");
// const nameSmoker2 = document.createElement("label");
// nameSmoker2.textContent = "camel";
// nameSmoker2.setAttribute("for", "camel");

// smoker2.appendChild(radioInputSmoker2);
// smoker2.appendChild(nameSmoker2);

// const smoker3 = document.createElement("div");
// const radioInputSmoker3 = document.createElement("input");
// radioInputSmoker3.setAttribute("type", "checkbox");
// const nameSmoker3 = document.createElement("label");
// nameSmoker3.textContent = "malboro";
// nameSmoker3.setAttribute("for", "malboro");

// smoker3.appendChild(radioInputSmoker3);
// smoker3.appendChild(nameSmoker3);

// const smoker4 = document.createElement("div");
// const radioInputSmoker4 = document.createElement("input");
// radioInputSmoker4.setAttribute("type", "checkbox");
// const nameSmoker4 = document.createElement("label");
// nameSmoker4.textContent = "beryy";
// nameSmoker4.setAttribute("for", "berry");

// smoker4.appendChild(radioInputSmoker4);
// smoker4.appendChild(nameSmoker4);

// formSurvey.appendChild(content5);
// formSurvey.appendChild(smoker);
// formSurvey.appendChild(smoker2);
// formSurvey.appendChild(smoker3);
// formSurvey.appendChild(smoker4);

const btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const fname = e.target.getElementById("fname").value;
  const age = e.target.getElementById("age").value;
  const male = e.target.getElementById("male").value;
  const female = e.target.getElementById("female").value;
  const smoke1 = e.target.getElementById("smoke1").value;
  const smoke2 = e.target.getElementById("smoke2").value;
  const smoker1 = e.target.getElementById("smoker1").value;
  const smoker2 = e.target.getElementById("smoker2").value;
  const smoker3 = e.target.getElementById("smoker3").value;
  const smoker4 = e.target.getElementById("smoker4").value;
  console.log();
});
