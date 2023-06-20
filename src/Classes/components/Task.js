export const Task = (props) => {
    return (
        <li style={{ color: props.item.isComplete ? "green" : "black" }}>
            {props.item.taskName}
            <button onClick={() => props.deleteTask(props.item.id)}>X</button>
            <button onClick={() => props.completeTask(props.item.id)}>{props.item.isComplete ? "Completed" : "Complete"}</button>
        </li>
    )
}