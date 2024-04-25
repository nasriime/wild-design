import SwiperCore from "swiper";
import MainTitle from "./MainTitle";
import { images, sildersContent } from "./sliderContent";

type SingleSlideProps = {
  image: string;
  index: number;
  swiper?: SwiperCore;
};
function SingleSlide({ image, index, swiper }: SingleSlideProps) {
  const next: number = images.length - 1 === index ? 0 : index + 1;
  const prev: number = index === 0 ? images.length - 1 : index - 1;

  return (
    <div className="w-svw h-svh relative">
      <div
        className="w-full h-full bg-no-repeat	bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="w-full h-full backdrop-blur-2xl"></div>
      </div>
      <a
        href="/"
        className="text-white text-base absolute top-[16px] left-[16px] uppercase leading-[19px] tracking-[1px]"
      >
        XYZ Photography
      </a>
      <div className="absolute overflow-hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <img
          className="w-[512px] h-[680px] rounded-[10px] border-[1px] border-black"
          src={image}
          loading={index === 0 ? "eager" : "lazy"}
          alt={image}
        />
        <MainTitle index={index} />
      </div>
      {/* Text overlap for title*/}
      <MainTitle index={index} shadow={true} opacity={true} swiper={swiper} />
      <img
        className="absolute top-[16px] right-[16px] w-[248px] h-[330px] rounded-[10px] border-[1px] border-black cursor-pointer hover:scale-105"
        src={images[next]}
        onClick={() => {
          swiper?.slideTo(next);
        }}
        loading={index === 0 ? "eager" : "lazy"}
        alt={images[next]}
      />
      <img
        className="absolute bottom-[16px] left-[16px] w-[248px] h-[330px] rounded-[10px] border-[1px] border-black cursor-pointer hover:scale-105"
        src={images[prev]}
        onClick={() => {
          swiper?.slideTo(prev);
        }}
        loading={index === 0 ? "eager" : "lazy"}
        alt={images[prev]}
      />
      <div className="absolute w-[109px] h-[97px] bottom-[16px] right-[140px] text-[10px] font-helvetica font-normal ">
        <p className="text-white uppercase leading-3 mb-4 ">
          {sildersContent[index]["author"]}
        </p>
        <p className="text-white uppercase text-right leading-3 mb-4">
          {sildersContent[index]["date"]}
        </p>
        {/* Ideally this should be a link <a> that opens in a new tab but linter shows warning for emapty href="" */}
        <button className="text-black hover:text-white bg-white hover:bg-black font-helvetica font-normal rounded-[24px] px-[16px] pt-[9px] pb-[8px] uppercase cursor-pointer leading-3">
          have a look
        </button>
      </div>
    </div>
  );
}

export default SingleSlide;
