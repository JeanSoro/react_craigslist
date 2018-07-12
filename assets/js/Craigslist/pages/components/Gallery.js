import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Gallery extends Component {
  
    state = {
      allImages: '',
      currentImage: '',
      currentIndex: 0

    }

    componentWillMount() {
        const allImages = [ 
            'https://images.craigslist.org/00N0N_idugwYz2hRQ_600x450.jpg',
            'https://images.craigslist.org/00101_7LFMtwt3nCq_50x50c.jpg',
            'https://images.craigslist.org/00t0t_2mNCXwmIxBf_50x50c.jpg',
            'https://images.craigslist.org/00Q0Q_bHIBhunOdcn_50x50c.jpg',
            'https://images.craigslist.org/00u0u_h1lmzwHLqCO_50x50c.jpg',
            'https://images.craigslist.org/00z0z_8M6oeQER2YP_50x50c.jpg'
          ]

        this.setState({
            allImages,
            currentImage: allImages[this.state.currentIndex]
        })
    }

    loopCarImages = () => {
        console.log(this.state.allImages)
        return this.state.allImages.map((item, index) => {
            return (
                <div key={index} onClick={this.selectedImage.bind(null, index)} className={'thumbnail-img'} style={{
                    "backgroundImage": 
                        `url('${item}')`
                    }}>
                </div>
            )
         })
    }

    nextArrowBtn = () => {
        if(this.state.currentIndex !== ( this.state.allImages.length - 1 )) {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
        }  
    }

    previousArrowBtn = () => {
        if(this.state.currentIndex !== 0) {
            this.setState({
                currentIndex: this.state.currentIndex - 1
            })
        }
    }

    selectedImage = (index) => {
        this.setState({
            currentIndex: index
        })
    }
  

  render () {
      // destructuring this.props object by creating individual variables
    const { match, location, history } = this.props
        return (
            <div className={'display-gallery'}>
                <div className={'image-slider'}>
                    <div className={'main-image'}>
                        <div className={'arrows left-arrow-btn'} onClick={this.previousArrowBtn}>
                            <i className="fas fa-chevron-left"></i>
                        </div>
                        <div className={'arrows right-arrow-btn'} onClick={this.nextArrowBtn}>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                        <div className={'image-1'} style={{
                        "backgroundImage": `url('${this.state.allImages[this.state.currentIndex]}')`
                    }}></div>
                    </div>
                </div>
                <div className={'thumbnails'}>
                   {this.loopCarImages()}
                </div>
            </div>          
        )
  }
}

export default Gallery;