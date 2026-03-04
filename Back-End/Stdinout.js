const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];
let nextid = 1

function showMenu() {
    console.log("\n==== SMART TASK MANAGER ====");
    console.log("1. Add Task");
    console.log("2. View All Tasks");
    console.log("3. Mark Task Completed");
    console.log("4. Delete Task");
    console.log("5. Show Completed Tasks");
    console.log("6. Show Pending Tasks");
    console.log("7. Exit");

    rl.question("Choose option: ", handleMenu);
}

function handleMenu(choice) {

    switch (choice) {
        case "1":
            addTask();
            break;
        case "2":
            viewTasks();
            break;
        case "3":
            marktask();
            break;
        case "4":
            deleteTask();
            break;
        case "5":
            showCompleted();
            break;
        case "6":
            showPending();
            break;
        case "7":
            rl.close();
            break;
        default:
            console.log("Invalid choice");
            showMenu();
    }
}

function addTask() {
    rl.question("Enter task title: ", (title) => {
        const task = {
            id: nextid,
            title: title,
            completed: false
        }
        nextid++
        tasks.push(task);
        console.log(tasks)

        showMenu();
    });
}

function viewTasks() {

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let status;
        if (task.completed === true) {
            status = "completed";
        }
        else {
            status = "pending";
        }
        console.log("ID:", task.id,
            "| Title:", task.title,
            "| Status:", status);
    }

    showMenu();
}

function marktask() {
    rl.question("Enter task ID to mark completed: ", (id) => {

        let numericId = Number(id);

        let findtask = tasks.find(f => f.id === numericId);

        if (findtask) {
            findtask.completed = true;
            console.log("Task marked as completed.");
        } else {
            console.log("Task not found.");
        }

        showMenu();
    });
}

function deleteTask() {
    rl.question("Enter task ID to delete: ", (id) => {

        let numericId = Number(id);
        let found = false;

        for (let i = 0; i < tasks.length; i++) {

            if (tasks[i].id === numericId) {
                tasks.splice(i, 1);
                found = true;
                break;
            }
        }

        if (found) {
            console.log("Task deleted successfully.");
        } else {
            console.log("Invalid ID.");
        }

        showMenu();
    });
}

function showCompleted() {

    for (let element of tasks) {
        if (element.completed === true) {
            console.log(element)
        }
    }

    showMenu();
}

function showPending() {

    for (let element of tasks) {
        if (element.completed === false) {
            console.log(element)
        }
    }

    showMenu();
}

showMenu();