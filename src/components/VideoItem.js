import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
	render() {
		const onVideoSelect = this.props.onVideoSelect;
		const videoSnippet = this.props.video.snippet;
		return (
			<div
				onClick={e => onVideoSelect(this.props.video)}
				className="video-item item"
			>
				<img
					className="ui image"
					alt={videoSnippet.description}
					src={videoSnippet.thumbnails.medium.url}
				/>
				<div className="content">
					<div className="header">{videoSnippet.title}</div>
				</div>
			</div>
		);
	}
}

export default VideoItem;
