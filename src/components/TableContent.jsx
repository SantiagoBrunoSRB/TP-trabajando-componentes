import React from "react";
import propTypes from "prop-types";

function TableContent (props){

        return(
            <tbody>
                {props.items.map((movie, id) => {
                    return <tr key={id}>
                        <td>{movie.title}</td>
                        <td>{movie.length}</td>
                        <td>{movie.rating}</td>
                        <td>
                            <ul>
                            {movie.genres.map((genre, id) => {
                            return <li key={id}>{genre}</li>
                        })}
                            </ul> 
                        </td>
                        <td>{movie.awards}</td>
                    </tr>
                })}
            </tbody>
        )
}

TableContent.propTypes = {
    title: propTypes.string,
    length: propTypes.string,
    rating: propTypes.string,
    genres: propTypes.array,
    awards: propTypes.number
}

TableContent.defaultProps = {
    title: "untitled",
    length: "0",
    rating: "0",
    genres: ["not found"],
    awards: 0

}

export default TableContent;