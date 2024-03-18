import './index.css'

const SuggestionItem = props => {
  const {suggest} = props
  const {suggestion} = suggest
  return (
    <li className="list">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-custom"
      />
    </li>
  )
}

export default SuggestionItem
