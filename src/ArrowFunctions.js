class TaskCollection 
{
    constructor (tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach(task => console.log(task));
    }

    prepare() {
        this.tasks.forEach(task => task.displaySomeString());
    }
}

class Task {
    displaySomeString() {
        console.log("Hello World");
    }
}

new TaskCollection([
    new Task, new Task, new Task, new Task
]).prepare();

let names = ['Eric', 'Marvin', 'Espiritu', 'Baste'];

names = names.map(name => name + ' is cool.');

console.log(names);