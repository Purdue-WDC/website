import React from 'react';
import Button from '../../button/Button';
import "./VerticalNavbar.scss"
export default function VerticalNavbar(props) {

    return (
            <div class="vn-container">
            <Button  text="Layout" style={{paddingLeft: "90px", paddingRight: "90px"}}></Button>
            <Button class="button" text="Components"></Button>
            <Button class="button" style= {{color:"#FFCE42", borderLeft: "2px solid yellow", fontWeight: "bold" }}text="Animations"></Button>
            <Button  class="button" text="Fade In"></Button>
            <Button  class="button" text="Text"></Button>
            <Button  class="button" text="Title"></Button>
            <Button  class="button" text="Card"></Button>
            <Button  class="button" text="Grid"></Button>
            <Button  class="button" text="Header"></Button>
            <Button  class="button" text="Footer"></Button>
            <Button  class="button" text="Banner"></Button>
            <Button  class="button" text="Dropdown"></Button>
</div>

    )

}