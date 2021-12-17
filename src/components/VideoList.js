import { Grid } from '@mui/material';
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {

    const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video} onVideoSelect={onVideoSelect}/>)
    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList;
