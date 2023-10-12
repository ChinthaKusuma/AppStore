// Write your code here
import './index.css'

const TabItem = props => {
  const {item, onChange2, isActive} = props
  const {tabId, displayText} = item
  const active1 = isActive === true ? 'class2' : ''
  const onChange1 = () => {
    onChange2(tabId)
  }
  return (
    <li>
      <button className={`btn1 ${active1}`} type="button" onClick={onChange1}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
