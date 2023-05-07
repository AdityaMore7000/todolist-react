import ToDoComponent from "./TodoComponent";

const ToDoList = () => {
    return ( 
    <div className="flex justify-center">
    <div className="">
    <ToDoComponent/>
    <ToDoComponent/>
    <ToDoComponent/>
    <ToDoComponent/>
    </div> 
    </div>
    );
}
 
export default ToDoList
;