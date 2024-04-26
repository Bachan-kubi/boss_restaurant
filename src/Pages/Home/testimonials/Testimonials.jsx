import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <section>
        <SectionTitle heading={"Our Client Witness"} subTitle={"Lets get go"} />
      </section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review=><SwiperSlide key={review._id}>
                <div className="m-24 flex flex-col items-center">
                <Rating style={{ maxWidth: 150}} value={review.rating} readOnly />
                    <p className="text-center p-2">{review.details}</p>
                    <h3 className="text-center text-4xl text-yellow-600">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonials;
