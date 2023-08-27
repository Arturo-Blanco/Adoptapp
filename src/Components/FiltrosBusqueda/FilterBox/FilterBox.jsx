import React from "react";

const FilterBox = (props) => {

    return (

        <div className="filter-box">
            <h4 className="filter-title">{props.title}</h4>
            {props.children}
        </div>
    )
}
export default FilterBox;