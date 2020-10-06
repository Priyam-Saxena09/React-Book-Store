import React from "react"

const tex = (props) => {
    return (
        <div class="form-group">
            <label for={props.id}><h3>{props.name}</h3></label>
            <textarea onChange={props.takeval} class="form-control" id={props.id} rows="7" required />
        </div>
    )
}

export default tex