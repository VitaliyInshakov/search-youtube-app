import React, {Component} from 'react';

const ENTER_KEY = 13;

export default class Search extends Component {
  handleKeyDown(e) {
    if(e.keyCode === ENTER_KEY) {
      this.props.onSearchVideo(this.input.value)
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className="input-group">
            <input type="text"
              className="form-control"
              placeholder="Search video"
              ref={c => this.input = c}
              onKeyDown={this.handleKeyDown.bind(this)}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-primary"
                type="button"
                onClick={()=>this.props.onSearchVideo(this.input.value)}>
                  Search
              </button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}