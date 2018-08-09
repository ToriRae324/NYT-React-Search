import React from "react";


const ResultItem = (props) => (
    
    <ul>
        <li>web_url:{props.url} </li>
        <li>headline:{props.headline} </li>
        <li>pub_date:{props.date} </li>
    </ul>

);

export default ResultItem;