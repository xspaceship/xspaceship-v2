import { useEffect, useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Features = ({ features }) => {
  const swiperRef = useRef();

  useEffect(() => {
    if (swiperRef.current) {
      let maxHeight = 0;
      const slides = swiperRef.current.querySelectorAll('.swiper-slide');

      for (const slide of slides) {
        if (slide.clientHeight > maxHeight) maxHeight = slide.clientHeight;
      }

      for (const slide of slides) {
        slide.style.height = `${maxHeight}px`;
      }
    }
  }, []);
  return (
    <>
      <div display="hidden lg:grid" grid="cols-3 gap-5">
        {features.map((feature, index) => (
          <div bg="bg13" p="10" space="y-5" border="rounded-lg" key={index}>
            <h4 text="tc08 2xl leading-lh01" font="semibold redhat">
              {feature.headline}
            </h4>
            <p text="leading-lh01 tc09" font="worksans">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1.2}
        className="lg:hidden"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div bg="bg13" p="10" space="y-5" border="rounded-lg">
              <h4 text="tc08 2xl leading-lh01" font="semibold redhat">
                {feature.headline}
              </h4>
              <p text="leading-lh01 tc09" font="worksans">
                {feature.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Features;
