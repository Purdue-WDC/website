import React from 'react';
import './card.scss';
export default function Card(props) {

    return (
        <div class="card">
            <div class="card-title">{props.title}</div>
            <div class="card-description"> {props.description}</div>
            {props.children}
        </div>
    )
}