import { useContext } from "react"
import { UserContext } from "../App"
import { useState } from "react"

export default function Login() {
    const userInfo = useContext(UserContext)
const [userState, setUserState] = useState({})

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log('formData ->', formData)
        setUserState(formData)
    }
console.log('userInfo in Login ->', userState)


    return (
        <form action="submit" onSubmit={handleFormSubmit}>
            <label htmlFor="email">
                Email:
                <input type="text" name="email"  />
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" name="password"/>
            </label>
            <button type="Submit">
                Login
            </button>
        </form>
    )
}