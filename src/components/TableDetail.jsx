import React from "react";
//components
import TableContent from "./TableContent.jsx";
//Data
import movies from "../data/movies.json";

function TableDetail() {
    
return (
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Length</th>
                <th>Rating</th>
                <th>Genre</th>
                <th>Awards</th>
            </tr>
        </thead>
            <TableContent items={movies}/>
    </table>
        )
}

export default TableDetail;