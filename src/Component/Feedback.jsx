import React from 'react'
import image1 from '../assets/images/user1.png'
import image2 from '../assets/images/user2.png'
import image3 from '../assets/images/user3.png'
import { FaStar } from "react-icons/fa";





const testimonials = [
  {
    name: "Dianne Russell",
    company: "Starbucks",
    image: image1,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
  },
  {
    name: "Kristin Watson",
    company: "Louis Vuitton",
    image: image2,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
  },
  {
    name: "Kathryn Murphy",
    company: "McDonald's",
    image: image3,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
  },
];

const Testimonial = ({ image, name, company, rating, text }) => (
  <div className="testimonial-card">
    <div className="testimonial-rating">
      {[...Array(rating)].map((_, i) => (
        <FaStar key={i} className="icon" />
      ))}
    </div>
    <p className="testimonial-text">{`"${text}"`}</p>
    <div className="testimonial-author">
      <img src={image} alt={name} />
      <div className="testimonial-author-info">
        <h4 className="testimonial-author-name">{name}</h4>
        <p className="testimonial-author-company">{company}</p>
      </div>
    </div>
  </div>
);

const FeedBack = () => {
  return (
    <div className="feedback-container" id="testimonials">
      <div className="feedback-header">
        <h3 className="feedback-title">Clients Feedback</h3>
        <h2 className="feedback-heading">Customer Testimonials</h2>
      </div>
      <div className="feedback-testimonials">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
