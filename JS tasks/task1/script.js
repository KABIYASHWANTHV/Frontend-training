const questions = [
    {
        question: "Which method is used to remove the last element from an array?",
        options: [
            { answer: "pop()", isCorrect: true },
            { answer: "shift()", isCorrect: false },
            { answer: "push()", isCorrect: false },
            { answer: "unshift()", isCorrect: false }
        ]
    },
    {
        question: "Which method is used to join all elements of an array into a string?",
        options: [
            { answer: "join()", isCorrect: true },
            { answer: "concat()", isCorrect: false },
            { answer: "slice()", isCorrect: false },
            { answer: "splice()", isCorrect: false }
        ]
    },
    {
        question: "Which method creates a new array with all elements that pass a test?",
        options: [
            { answer: "filter()", isCorrect: true },
            { answer: "map()", isCorrect: false },
            { answer: "reduce()", isCorrect: false },
            { answer: "forEach()", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is not a valid JavaScript data type?",
        options: [
            { answer: "Number", isCorrect: false },
            { answer: "String", isCorrect: false },
            { answer: "Float", isCorrect: true },
            { answer: "Boolean", isCorrect: false }
        ]
    },
    {
        question: "What will the following code output: `console.log(3 + '3')`?",
        options: [
            { answer: "33", isCorrect: true },
            { answer: "6", isCorrect: false },
            { answer: "NaN", isCorrect: false },
            { answer: "Error", isCorrect: false }
        ]
    }
];

$(document).ready(function () {
    if (localStorage.getItem('username')) {
        showQuizPage();
    } else {
        showLoginPage();
    }
});

function showLoginPage() {
    $('#loginPage').show();
    $('#quizPage').hide();
    $('#resultPage').hide();
    $('#dashboardPage').hide();
}

function showQuizPage() {
    $('#loginPage').hide();
    $('#quizPage').show();
    $('#resultPage').hide();
    $('#dashboardPage').hide();

    const username = localStorage.getItem('username');
    let quizContent = '';
    questions.forEach((q, index) => {
        quizContent += `
            <div class="mb-3">
                <p>${q.question}</p>
                ${q.options.map((option, i) => `
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="question${index}" value="${i}" id="question${index}option${i}">
                        <label class="form-check-label" for="question${index}option${i}">${option.answer}</label>
                    </div>
                `).join('')}
            </div>
        `;
    });
    $('#quizQuestions').html(quizContent);
}

function showResultPage() {
    $('#loginPage').hide();
    $('#quizPage').hide();
    $('#resultPage').show();
    $('#dashboardPage').hide();

    const username = localStorage.getItem('username');
    const score = localStorage.getItem('score');
    const userAnswers = [];

    questions.forEach((q, index) => {
        const userAnswer = $("input[name='question" + index + "']:checked").val();
        userAnswers.push(userAnswer === undefined ? 'No answer' : questions[index].options[userAnswer].answer);
    });

    let resultHtml = `<h4>${username}, your score is: ${score}/5</h4>`;
    questions.forEach((q, index) => {
        resultHtml += `
            <p><b>${q.question}</b></p>
            <p>Your answer: ${userAnswers[index]}</p>
            <p>Correct answer: ${q.options[q.options.findIndex(option => option.isCorrect)].answer}</p>
            <hr>
        `;
    });
    $('#resultContent').html(resultHtml);
}

function showDashboard() {
    $('#loginPage').hide();
    $('#quizPage').hide();
    $('#resultPage').hide();
    $('#dashboardPage').show();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.sort((a, b) => b.score - a.score);

    let userTableHtml = '';
    users.forEach((user, index) => {
        userTableHtml += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.score}</td>
                <td>${index + 1}</td>
            </tr>
        `;
    });

    $('#userTable').html(userTableHtml);
}

// Login form submission
$('#loginForm').submit(function (e) {
    e.preventDefault();
    const username = $('#username').val();
    const email = $('#email').val();

    if (username && validateEmail(email)) {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        showQuizPage();
    } else {
        alert('Please enter a valid name and email.');
    }
});

// Quiz form submission
$('#quizForm').submit(function (e) {
    e.preventDefault();
    let score = 0;

    questions.forEach((q, index) => {
        const userAnswer = $("input[name='question" + index + "']:checked").val();
        if (userAnswer !== undefined && q.options[userAnswer].isCorrect) {
            score++;
        }
    });

    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    let user = users.find(u => u.email === email);

    if (user) {
        if (score > user.score) {
            user.score = score;
        }
    } else {
        users.push({ name: username, email: email, score: score });
    }

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('score', score);
    showResultPage();
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
