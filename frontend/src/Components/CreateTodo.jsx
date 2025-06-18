import { useState } from 'react'
export function CreateTodo({ setTodos }) {
    const [t, setTitle] = useState("")
    const [d, setDescription] = useState("")
    return <div>
        <input type="text" placeholder="title" onChange={function (e) {
            let ct = e.target.value
            setTitle(ct)
        }}></input>
        <input type="text" placeholder="description" onChange={function (e) {
            let cd = e.target.value
            setDescription(cd)
        }}></input>
        <button onClick={async () => {
            await fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: t,
                    description: d
                }),
                headers: {
                    "Content-Type": "Application/json"
                }
            })
            fetch("http://localhost:3000/todos")
                .then(async (res) => {
                    const data = await res.json();
                    setTodos(data);
                })
        }}>Add a todo</button>
    </div>
}