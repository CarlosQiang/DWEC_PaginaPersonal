'use client';

import React, { useEffect } from "react";
import { gsap } from 'gsap';

const Cursor = () =>{
    useEffect(()=>{

        const cursor = document.getElementById('custom-cursor');
        const links  = document.querySelectorAll('a');
        const cursorText = document.querySelector('.cursor-text');

        const OnMouseMove = (event) =>{
            const { clientX, clientY } = event;
            gsap.to(cursor,{x:clientX, y:clientY})
        }

        const OnMouseEnterLink = (event) =>{
            const link = event.target;
            if(link.classList.contains('view')){
                gsap.to(cursor,{scale:4});
                cursorText.style.display = 'block';  
            }else{
                gsap.to(cursor,{scale:4});
            }
        }

        const OnMouseLeaveLink = (event) =>{
            gsap.to(cursor,{scale:1});
            cursorText.style.display = 'none';
        }

        document.addEventListener('mousemove',OnMouseMove);
        links.forEach((link) =>{
            link.addEventListener('mousemove',OnMouseEnterLink);
            link.addEventListener('mousemove',OnMouseLeaveLink);

        })
    })
    return (
        <div id="custom-cursor" className="custom-cursor">
            <span className="cursor-text">View</span>
        </div>
    )
}

export default Cursor;