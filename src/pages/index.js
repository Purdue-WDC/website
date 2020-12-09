import * as React from "react"
import Layout from "../components/Layout/Layout"
import Button from '../components/Button/Button'
import TextFadeIn from "../components/TextFadeIn/TextFadeIn"
// markup
const IndexPage = () => {
  return (

    <Layout>
      <TextFadeIn><p>hello</p></TextFadeIn>
    <Button class="button-main" text="button"></Button>
    <Button class="button-rectangle-purple" text="button"></Button>
     </Layout>
  )
}

export default IndexPage
