import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuItem({display, path}){
  return (
    <div>
      <Link path={path}>
        <div>
          <h4>{display}</h4>
        </div>
      </Link>
    </div>
  )
}
