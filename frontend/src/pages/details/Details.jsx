import React from "react"
import "./details.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { blog } from "../../assets/data/data";
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"

export default function Details() {
    const {id} = useParams();

    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        let blogs = blog.find((blogs) => blogs.id === parseInt(id))

        if(blogs) {
            setBlogs(blogs)
        }
    }, [])

  return (

    <>
    {blogs ? (

   
        <section className="singlePost">
            <div className="container">
                <div className="left">
                    <img src={blogs.cover} alt="" />
                </div>
                <div className="right">
                    <div className="buttons">
                        <button className="button">
                            <BsPencilSquare />
                        </button>
                        <button className="button">
                            <AiOutlineDelete />
                        </button>
                    </div>
                    <h1>{blogs.title}</h1>
                    <p>{blogs.desc}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquam eveniet debitis a? Repellendus voluptatum sequi ducimus aliquid possimus soluta explicabo iste excepturi, cupiditate dignissimos ipsam dolor esse. Aliquid dolores repellat iure saepe deserunt! Quia quisquam voluptates nihil dolor aliquid rerum error culpa mollitia, veniam veritatis. Qui reiciendis vitae quas?</p>
                </div>
            </div>
        </section> ) :null}
    </>
  )
}