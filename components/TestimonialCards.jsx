export function TestimonialCards({
  backgroundColor,
  color,
  image,
  name,
  title,
  reviewMain,
  reviewQuotes,
  gridTemplateArea,
}) {
  return (
    <>
      <div className="card stack v g-0">
        <div className="details stack h g-2">
          <div className="image">
            <img src={image} alt="profile picture" />
          </div>
          <div className="person-details">
            <h5 className="name">{name}</h5>
            <h5 className="title">{title}</h5>
          </div>
        </div>
        <p className="review-main">"{reviewMain}"</p>
        <p className="review-quotes">{reviewQuotes}</p>
      </div>
      <style jsx>{`
        .card {
          background-color: ${backgroundColor};
          border-radius: 5px;
          box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
          color: ${color};
          font-size: 13px;
          grid-area: ${gridTemplateArea};
          padding: 20px;
        }
        img {
          border-radius: 50%;
          display: block;
        }
        .review-main {
          font-weight: 600;
          margin: 5px;
        }
        .review-quotes {
          font-weight: 500;
          margin: 5px;
          opacity: 70%;
        }
        .title {
          opacity: 50%;
        }
      `}</style>
    </>
  );
}
