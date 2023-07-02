import React from 'react'

export default function SocialIcons
() {
  const Icons=[
    {name: "logo-facebook", link:""},
    {name: "logo-twitter", link: ""},
    {name: "logo-instagram", link: ""},
    {name: "logo-youtube", link: ""},
    {name: "logo-linkedin", link: ""},
  ]
  return (
    <div className= "text-orange ps-6">
        <span 
        className= "p-0.1 cursor-pointer object-contain inline-flex items-center rounded-full bg-blue mx-1.5 text-x1 hover:bg-orange duration-300">   
          
       </span>
    {Icons.map((link)=>(
        <a href={link.link} key={link.name}></a>
    ))}

    </div>
  )
}
