import React from 'react'
import './textFadeIn.scss';

export default function TextFadeIn(props) {

    return (
        <div class="fade-in">
            {props.children}
        </div>
    )
}