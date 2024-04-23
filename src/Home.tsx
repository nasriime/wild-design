import  { useState} from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Mousewheel, Keyboard } from 'swiper/modules';

import SingleSlide from './SingleSlide';
import './Home.css';
import { smallImages } from './sliderContent';
import ProgressIndicator from './ProgressIndicator';
import '../node_modules/swiper/swiper-bundle.min.css';

function Home() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>()

  return (
    <>
      <Swiper
          slidesPerView={1}
          mousewheel={true}
          keyboard={true}
          watchSlidesProgress={true}
          speed={900}
          modules={[ Thumbs, Mousewheel, Keyboard ]}
          onSwiper={(swiper: SwiperCore) => setSwiperInstance(swiper)}
          className="w-svw h-svh">
        <ProgressIndicator scrollYProgress={10}/>
          {smallImages.map((image, index) => (
            <SwiperSlide className="w-svw h-svh" key={index}>
              <SingleSlide image={image} index={index} swiper={swiperInstance}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Home;
