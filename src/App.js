import React from 'react'
import { Grid } from '@mui/material';

import { SearchBar, VideoDetail, VideoList} from './components'
import youtube from './api/youtube'

class App extends React.Component {
    

    state= {
        videos:[], 
        selectedVideo: null, 
    }
    handleSubmit = async (searchTerm) => {
        const res = await youtube.get('search', {params: {q:searchTerm}})
        console.log(res.data.items)

        this.setState({
            videos: res.data.items,
            selectedVideo:res.data.items[0]
        })
    } 

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo:video
        })
    }

    render() {

        const {selectedVideo} = this.state
        const { videos } = this.state

        return(
            <Grid  container spacing={16}>
                <Grid item xs={12}>
                  <SearchBar onFormSubmit = {this.handleSubmit}/>
                </Grid>
    
                <Grid item xs={8}>
                   <VideoDetail video = {selectedVideo}/>
                </Grid>
    
                <Grid item xs={4}>
                   <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                </Grid>
    
            </Grid>
        )

    }
   
}

export default App;