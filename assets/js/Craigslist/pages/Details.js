import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Gallery from './components/Gallery'

class Details extends Component {
  
    state = {
      name: 'Jean'
    }
  

  render () {
      // destructuring this.props object by creating variables
    const { match, location, history } = this.props
    return (
        <div className={'details-page'}>
            <div className={'container'}>
                <div className={'white-box'}>
                <section className={'sub-menu'}>
                    <div className={'direction'}>
                        <a className={'prev'} href={'#'}>Prev</a>
                        <a className={'next'} href={'#'}>Next</a>
                    </div>
                    <nav className={'sub-links'}>
                        <a href={'#'}>More Ads by User</a>
                        <a href={'#'}>Print</a>
                        <a href={'#'}>Share</a>
                        <a href={'#'}>Contact Seller</a>
                    </nav>
                </section>

                <section className={'content-area'}> 
                    <div className={'display-column'}>
                        <Gallery/>
                    </div>
                    <div className={'detail-column'}>
                        <div className={'date-posted'}>Posted: Jan 12th</div>
                        <h3 className={'title'}>Black 2016 BMW M</h3>
                        <h4 className={'cost'}>$56,000</h4>
                        <div className={'car-features'}>
                            <div className={'info'}>
                                <label>Vin</label>
                                <h5>wueufhfhg</h5>
                            </div>
                            <div className={'info'}>
                                <label>Mileage</label>
                                <h5>5675</h5>
                            </div>
                            <div className={'info'}>
                                <label>Transmission</label>
                                <h5>6-Speed Automatic</h5>
                            </div>
                            <div className={'info'}>
                                <label>Vin</label>
                                <h5>wueufhfhg</h5>
                            </div>
                            <div className={'info'}>
                                <label>Mileage</label>
                                <h5>5675</h5>
                            </div>
                            <div className={'info'}>
                                <label>Transmission</label>
                                <h5>6-Speed Automatic</h5>
                            </div>
                            <div className={'info'}>
                                <label>Vin</label>
                                <h5>wueufhfhg</h5>
                            </div>
                            <div className={'info'}>
                                <label>Mileage</label>
                                <h5>5675</h5>
                            </div>
                            <div className={'info'}>
                                <label>Transmission</label>
                                <h5>6-Speed Automatic</h5>
                            </div>
                        </div>
                        <div className={'description'}>
                            <label>Description</label>
                            <p>Lorem ipsum dolor amet la croix messenger bag seitan pabst polaroid sriracha skateboard cred succulents four loko woke paleo wolf gastropub. 
                            Yuccie flexitarian locavore DIY vinyl blog intelligentsia +1. Flannel beard hexagon truffaut vape hashtag, actually franzen jean shorts vinyl migas pop-up crucifix. 
                            Whatever raclette 3 wolf moon fanny pack ugh echo park succulents.</p>

                            <p>Lorem ipsum dolor amet la croix messenger bag seitan pabst polaroid sriracha skateboard cred succulents four loko woke paleo wolf gastropub. 
                            Yuccie flexitarian locavore DIY vinyl blog intelligentsia +1. Flannel beard hexagon truffaut vape hashtag, actually franzen jean shorts vinyl migas pop-up crucifix. 
                            Whatever raclette 3 wolf moon fanny pack ugh echo park succulents.</p>

                            <p>Lorem ipsum dolor amet la croix messenger bag seitan pabst polaroid sriracha skateboard cred succulents four loko woke paleo wolf gastropub. 
                            Yuccie flexitarian locavore DIY vinyl blog intelligentsia +1. Flannel beard hexagon truffaut vape hashtag, actually franzen jean shorts vinyl migas pop-up crucifix. 
                            Whatever raclette 3 wolf moon fanny pack ugh echo park succulents.</p>

                        </div>
                    </div>
                 </section>
                </div>
            </div>
        </div>
      )
  }
}

export default Details;