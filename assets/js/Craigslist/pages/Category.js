import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import qs from 'query-string'

class Category extends Component {
  
    state = {
        min_price: 1000,
        max_price: 15000,
        sort_dropdown: 'newest',
        view_select: 'gallery'
    };

    componentWillMount(){
        const {match, history} = this.props
        const queryParams = qs.parse(this.props.location.search)
        const {min_price, max_price, sort_dropdown, view_select} = queryParams

        if( queryParams.min_price != undefined ) {
            // Get request comes from URL after destructuring queryParams object above
            axios.get(`/api/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort_dropdown=${sort_dropdown}&view_select=${view_select}`)
            .then((response) => {
                this.setState({
                    itemsData: response.data
                }, () => {
                    console.log(this.state)
                });
            })
            .catch((error)=> {
                console.log(error);
            });
        } else {
            // Make a request for a user with a given ID
            axios.get(`/api/${match.params.city}/${match.params.category}`)
            .then((response) => {
                this.setState({
                    itemsData: response.data
                }, () => {
                    console.log(this.state)
                });
            })
            .catch((error)=> {
                console.log(error);
            });
        }

    }

    loopItems = () => {
        const {match, history} = this.props
        if(this.state.itemsData != undefined) {
            return this.state.itemsData.map( ( item, index ) => {
                return(
                    <Link key={index} to={`/${match.params.city}/${match.params.category}/${match.params.listings}/${match.params.item}`} className={'item'}>
                        <div  className={'image'} style={{
                            backgroundImage: `url('${item.images[0]}')`
                        }}>
                        <div className={'item-price'}>${item.price}</div>
                        Image</div>
                        <div className={'details'}>
                            <i className={'far fa-star'}></i>
                            <h5>{item.title}</h5>
                            <h6>{item.city}</h6>
                        </div>
                     </Link>
                )
            })
        }
    }

    showMakeAndModelDropDown = () => {
        // destructuring this.props object by creating variables
        const { match, location, history } = this.props
        if(match.params.listings == 'cars-and-trucks') {
            return (
                <div className={'make-model-component'}>
                    <div className={'form-group car-make'}>
                        <label>Make</label>
                        <select name={'car_make'} className={'car-make'} onChange={this.handleChange}>
                            <option value={'bmw'}>bmw</option>
                            <option value={'mercedes'}>mercedes benz</option>
                            <option value={'nissan'}>Nissan</option>
                        </select>
                    </div>

                    <div className={'form-group car-model'}>
                        <label>Model</label>
                        <select name={'car_model'} className={'car-model'} onChange={this.handleChange}>
                            <option value={'M6'}>M6</option>
                            <option value={'X6'}>M6</option>
                            <option value={'c-series'}>C-series</option>
                        </select>
                    </div>
                </div>
            )
        }     
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = (e.target.type == 'checkbox') ? e.target.checked : e.target.value

        this.setState({
            [name]: value
        }, () => {
            console.log(this.state)
        })
    }

    submitFilters = () => {
        const { match, location, history } = this.props
        const {min_price, max_price, sort_dropdown, view_select} = this.state
        // history.push(`/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort_dropdown=${sort_dropdown}&view_select=${view_select}`)
        const queryParams = qs.parse(this.props.location.search)
        document.location.href = `/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort_dropdown=${sort_dropdown}&view_select=${view_select}`   

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
                            <select name={'min_price'} value={this.state.min_price} className={'min-price'} onChange={this.handleChange}>
                                <option value={'0'}>0</option>
                                <option value={'5000'}>5000</option>
                                <option value={'10000'}>10000</option>
                                <option value={'20000'}>20000</option>
                                <option value={'30000'}>30000</option>
                                <option value={'40000'}>40000</option>
                                <option value={'50000'}>50000</option>
                                <option value={'60000'}>60000</option>
                                <option value={'70000'}>70000</option>
                                <option value={'80000'}>80000</option>
                                <option value={'90000'}>90000</option>

                            </select>
                            <select name={'max_price'} value={this.state.max_price} className={'max-price'} onChange={this.handleChange}>
                                <option value={'5000'}>5000</option>
                                <option value={'10000'}>10000</option>
                                <option value={'20000'}>20000</option>
                                <option value={'30000'}>30000</option>
                                <option value={'40000'}>40000</option>
                                <option value={'50000'}>50000</option>
                                <option value={'60000'}>60000</option>
                                <option value={'70000'}>70000</option>
                                <option value={'80000'}>80000</option>
                                <option value={'90000'}>90000</option>
                                <option value={'100000'}>100000</option>
                            </select>
                        </div>
                    </div>

                    {this.showMakeAndModelDropDown()}

                    <div className={'form-group button'}>
                        <div className={'update-btn'} onClick={this.submitFilters}>Update</div>
                        <div className={'reset-btn'}>Reset</div>
                    </div>

                    </section>
                </div>
                <section id={'list-view'}>
                    <div className={'container'}>
                        <div className={'white-box'}>
                        <section className={'change-view'}>
                            <div className={'form-group view-dropdown'}>
                                <select name={'view_select'} value={this.state.view_select} className={'view-select'} onChange={this.handleChange}>
                                    <option value={'gallery'}>Gallery View</option>
                                    <option value={'list'}>List View</option>
                                    <option value={'thumb'}>Thumb View</option>
                                </select>
                            </div>
                            <div className={'form-group sort-dropdown'}>
                                <select name={'sort_dropdown'} value={this.state.sort_dropdown} className={'sort-dropdown'} onChange={this.handleChange}>
                                    <option value={'newest'}>Newest</option>
                                    <option value={'oldest'}>Oldest</option>
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

export default Category;