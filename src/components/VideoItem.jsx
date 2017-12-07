import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux'
import { bindActionCreators } from 'redux'

const VideoItem = (props) => {
  return (
    <li className='media my-3' onClick={() => props.changePage(props.video.id.videoId)}>
      <img
        className='mr-3'
        src={props.video.snippet.thumbnails.default.url}
        alt={props.video.snippet.title}
      />
      <div className='media-body'>
        <h5 className='mt-0 mb-1'>{props.video.snippet.title}</h5>
        {props.video.snippet.description}
      </div>
    </li>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changePage: (url) => push(`/movie/${url}`)
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(VideoItem);