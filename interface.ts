export interface tasksInterface {
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
    myTaskArray:Array<string>;
}