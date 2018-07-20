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
            "https://i.pinimg.com/originals/4b/6f/a6/4b6fa697f3d68574dd17ff392c12824a.jpg",
            "https://i.pinimg.com/736x/e9/e0/76/e9e076a23415c42802c6b17201a7edfa--electric-motor-bmw-x.jpg",
            "https://cdn.bmwblog.com/wp-content/uploads/test-drive-2014-bmw-x3-facelift-22-750x500.jpg",
            "https://cdn.bmwblog.com/wp-content/uploads/BMW-X3-xDrive20d-2014-F25-LCI-B47-Diesel-Motor-022-750x500.jpg",
            "https://cdn.autoportal.com/img/feature/84/main/main.orig.jpg",
            "https://cdn.bmwblog.com/wp-content/uploads/2015/06/2016-bmw-7-series-key-fob-images-1900x1200-02-750x500.jpg"
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