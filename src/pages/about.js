import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About(){
  return(
    <div style={{ color: 'teal'}}>
      <Link to="/contact/">Contact</Link>
      <h1>About Gatsby</h1>
      <Header headerText="About you" />
      <Header headerText="Its pretty cool" />
      <p>Such Wow. Very React</p>
    </div>
  )
}
