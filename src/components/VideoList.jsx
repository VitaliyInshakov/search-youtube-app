import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <ul className='list-unstyled'>
          {
            (!props.movies.length)
            ?
              <div>
                <h3>This is app like Youtube API Search videos</h3>
                <p>For search video, please, input query and push 'Search' or press Enter</p>
              </div>
            :
              props.movies.map(movie => {
                return <VideoItem video={movie} key={movie.etag} />
              })
          }
        </ul>
      </div>
    </div>
  )
}

export default VideoList;