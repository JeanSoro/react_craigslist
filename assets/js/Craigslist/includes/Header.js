import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


class Header extends Component {
  
    state = {
      cityDropDownMenu: false,
      selectedCity: 'Montreal',
      citiesData: []
    }

    
    componentWillMount() {
      // Make a request for a user with a given ID
      axios.get(`/api/cities`)
      .then(( response ) => {
        const {match, history} = this.props
        let city = response.data.filter( ( item ) => {
          return item.slug == match.params.city
        })
          this.setState({
              citiesData: response.data,
              selectedCity: city[0].title
          }, () => {

                document.body.style.backgroundImage = 
                `linear-gradient(135deg, rgba(52,69,247,.8) 0%, 
                rgba(160,39,230,.8) 100%), url(${city[0].img})`
              // console.log(this.state.citiesData)
          });
      })
      .catch(( error ) => {
          console.log(error);
      });
    }

    

    CityDropDownBtn = () => {
      const {cityDropDownMenu} = this.state
      this.setState({
        cityDropDownMenu: !cityDropDownMenu
      })
    }

    selectACity = (city) => {
      this.setState({
        selectedCity: city
      }, () => {
        const {citiesData} = this.state
        let city = citiesData.filter( ( item ) => {
          return item.title === this.state.selectedCity
        })
        const {match, history} = this.props
            history.push(`/${city[0].slug}`)
      })
    }

    citiesLoop = () => {
      const {citiesData} = this.state
      return citiesData.map(( item, index ) => {
        return (
          <li 
            key={index} 
            onClick={this.selectACity.bind(null, item.title)}>{item.title}
          </li>
        )
      })
    }
  

  render () {
    const {cityDropDownMenu, selectedCity} = this.state;
    return (
        <div className={'container'}>
          <header>
            <div className={'left-menu'}>
              <div className={'logo'}>Craigslist</div>
              <div className={'city-dropdown'} onClick={this.CityDropDownBtn}>{selectedCity}
                <i className={`fas fa-chevron-down ${(cityDropDownMenu) ? 'fa-chevron-up': 'fa-chevron-down'}`}/>
                <div className={`scroll-area ${(cityDropDownMenu) ? 'active': ''}`}>
                  <ul>
                    {this.citiesLoop()}
                  </ul>
                </div>
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