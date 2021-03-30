import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Details extends Component {
  state = {
    details: {
      id: 0,
      title: 'Title Nr. 0',
      imageUrl:
        'https://i.ebayimg.com/00/s/MTAyNFg1NzY=/z/qWYAAOSwm1Vcc6F4/$_72.JPG',
      description: 'Description 0',
      userId: null
    }
  }

  render() {
    return (
      <div>
        <h5 align="center">
          <Link to="/ads">Back to the Ads page</Link>
        </h5>
        <table class="center">
          <tr>
            <th>Ad Listing name</th>
          </tr>
          <tr>
            <td>{this.state.details.title}</td>
          </tr>
          <tr>
            <th>Description</th>
          </tr>
          <tr>
            <td>{this.state.details.description}</td>
          </tr>
          <tr>
            <th>Write a message </th>
            <td>
              <button type="button" onClick={this.showModal}>
                click
              </button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Details
