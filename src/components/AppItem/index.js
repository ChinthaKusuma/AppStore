// Write your code here
import './index.css'

const AppItem = props => {
  const {item} = props
  const {appName, imageUrl} = item
  return (
    <li className="li2">
      <img src={imageUrl} className="img2" alt="one" />
      <h1 className="heading">{appName}</h1>
    </li>
  )
}
export default AppItem
