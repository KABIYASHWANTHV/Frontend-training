$(document).ready(function () {
    let tasks = [];
    
    function updateTable() {
        let tbody = $('#taskTable');
        tbody.empty();
        tasks.forEach((task, index) => {
            tbody.append(`<tr>
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>${task.estimatedDate}</td>
                <td>${task.estimatedTime}</td>
                <td><span id="timer-${index}">00:00:00</span></td>
                <td class="task-buttons">
                    <button class="btn btn-success start-task" data-index="${index}">Start</button>
                    <button class="btn btn-danger stop-task" data-index="${index}">Stop</button>
                    <button class="btn btn-warning edit-task" data-index="${index}">Edit</button>
                    <button class="btn btn-danger delete-task" data-index="${index}">Delete</button>
                </td>
            </tr>`);
        });
    }
    
    $('#taskForm').submit(function (e) {
        e.preventDefault();
        let editIndex = $('#editIndex').val();
        let task = {
            title: $('#taskTitle').val(),
            description: $('#taskDescription').val(),
            estimatedDate: $('#taskDate').val(),
            estimatedTime: $('#taskTime').val(),
            startTime: null,
            timer: null
        };
        if (editIndex === "-1") {
            tasks.push(task);
        } else {
            tasks[editIndex] = task;
            $('#editIndex').val("-1");
        }
        updateTable();
        this.reset();
    });
    
    $(document).on('click', '.start-task', function () {
        let index = $(this).data('index');
        tasks[index].startTime = new Date().getTime();
        tasks[index].timer = setInterval(() => {
            let elapsed = Math.floor((new Date().getTime() - tasks[index].startTime) / 1000);
            let hours = Math.floor(elapsed / 3600).toString().padStart(2, '0');
            let minutes = Math.floor((elapsed % 3600) / 60).toString().padStart(2, '0');
            let seconds = (elapsed % 60).toString().padStart(2, '0');
            $(`#timer-${index}`).text(`${hours}:${minutes}:${seconds}`);
        }, 1000);
    });
    
    $(document).on('click', '.stop-task', function () {
        let index = $(this).data('index');
        clearInterval(tasks[index].timer);
    });

    $(document).on('click', '.edit-task', function () {
        let index = $(this).data('index');
        let task = tasks[index];
        $('#taskTitle').val(task.title);
        $('#taskDescription').val(task.description);
        $('#taskDate').val(task.estimatedDate);
        $('#taskTime').val(task.estimatedTime);
        $('#editIndex').val(index);
    });
    
    $(document).on('click', '.delete-task', function () {
        let index = $(this).data('index');
        tasks.splice(index, 1);
        updateTable();
    });
});