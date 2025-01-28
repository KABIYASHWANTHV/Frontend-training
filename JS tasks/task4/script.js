$(document).ready(function () {
    let expenses = [];
    
    function updateTable(filteredExpenses) {
        let totalExpense = 0;
        let tbody = $('#expenseTable');
        tbody.empty();
        
        filteredExpenses.forEach((expense, index) => {
            totalExpense += parseFloat(expense.amount);
            tbody.append(`<tr>
                <td><input type="text" value="${expense.name}" class="form-control edit-name" data-index="${index}"></td>
                <td><input type="number" value="${expense.amount}" class="form-control edit-amount" data-index="${index}"></td>
                <td>
                    <select class="form-control edit-category" data-index="${index}">
                        <option value="Food" ${expense.category === "Food" ? "selected" : ""}>Food</option>
                        <option value="Travel" ${expense.category === "Travel" ? "selected" : ""}>Travel</option>
                        <option value="Shopping" ${expense.category === "Shopping" ? "selected" : ""}>Shopping</option>
                        <option value="Other" ${expense.category === "Other" ? "selected" : ""}>Other</option>
                    </select>
                </td>
                <td><input type="date" value="${expense.date}" class="form-control edit-date" data-index="${index}"></td>
                <td>
                   <div class="d-flex justify-content-start">
                        <button class="btn btn-success edit-expense ms-2" data-index="${index}">Edit</button>
                        <button class="btn btn-danger delete-expense ms-2" data-index="${index}">Delete</button>
                    </div>
                </td>
            </tr>`);
        });
        
        $('#totalExpense').text(totalExpense);
    }

    $('#expenseForm').submit(function (e) {
        e.preventDefault();
        let expense = {
            name: $('#expenseName').val(),
            amount: parseFloat($('#amount').val()),
            category: $('#category').val(),
            date: $('#date').val()
        };
        expenses.push(expense);
        updateTable(expenses);
        this.reset();
    });

    $(document).on('click', '.delete-expense', function () {
        let index = $(this).data('index');
        expenses.splice(index, 1);
        updateTable(expenses);
    });

    $(document).on('click', '.edit-expense', function () {
        let index = $(this).data('index');
        let expense = expenses[index];
        $('#expenseName').val(expense.name);
        $('#amount').val(expense.amount);
        $('#category').val(expense.category);
        $('#date').val(expense.date);
        expenses.splice(index, 1);
        updateTable(expenses);
    });

    $('#search').on('input', function () {
        let query = $(this).val().toLowerCase();
        let filteredExpenses = expenses.filter(function (expense) {
            return expense.name.toLowerCase().includes(query) || expense.category.toLowerCase().includes(query);
        });
        updateTable(filteredExpenses);
    });
});
