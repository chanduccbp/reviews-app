// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  previousReview = () => {
    this.setState(prevState => {
      if (prevState.activeReviewIndex > 0) {
        return {activeReviewIndex: prevState.activeReviewIndex - 1}
      }
      return {activeReviewIndex: prevState.activeReviewIndex}
    })
  }

  nextReview = () => {
    const {reviewsList} = this.props
    const lastIndex = reviewsList.length - 1

    this.setState(prevState => {
      if (prevState.activeReviewIndex < lastIndex) {
        return {activeReviewIndex: prevState.activeReviewIndex + 1}
      }
      return {activeReviewIndex: prevState.activeReviewIndex}
    })
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const requiredReview = reviewsList[activeReviewIndex]

    return (
      <div className="bg-container">
        <h1 className="head1">Reviews</h1>
        <div className="r-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            onClick={this.previousReview}
            data-testid="leftArrow"
          />
          <div className="review">
            <img
              src={requiredReview.imgUrl}
              alt={requiredReview.username}
              className="pic"
            />
            <h1 className="head2">{requiredReview.username}</h1>
            <p className="para">{requiredReview.companyName}</p>
            <p className="para">{requiredReview.description}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            onClick={this.nextReview}
            data-testid="rightArrow"
          />
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
