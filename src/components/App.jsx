import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadVideoList} from '../actions/actions';
import Search from './Search';
import VideoList from './VideoList';

class App extends Component {
  handleSearchVideo(term) {
    this.props.loadVideoList(term);
  }

  render() {
    return (
      <div className='container'>
        <Search onSearchVideo={this.handleSearchVideo.bind(this)}/>
        <VideoList 
          movies={this.props.movies}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
    ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadVideoList
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);