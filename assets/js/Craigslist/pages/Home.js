import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Home extends Component {
  
    state = {
      categoriesData: ''
    }

    componentWillMount() {
        // Make a request for a user with a given ID
        axios.get('/api/categories')
        .then((response) => {
            this.setState({
                categoriesData: response.data
            }, () => {
                console.log(this.state)
            });
        })
        .catch((error)=> {
            console.log(error);
        });
    }
  
  loopCategories = () => {

    if(this.state.categoriesData != '') {
        return this.state.categoriesData.map( ( category, index ) => {

            const loopListings = () => {
               return  category.listings.map((listing, index) => {
                    return (
                        <a  key={index} 
                            href={`${category.title}/${listing.slug}`} 
                            className={'link'}>{listing.name}
                        </a>
                        
                    )
                })
            }

            return(
                <div key={index} className={'categories'}>
                    <div className={'title'}>{category.title}</div>
                    <div className={`links-group ${(category.title == 'jobs' || category.title == 'personals' || category.title == 'housing') ? 'single-col' : ''}`}>
                        {loopListings()}
                    </div>
                </div>
            )
        })
    } else {
        return 'Loading'
    }
    
    
  }

  loopTags = () => {
      let testTags = ['a','b','c','d','e','f','g']
      return testTags.map( ( tag, i ) => {
        return (
            <div 
                key={i} 
                className={'tag'}>Apple Macbook
            </div>
        )
      })
  }

  render () {
    return (
        <div className={'home'}>
            <div className={'container'}>
                <h1>Connecting people <br/> Everywhere</h1>
                <section className={'links-listing'}>
                    {this.loopCategories()}
                </section>
                <section className={'trending'}>
                    <input type={'text'} name={'search'} className={'search'}/>
                    <div className={'trends-title'}>
                        <i className={'far fa-clock'}></i>TRENDING NOW
                    </div>
                    <div className={'trends-tags'}>
                        {this.loopTags()}
                    </div>
                </section>
            </div>
        </div>
      )
  }
}

export default Home;