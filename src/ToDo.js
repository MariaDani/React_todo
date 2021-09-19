import bin from "./bin2.png"

function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                <img src={bin} alt="rubbish"></img>
            </div>
        </div>
    )
}

export default ToDo