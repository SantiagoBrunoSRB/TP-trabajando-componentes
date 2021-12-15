import React from "react";
//propTypes
import propTypes from "prop-types";

function LastMovieInDb(props) {
    return (
        props.item.map((movie, id) => {
            return <div key={id+1} className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={props.image} alt=" Star Wars - Mandalorian " />
                        </div>
                        <p>{movie.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                    </div>
                </div>
            </div>

        })
    )
}

LastMovieInDb.propTypes = {
    description: propTypes.string.isRequired,
    image: propTypes.string.isRequired
}

LastMovieInDb.defaultProps = {
    description: "not description",
    image: "not found."
}

export default LastMovieInDb;