import React from "react";
import "./create.css"

export default function Create() {
  return (
    <>
    <section className="newPost">
        <div className="container boxItems">
            <div className="img">
                <img src="https://images.pexels.com/photos/2076596/pexels-photo-2076596.jpeg" alt="" />
            </div>
            <form>
                <div className="inputFile flexCenter">
                    <input type="file" />
                </div>
                <input type="text" placeholder="Title" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className="button">Create Post</button>
            </form>
        </div>
    </section>
    </>
  )
}