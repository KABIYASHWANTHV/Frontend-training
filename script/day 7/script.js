let editRow = null;

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var isValid = true;
    var submitButton = document.getElementById("submit");

    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var phone = document.getElementById("phone_number").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    var dob = document.getElementById("dob").value.trim();
    var location = document.getElementById("location").value.trim();

    var subjects = [];
    var subjectCheckboxes = document.querySelectorAll('input[name="subject"]:checked');
    subjectCheckboxes.forEach((checkbox) => subjects.push(checkbox.value));

    var nameRegex = /^[A-Za-z ]+$/;  
    var ageRegex = /^(?:1[0-1][0-9]|[1-9][0-9]?)$/; 
    var phoneRegex = /^\d{10}$/; 
    var dobRegex = /^\d{4}-\d{2}-\d{2}$/; 

    function validateField(value, regex, errorId) {
        var errorMessage = document.getElementById(errorId);
        if (!regex.test(value)) {
            errorMessage.style.display = "block";
            isValid = false;
        } else {
            errorMessage.style.display = "none";
        }
    }

    validateField(name, nameRegex, "ename");
    validateField(age, ageRegex, "eage");
    validateField(phone, phoneRegex, "enumber");
    validateField(dob, dobRegex, "edob");

    var egender = document.getElementById("egender");
    if (!gender) {
        egender.style.display = "block";
        isValid = false;
    } else {
        egender.style.display = "none";
    }

    var esubject = document.getElementById("esubject");
    if (subjects.length === 0) {
        esubject.style.display = "block";
        isValid = false;
    } else {
        esubject.style.display = "none";
    }

    var elocation = document.getElementById("elocation");
    if (!location) {
        elocation.style.display = "block";
        isValid = false;
    } else {
        elocation.style.display = "none";
    }

    if (!isValid) return;

    if (editRow) {
        editRow.cells[0].textContent = name;
        editRow.cells[1].textContent = age;
        editRow.cells[2].textContent = phone;
        editRow.cells[3].textContent = gender;
        editRow.cells[4].textContent = subjects.join(", ");
        editRow.cells[5].textContent = dob;
        editRow.cells[6].textContent = location;
        submitButton.textContent = "Submit";
        editRow = null;
    } else {
        var table = document.getElementById("dataTable");
        var row = table.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = age;
        row.insertCell(2).textContent = phone;
        row.insertCell(3).textContent = gender;
        row.insertCell(4).textContent = subjects.join(", ");
        row.insertCell(5).textContent = dob;
        row.insertCell(6).textContent = location;

        var actionCell = row.insertCell(7);

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.style.backgroundColor = "green";
        editButton.style.color = "white";
        editButton.style.border = "none";
        editButton.style.padding = "5px 10px";
        editButton.style.cursor = "pointer";
        editButton.style.borderRadius = "5px";
        editButton.onclick = function() {
            document.getElementById("name").value = row.cells[0].textContent;
            document.getElementById("age").value = row.cells[1].textContent;
            document.getElementById("phone_number").value = row.cells[2].textContent;
            document.getElementById("dob").value = row.cells[5].textContent;
            document.getElementById("location").value = row.cells[6].textContent;
            
            var genderValue = row.cells[3].textContent;
            if (genderValue) {
                document.querySelector(`input[name="gender"][value="${genderValue}"]`).checked = true;
            }

            var subjectValues = row.cells[4].textContent.split(", ");
            document.querySelectorAll('input[name="subject"]').forEach(checkbox => {
                checkbox.checked = subjectValues.includes(checkbox.value);
            });

            submitButton.textContent = "Update";
            editRow = row;
        };

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.backgroundColor = "red";
        deleteButton.style.color = "white";
        deleteButton.style.border = "none";
        deleteButton.style.padding = "5px 10px";
        deleteButton.style.cursor = "pointer";
        deleteButton.style.borderRadius = "5px";
        deleteButton.onclick = function() {
            row.remove(); 
        };

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
    }

    document.getElementById("myForm").reset();
});
