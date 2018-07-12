import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Home extends Component {
  
    state = {
      name: 'Jean'
    }
  
  loopCategories = () => {
    let testArray = [1,2,3,4,5,6,7]
    return testArray.map( ( category, index ) => {
        return(
            <div key={index} className={'categories'}>
                <div className={'title'}>Community</div>
                <div className={'links-group'}>
                    <a href="#" className={'link'}>General</a>
                    <a href="#" className={'link'}>Community</a>

                    <a href="#" className={'link'}>Activities</a>
                    <a href="#" className={'link'}>Local News</a>

                    <a href="#" className={'link'}>Events</a>
                    <a href="#" className={'link'}>Pets</a>

                    <a href="#" className={'link'}>Childcare</a>
                    <a href="#" className={'link'}>Lost + Found</a>

                    <a href="#" className={'link'}>Classes</a>
                    <a href="#" className={'link'}>Musician</a>

                    <a href="#" className={'link'}>Groups</a>
                    <a href="#" className={'link'}>Artists</a>
                </div>
            </div>
        )
    })
  }

  loopTags = () => {
      let testTags = ['a','b','c','d','e','f','g']
      return testTags.map( ( tag, index ) => {
        return (
            <div key={index} className={'tag'}>Apple Macbook</div>
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