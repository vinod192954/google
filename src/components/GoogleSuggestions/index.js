import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: '', suggestions: this.props.suggestionsList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, suggestions} = this.state
    const {suggestionsList} = this.props

    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="googlelogo"
            className="img-custom"
          />
        </div>

        <div>
          <ul className="card-conatiner">
            <div className="input-custom">
              <input
                type="search"
                placeholder="Search Google"
                className="input-element"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-img"
              />
            </div>

            {suggestionsList.map(suggestion => (
              <SuggestionItem suggest={suggestion} key={suggestion.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
