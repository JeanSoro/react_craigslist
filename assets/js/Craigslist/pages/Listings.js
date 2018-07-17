import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Listings extends Component {
  
    state = {
      name: 'Jean'
    }

    loopItems = () => {
        let testArray = [1,2,3,4,5,6,7,8]
        return testArray.map( ( category, index ) => {
            return(
                <div key={index} className={'item'}>
                    <div className={'image'}>
                    <div className={'item-price'}>$10.000</div>
                    Image</div>
                    <div className={'details'}>
                        <i className={'far fa-star'}></i>
                        <h5>2017 BMW M</h5>
                        <h6>Toronto</h6>
                    </div>
                </div>
            )
        })
      }
  
  render () {
      // destructuring this.props object by creating variables
    const { match, location, history } = this.props
    return (
        <div className={'listings-page'}>
            <div className={'container'}>
                <section id={'filters'}>
                    <div className={'form-group price'}>
                        <label>Price</label>
                        <div className={'min-max'}>
                            <select name={'min-price'} className={'min-price'}>
                                <option value={'0'}>0</option>
                            </select>
                            <select name={'max-price'} className={'max-price'}>
                                <option value={'1000'}>1000</option>
                            </select>
                        </div>
                    </div>
                    <div className={'form-group car-make'}>
                        <label>Make</label>
                        <select name={'car-make'} className={'car-make'}>
                            <option value={'bmw'}>bmw</option>
                        </select>
                    </div>

                    <div className={'form-group car-model'}>
                        <label>Model</label>
                        <select name={'car-model'} className={'car-model'}>
                            <option value={'M6'}>M6</option>
                        </select>
                    </div>

                        <div className={'form-group button'}>
                            <div className={'update-btn'}>Update</div>
                            <div className={'reset-btn'}>Reset</div>
                        </div>

                    </section>
                </div>
                <section id={'list-view'}>
                    <div className={'container'}>
                        <div className={'white-box'}>
                        <section className={'change-view'}>
                            <div className={'form-group view-dropdown'}>
                                <select name={'view-select'} className={'view-select'}>
                                    <option value={'gallery'}>Gallery View</option>
                                    <option value={'list'}>List View</option>
                                    <option value={'thumb'}>Thumb View</option>
                                </select>
                            </div>
                            <div className={'form-group sort-dropdown'}>
                                <select name={'sort-dropdown'} className={'sort-dropdown'}>
                                    <option value={'newest'}>Newest</option>
                                </select>
                            </div>
                        </section>
                        <section className={'all-items'}>
                            {this.loopItems()}
                        </section>
                    </div>
                </div>
            </section>
        </div>
      )
  }
}

export default Listings;