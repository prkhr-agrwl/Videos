import React from "react";

class VideoDetail extends React.Component {
	render() {
		if (!this.props.video) {
			return (
				<div>
					<div class="ui segment">
						<p></p>
						<div class="ui active inverted dimmer">
							<div class="ui loader"></div>
						</div>
					</div>
				</div>
			);
		}
		const videoSnippet = this.props.video.snippet;
		const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
		return (
			<div>
				<div className="ui embed">
					<iframe title="video-player" src={videoSrc} />
				</div>
				<div className="ui inverted segment">
					<h4 className="ui header">{videoSnippet.title}</h4>
					<p className="content">{videoSnippet.description}</p>
				</div>
			</div>
		);
	}
}

export default VideoDetail;
