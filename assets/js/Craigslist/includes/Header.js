import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Header extends Component {
  
    state = {
      name: 'Joe'
    }
  
  clickedBtn = () => {
    console.log('swag')
  }

  render () {
    return (
        <div className={'container'}>
          <header>
            <div className={'left-menu'}>
              <div className={'logo'}>Craigslist</div>
              <div className={'city'}>Montreal
                <i className={`fas fa-chevron-down`}></i>
            </div>
            </div>
            <div className={'right-menu'}>
              <div className={'user-img'}>img</div>
              <div className={'user-dropdown'}>my account 
                <i className={`fas fa-chevron-down`}></i>
            </div>
            <div className={'post-btn'}>post to classifieds</div>
            </div>
          </header>
        </div>
      )
  }
}

export default Header;