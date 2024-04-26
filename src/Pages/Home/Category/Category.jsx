
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle 
                subTitle={"From 10.00 am to 11.00 pm"}
                heading={"Order Online"}
            />
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className='text-4x1 uppercase -mt-16 text-white text-center'>Chicken Fry!!</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className='text-4x1 uppercase -mt-16 text-white text-center'>Beef Teak!!</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className='text-4x1 uppercase -mt-16 text-white text-center'>Chicken Burger!</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className='text-4x1 uppercase -mt-16 text-white text-center'>Chicken Fry!!</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className='text-4x1 uppercase -mt-16 text-white text-center'>Discounted Food!!</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img6} alt="" />
            <h3 className='text-4x1 uppercase -mt-16 text-white text-center'>Delicius Food!!</h3>
        </SwiperSlide>
        
      </Swiper>
        </section>
    );
};

export default Category;