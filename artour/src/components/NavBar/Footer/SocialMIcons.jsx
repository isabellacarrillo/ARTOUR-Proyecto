import React from 'react'

export default function SocialIcons
() {
  const Icons=[
    {name: "logo-facebook", link:"https://www.unimet.edu.ve/wp-content/uploads/2018/07/iconfacebook-e1531851679178.png"},
    {name: "logo-twitter", link: "https://www.unimet.edu.ve/wp-content/uploads/2018/07/iconTwitter-e1531851377335.png"},
    {name: "logo-instagram", link: "https://www.unimet.edu.ve/wp-content/uploads/2018/07/iconInstagram.png"},
    {name: "logo-youtube", link: "https://www.unimet.edu.ve/wp-content/uploads/2018/07/iconYouTube-e1531851392141.png"},
    {name: "logo-linkedin", link: "https://www.unimet.edu.ve/wp-content/uploads/2018/07/iconLinkedin-e1531851407860.png"},
  ]
  return (
    <div className= "text-orange ps-6">
    {Icons.map((icon)=>(
        <span key={icon.name}
        className= "p-3 cursor-pointer inline-flex items-center rounded-full bg-blue mx-1.5 text-x1 hover:bg-orange duration-300">       
       </span>
    ))}
    {Icons.map((link)=>(
        <a href={link.link} key={link.name}></a>
    ))}

    </div>
  )
}
