import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <>
       <section className="login">
        <div className="containers">
            <div className="backImg">
                <img src={back} alt="" />
                <div className="text">
                    <h3>Login</h3>
                    <h1>My Account</h1>
                </div>
            </div>
            <form>
                <span>Username or email adress*</span>
                <input type="text" required />
                <span>Password*</span>
                <input type="password" required />
                <button className="button">Log In</button>
                <Link to="/register">Register</Link>
            </form>
        </div>

       </section>
    </>
  )
}