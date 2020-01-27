"use strict";
exports.__esModule = true;
var myTaskManager = /** @class */ (function () {
    function myTaskManager() {
        this.myTaskArray = [];
    }
    myTaskManager.prototype.addTask = function (task) {
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the Array.");
        var count = this.myTaskArray.length;
        return count;
    };
    myTaskManager.prototype.listAllTasks = function () {
        console.log("List of items in the Array");
        this.myTaskArray.forEach(function (task) {
            console.log(task);
        });
    };
    myTaskManager.prototype.deleteTask = function (task) {
        var index = this.myTaskArray.indexOf(task);
        if (index > -1) {
            this.myTaskArray.splice(index, 1);
            console.log("Element " + task + " removed from the Array");
        }
        else {
            console.log("Element " + task + " not in Array");
        }
        return this.myTaskArray.length;
    };
    return myTaskManager;
}());
var myTaskManager1 = new myTaskManager();
myTaskManager1.addTask("Item 1");
myTaskManager1.addTask("Item 2");
myTaskManager1.listAllTasks();
