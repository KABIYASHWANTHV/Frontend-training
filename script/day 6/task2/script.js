const data = [
    {
        id: 1, name: "John", tasks: [
            { taskId: 101, description: "Complete report", status: "Pending" },
            { taskId: 102, description: "Review code", status: "Completed" }
        ]
    },
    {
        id: 2, name: "Jane", tasks: [
            { taskId: 103, description: "Prepare slides", status: "In Progress" },
            { taskId: 104, description: "Team meeting", status: "Pending" }
        ]
    }
];

const tableBody = document.getElementById("taskTable");

data.forEach(person => {
    person.tasks.forEach(task => {
        let row = `<tr>
            <td>${person.name}</td>
            <td>${task.description}</td>
            <td>${task.status}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
});