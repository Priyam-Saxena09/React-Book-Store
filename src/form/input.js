import React from "react"


const inp = (props) => {
    return (
        <div class="form-group mb-5">
            <label for={props.id}><h3>{props.name}</h3></label>
            <input onChange={props.takeval} type={props.type} class="form-control" id={props.id} required/>
        </div>
    )
}

export default inp