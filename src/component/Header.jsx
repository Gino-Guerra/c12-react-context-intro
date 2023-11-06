import { useContext } from "react"

import { UserContext } from "../App"
export default function Header(){
const {userState} = useContext(UserContext)





    return(
        <>
        <header>This is the header {userState.email}</header>
        </>
    )
}