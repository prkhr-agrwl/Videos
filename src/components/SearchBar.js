import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui inverted segment" style={{ marginTop: "10px" }}>
				<form className="ui inverted form" onSubmit={this.onFormSubmit}>
					<div className="ui field">
						<label>Video Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
					<button className="ui primary button">
						<i className="search icon"></i>
					</button>
				</form>
			</div>
		);
	}
}

export default SearchBar;
