import { useState } from "react"

export default function Form() {
    const [username, setUsername] = useState('enter username')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('test')
    }

    return (
        <form onSubmit={handleSubmit}>
            Username:
            <input type='text' value={username} onChange={(event) => {
                setUsername(event.target.value)
            }}/>
        </form>
    )
}