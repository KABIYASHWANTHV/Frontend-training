document.getElementById("quizform").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let nameError = document.getElementById("name_error");
  let emailError = document.getElementById("email_error");

  nameError.textContent = "";
  emailError.textContent = "";

  if (!validateName(name)) {
      nameError.textContent = "Please enter a valid name";
      nameError.style.color = "red";
      return;
  }
  
  if (!validateEmail(email)) {
      emailError.textContent = "Please enter a valid email.";
      emailError.style.color = "red";
      return;
  }
  
  document.getElementById("quizform").style.display = "none";
  displayQuiz();
});

function validateName(name) {
  let re = /^[A-Za-z\s]+$/;
  return re.test(name);
}

function validateEmail(email) {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function displayQuiz() {
  let quizContainer = document.createElement("div");
  quizContainer.innerHTML = `
      <h2>JavaScript Quiz</h2>
      <form id="quizQuestions">
          <div class="form-group">
              <label>1.Which method is used to remove the last element from an array?</label><br>
              <input type="radio" name="q1" value="a">&nbsp pop()<br>
              <input type="radio" name="q1" value="b">&nbsp shift()<br>
              <input type="radio" name="q1" value="c">&nbsp push()<br>
              <input type="radio" name="q1" value="d">&nbsp unshift()<br>
          </div>
          <div class="form-group">
              <label>2. Which method is used to join all elements of an array into a string?</label><br>
              <input type="radio" name="q2" value="a">&nbsp join() <br>
              <input type="radio" name="q2" value="b">&nbsp concat() <br>
              <input type="radio" name="q2" value="c">&nbsp slice() <br>
              <input type="radio" name="q2" value="d">&nbsp splice() <br>
          </div>
          <div class="form-group">
              <label>3. Which method creates a new array with all elements that pass a test?</label><br>
              <input type="radio" name="q3" value="a">&nbsp filter() <br>
              <input type="radio" name="q3" value="b">&nbsp map() <br>
              <input type="radio" name="q3" value="c">&nbsp reduce() <br>
              <input type="radio" name="q3" value="d">&nbsp forEach() <br>
          </div>
          <div class="form-group">
              <label>4. Which of the following is not a valid JavaScript data type?</label><br>
              <input type="radio" name="q4" value="a">&nbsp Number() <br>
              <input type="radio" name="q4" value="b">&nbsp String() <br>
              <input type="radio" name="q4" value="c">&nbsp Float() <br>
              <input type="radio" name="q4" value="d">&nbsp Boolean() <br>
          </div>
          <div class="form-group">
              <label>5. What will the following code output: "console.log(3 + '3')"?</label><br>
              <input type="radio" name="q5" value="a">&nbsp 33 <br>
              <input type="radio" name="q5" value="b">&nbsp 6 <br>
              <input type="radio" name="q5" value="c">&nbsp NaN <br>
              <input type="radio" name="q5" value="d">&nbsp Error <br>
          </div>
          <button type="submit" class="btn btn-primary">Submit Quiz</button>
      </form>
      <div id="quizResults"></div>
  `;

  document.body.appendChild(quizContainer);

    document.getElementById("quizQuestions").addEventListener("submit", function(event) {
        event.preventDefault();
        displayResults();
  });
}
function displayResults() {
  let correctAnswers = { q1: "a", q2: "a" , q3: "a", q4:"c", q5:"a"};
  let resultsContainer = document.getElementById("quizResults");
  resultsContainer.innerHTML = "<h3>Results:</h3>";
  
  let score = 0;
  Object.keys(correctAnswers).forEach(question => {
      let selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected) {
          let isCorrect = selected.value === correctAnswers[question];
          resultsContainer.innerHTML += `<p>${question}: ${isCorrect ? "Correct ✅" : "Wrong ❌"}</p>`;
          if (isCorrect) score++;
      } else {
          resultsContainer.innerHTML += `<p>${question}: No answer selected ❌</p>`;
      }
  });
  resultsContainer.innerHTML += `<h4>Your Score: ${score} / ${Object.keys(correctAnswers).length}</h4>`;
}
if (window.location.pathname.includes("results.html")) {
  document.addEventListener("DOMContentLoaded", function() {
      let name = localStorage.getItem("username");
      let email = localStorage.getItem("email");
      let score = localStorage.getItem("score");
      
      let resultsContainer = document.createElement("div");
      resultsContainer.innerHTML = `
          <h2>Scores</h2>
          <table class="table table-bordered">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Score</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>${name}</td>
                      <td>${email}</td>
                      <td>${score}</td>
                  </tr>
              </tbody>
          </table>
      `;
      document.body.appendChild(resultsContainer);
  });
}