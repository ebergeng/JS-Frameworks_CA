import React from "react";
import styled from "styled-components";
import ReviewStar from "../../assets/star.png";

const ProductReview = (item) => {
  const reviews = item.product.reviews;

  const reviewStars = (num, id) => {
    let array = Array.from({ length: num }, (v, i) => i + 1);
    return (
      <div>
        {array.map((e, i) => (
          <img key={id + i} src={ReviewStar} alt="Filled star for rating" />
        ))}
      </div>
    );
  };

  return (
    <ReviewsContainer>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <>
          {reviews.map((review) => (
            <Review key={review.id}>
              <ReviewHeader>
                <div>{review.username}</div>
                {reviewStars(review.rating, review.id)}
              </ReviewHeader>
              <ReviewBody>
                <p>{review.description}</p>
              </ReviewBody>
            </Review>
          ))}
        </>
      ) : (
        <>
          <Review>
            <ReviewBody>
              <p>No reviews on this item yet :(</p>
            </ReviewBody>
          </Review>
        </>
      )}
    </ReviewsContainer>
  );
};

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  color: var(--color-text-one);
`;

const Review = styled.div`
  background-color: var(--color-primary);
  min-height: 50px;
  padding: 8px;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: var(--color-text-one);

  img {
    height: 10px;
  }
`;

const ReviewBody = styled.div`
  text-align: center;
  color: var(--color-text-two);
`;

export default ProductReview;
