import React from "react";


const ResultItem = (props) => (

    <div className="card border-info mb-3" >
        <div className="card-body">
            <h5 className="card-title">{props.headline}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Published: {props.date}</h6>
            <p className="card-text">{props.snippet}</p>
            <a href={props.url} className="card-link" target="_blank">Read Article</a>
            <br/>
            <button type="button" class="btn btn-light save-btn" 
            key={props._id} onClick={props.Article(props._id)}>
            {props.buttonText}
            </button>

        </div>
    </div>

);

export default ResultItem;