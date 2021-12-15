import React from "react";
import propTypes from "prop-types";
//Components

function GenresInDb(props) {
	return (

		props.items.map((genre, id) => {
			return <div key={id+1} className="col-lg-6 mb-4">
				<div className="card bg-dark text-white shadow">
					<div className="card-body">
						{genre}
					</div>
				</div>
			</div>

		})
	)
}

GenresInDb.propTypes = {
	title: propTypes.string.isRequired
}

GenresInDb.defaultProps = {
	title: "Not found"
}

export default GenresInDb;