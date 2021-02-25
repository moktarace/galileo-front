import * as React from "react";

class VideoProps {
    constructor(public link: string) { }
}
class Video extends React.Component<VideoProps, any> {

    public getVideoId() {
        if (this.props.link) {
            return this.props.link.split('/').pop();
        }
        return '';
    }

    public getVideoLink() {
        return 'https://www.youtube-nocookie.com/embed/'
            + this.getVideoId()
            + '?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1';
    }

    public render() {
        return <iframe src={this.getVideoLink()} width="1920" height="1080" uk-responsive="true"></iframe>;
    }
}

export default Video;
