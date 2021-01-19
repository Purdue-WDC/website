import * as React from "react"
import Layout from "../components/Layout/Layout"
import {Link} from 'gatsby'
import Navbar from './../components/Navbar/Navbar';
import Card from "../components/Card/Card";
import Button from '../components/Button/Button'

const IndexPage = () => {
  
  return (
    <Layout>
      <Card title='Workshops' description='We organize workshops to teach students about various web technologies, ranging from frontend to server and database options to build websites. '>
        <Button class="button-default" text="See schedule"></Button>
      </Card>
      <Card title='Hack Nights' description='We meet once every week to work on personal projects, chat web development and learn more about tools and technologies we are passionate about.'>
        <Button class="button-default" text="Join us"></Button>
      </Card>
      <Card title='Challenges' description='We create monthly challenges based on what we cover in workshops and invite members to build websites to improve and showcase their skills.'>
        <Button class="button-default" text="See challenges"></Button>
      </Card>
      <Link to="/StylingSheet/StylingSheet">Styling Sheet</Link>
    </Layout>
  )
}

export default IndexPage
