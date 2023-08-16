import React from "react";
import './paginationButtons.css'

const PaginationButton = (props) => {

    return (

        <button className={props.className} id={props.id} value={props.value} onClick={props.onClick} >{props.text}</button>
    )
}
export default PaginationButton;