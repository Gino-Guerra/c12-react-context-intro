import { UserContext } from "../App"

import { useContext } from "react"


export default function Footer(){
const userInfo = useContext(UserContext)
const d = new Date()
const year = d.getFullYear()
    return(
        <footer>
        <small>id {userInfo._id} Copyright © flawless co. {year} reserving </small>
        </footer>
    )
}