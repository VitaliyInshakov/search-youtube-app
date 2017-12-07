import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const VideoPage = (props) => {
  return (
    <div className='container'>
      <div className='row row--center-align'>
        <div className='col-md-12'>
          <Link to="/" className='btn btn-primary'>Home</Link>
        </div>
        <div className='col-md-10'>
          <div className='embed-responsive embed-responsive-16by9'>
            <iframe
              title={props.movie.snippet.title}
              className='embed-responsive-item'
              src={`https://www.youtube.com/embed/${props.movie.id.videoId}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies.find(movie => movie.id.videoId === ownProps.match.params.id)
  }
}
export default connect(mapStateToProps)(VideoPage);