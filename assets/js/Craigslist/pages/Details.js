import React, { Component} from 'react'
import ReactDOM from 'react-dom'

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
                <section className={'sub-menu'}>
                    <div className={'direction'}>
                        <div className={'prev'}>Prev</div>
                        <div className={'next'}>Next</div>
                    </div>
                    <nav className={'sub-links'}>
                        <a href={'#'}>More Ads by User</a>
                        <a href={'#'}>Print</a>
                        <a href={'#'}>Share</a>
                        <a href={'#'}>Contact Seller</a>
                    </nav>
                </section>

                <section>
                    <div className={'display-column'}>
                        <div className={'display-gallery'}>
                            <div className={'image-slider'}>
                                <div className={'main-image'}>
                                    <div className={'left-arrow-btn'}>
                                        {'<'}
                                    </div>
                                    <div className={'right-arrow-btn'}>
                                        {'>'}
                                    </div>
                                </div>
                            </div>
                            <div className={'thumbnails'}>
                                <div className={'thumbnail-img'}>Image</div>
                            </div>
                        </div>
                    </div>
                    <div className={'detail-column'}>
                        <div className={'date-posted'}>Posted: Jan 12th</div>
                        <h3>Black 2016 BMW M</h3>
                        <h4 className={'cost'}>Black 2016 BMW M</h4>
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
                        </div>
                        <div className={'description'}>
                            <p>This is the description ting</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
      )
  }
}

export default Details;