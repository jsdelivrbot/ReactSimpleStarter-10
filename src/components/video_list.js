import React from 'react'
import VideoListItem from './video_list_item'


const VideoList = props =>
  <ul className="col-md-4 list-group">
    {
      props.videos.map((video, key) =>
        <VideoListItem onVideoSelect={props.onVideoSelect} video={video} key={video.etag}/>)
    }
  </ul>


export default VideoList;
