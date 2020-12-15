import * as React from "react"
import Layout from "../components/Layout/Layout"
import Button from '../components/Button/Button'
import FadeIn from "../components/FadeIn/FadeIn"
// markup
const IndexPage = () => {
  
  return (

    <Layout>
      <FadeIn><p>hello</p></FadeIn>
      <FadeIn><Button class="button-main" text="button" to="https://www.victoirebeaufils.me"></Button> </FadeIn>
    <Button class="button-rectangle-purple" text="button" to="https://www.victoirebeaufils.me"></Button>
     </Layout>
  )
}

export default IndexPage
