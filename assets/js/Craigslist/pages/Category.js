import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Category extends Component {
  
    state = {
      name: 'Joe'
    }
  

  render () {
      // destructuring this.props object by creating variables
    const { match, location, history } = this.props
    return (
        <div className={'category'}>
            <div className={'container'}>
                category is { match.params.category }
            </div>
        </div>
      )
  }
}

export default Category;