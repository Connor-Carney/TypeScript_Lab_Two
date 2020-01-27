import {tasksInterface} from "./interface";
 
class myTaskManager implements tasksInterface{
    myTaskArray: Array<string> = [];

    constructor (){ }

    addTask(task: string): number {
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the Array.");
        let count: number = this.myTaskArray.length;
        return count;
    }
    listAllTasks(): void {
        console.log("List of items in the Array");
        this.myTaskArray.forEach(function (task) {
            console.log(task);
        });
    }
    deleteTask(task: string): number {
        let index: number = this.myTaskArray.indexOf(task);
        if (index > -1) {
            this.myTaskArray.splice(index, 1);
            console.log("Element " + task + " removed from the Array");
        }
        else {
            console.log("Element " + task + " not in Array");
        }
        return this.myTaskArray.length;
    }
}

let myTaskManager1 = new myTaskManager();
myTaskManager1.addTask("Item 1");
myTaskManager1.addTask("Item 2");
myTaskManager1.listAllTasks();