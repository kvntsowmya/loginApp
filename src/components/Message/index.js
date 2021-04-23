import './index.css'

const RenderMessage = props => {
  const {isLoggedIn} = props
  if (isLoggedIn) {
    return <h1 className="message">Please Login</h1>
  }
  return <h1 className="message">Welcome User</h1>
}

export default RenderMessage
