import React from 'react';
import Layout from '../../components/Layout/Layout'
import VerticalNavbar from '../../components/StylingSheet/VerticalNavbar/VerticalNavbar'
import Navbar from './../../components/Navbar/Navbar';
export default function StylingSheet(props) {
    return(
        <div style={{backgroundColor: "#F4F5FA"}}>
        <Navbar></Navbar>
            <div style={{display: "flex", flexDirection: "row"}}>
            <VerticalNavbar></VerticalNavbar>
            <div >
        <h1>Text</h1>
        <p> Font: </p>
        <p> p, _ px</p>
        <h6>h6, _ px</h6>
        <h5>h5, _ px</h5>
        <h4>h4, _ px</h4>
        <h3>h3, _ px</h3>
        <h2>h2, _ px</h2>
        <h1>h1, _ px</h1>

        <h1>Buttons</h1>
        </div>
        </div>
        </div>
        
    )
}