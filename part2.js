// let nameArray: String[] = ["connor", "shane", "oskar", "dean"];
// console.log(nameArray[1]);
var myTaskArray = [];
function addTask(task) {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the Array.");
    var count = myTaskArray.length;
    return count;
}
function listAllTasks() {
    // for(let i = 0; i < myTaskArray.length; i++){
    // }
    console.log("List of items in the Array");
    myTaskArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = myTaskArray.indexOf(task);
    if (index > -1) {
        myTaskArray.splice(index, 1);
        console.log("Element " + task + " removed from the Array");
    }
    else {
        console.log("Element " + task + " not in Array");
    }
    return myTaskArray.length;
}
addTask("number two");
addTask("number three");
var elementCount = addTask("Number One");
console.log(elementCount);
listAllTasks();
var x = deleteTask("number two");
console.log(x);
