export function FetchTodos({ todos, setTodos }) {
    return <div>
        {todos.map(function (todo) {
            return <div>
                <h1>{todo.Title}</h1>
                <h2>{todo.Description}</h2>
                <button
                    onClick={async () => {
                        console.log(todo._id)
                        await fetch("http://localhost:3000/completed", {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                id: todo._id
                            })
                        })
                        fetch("http://localhost:3000/todos")
                            .then(async (res) => {
                                const data = await res.json();
                                setTodos(data);
                            })
                    }}
                >
                    {todo.Completed ? "Completed" : "Mark as Completed"}
                </button>
            </div>
        })}

    </div>
}