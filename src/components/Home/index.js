import {Component} from 'react'
import RenderMessage from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  onClickButton = () => {
    console.log('button clicked')
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <RenderMessage isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <Login onClickLogin={this.onClickButton} />
        ) : (
          <Logout onClickLogout={this.onClickButton} />
        )}
      </div>
    )
  }
}

export default Home
