import React from "react"
import "./header.css"
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom"
import { nav } from "../../assets/data/data"
import User from "./User"

export default function Header() {
  return (
    <>
        <header>
            <div className="container flex">
                <div className="logo">
                    <img src={logo} alt="logo" width="100px" />
                </div>
                <nav>
                    <ul>
                        {nav.map((link) => (
                            <li key={link.id}>
                                <Link to={link.url}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="account flexCenter">
                    <User />
                </div>
            </div>
        </header>
    </>
  )
}