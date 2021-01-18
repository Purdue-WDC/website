import * as React from "react"
import Layout from "../components/Layout/Layout"
import {Link} from 'gatsby'
import Navbar from './../components/Navbar/Navbar';
// markup
const IndexPage = () => {
  
  return (
    <Layout>
      <Navbar></Navbar>
      <Link to="/StylingSheet/StylingSheet">Styling Sheet</Link>
    </Layout>
  )
}

export default IndexPage
