import { useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Mousewheel, Keyboard } from "swiper/modules";

import { images } from "./sliderContent";
import SingleSlide from "./SingleSlide";
import ProgressIndicator from "./ProgressIndicator";
import "../node_modules/swiper/swiper-bundle.min.css";

function Home() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  const [progress, setProgress] = useState<number>(0);

  return (
    <>
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        keyboard={true}
        watchSlidesProgress={true}
        speed={900}
        modules={[Thumbs, Mousewheel, Keyboard]}
        onSwiper={(swiper: SwiperCore) => setSwiperInstance(swiper)}
        onSlideChange={(swiper: SwiperCore) => setProgress(swiper.progress)}
        className="w-svw h-svh"
      >
        <ProgressIndicator progress={progress} />
        {images.map((image, index) => (
          <SwiperSlide className="w-svw h-svh" key={index}>
            <SingleSlide image={image} index={index} swiper={swiperInstance} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Home;
