import React from "react"
import { Link } from "react-router-dom"
import { RiImageAddLine } from "react-icons/ri"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { useState } from "react"

export default function User() {

  const user = true

  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(false)
  }

  return (
    <>
      <div className="profile">
        {user ?
        (
          <>
        <button 
        className="img"
        onClick={() => setProfileOpen(!profileOpen)}>
          <img src="https://images.pexels.com/photos/2076596/pexels-photo-2076596.jpeg" alt="" />
        </button>
      
    {profileOpen && (
      <div 
      className="openProfile boxItems"
      onClick={close}>
        <Link to="account">
          <div className="image">
            <div className="img">
              <img src="https://images.pexels.com/photos/2076596/pexels-photo-2076596.jpeg" alt="" />
            </div>
            <div className="text">
              <h4>Eden Smith</h4>
              <p>Los Angeles, CA</p>
            </div>
          </div>
        </Link>
        <Link to="/create">
          <button className="box">
            <RiImageAddLine className="icon" />
            <h4>Create Post</h4>
          </button>
        </Link>
          <button className="box">
            <IoSettingsOutline className="icon" />
            <h4>My account</h4>
          </button>
          <button className="box">
            <BsBagCheck className="icon" />
            <h4>My order</h4>
          </button>
          <button className="box">
            <AiOutlineHeart className="icon" />
            <h4>Wishlist</h4>
          </button>
          <button className="box">
            <GrHelp className="icon" />
            <h4>Help</h4>
          </button>
          <button className="box">
            <BiLogOut className="icon" />
            <h4>Log Out</h4>
          </button>
      </div>
    )}
          </>
        ) : (<Link to="/login">
          <button>My account</button>
        </Link>)}
      </div>
    </>
  )
}