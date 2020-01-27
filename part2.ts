// let nameArray: String[] = ["connor", "shane", "oskar", "dean"];
// console.log(nameArray[1]);



let myTaskArray: Array<string> = [];

function addTask(task: string): number {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the Array.");
    let count: number = myTaskArray.length;
    return count;
}

function listAllTasks(): void {
    // for(let i = 0; i < myTaskArray.length; i++){
    // }
    console.log("List of items in the Array");
    myTaskArray.forEach(function (task) {
        console.log(task);
    });
}

function deleteTask(task: string): number {
    let index: number = myTaskArray.indexOf(task);
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
let elementCount: number = addTask("Number One");
console.log(elementCount);

listAllTasks();
let x: number = deleteTask("number two");
console.log(x);