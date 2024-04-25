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
      <div className="absolute overflow-hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10">
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
      <div className="absolute top-[16px] right-[16px] w-[248px] h-[330px] overflow-hidden rounded-[10px] border-[1px] hover:border-[1px] border-black hover:border-white cursor-pointer transition-all duration-500 ease-in-out">
        <img
          className="w-full h-full hover:scale-110 transition-all duration-500 ease-in-out"
          src={images[next]}
          onClick={() => {
            swiper?.slideTo(next);
          }}
          loading={index === 0 ? "eager" : "lazy"}
          alt="Next slide"
        />
      </div>
      <div className="absolute bottom-[16px] left-[16px] w-[248px] h-[330px] overflow-hidden rounded-[10px] border-[1px] hover:border-[1px] border-black hover:border-white cursor-pointer transition-all duration-500 ease-in-out">
        <img
          className="w-full h-full hover:scale-110 transition-all duration-500 ease-in-out"
          src={images[prev]}
          onClick={() => {
            swiper?.slideTo(prev);
          }}
          loading={index === 0 ? "eager" : "lazy"}
          alt="Previous slide"
        />
      </div>
      <div className="absolute w-[111px] h-[120px] bottom-[100px] right-[150px] text-[10px] font-helvetica font-normal tracking-[1px]">
        <p className="text-white uppercase leading-3 mb-4 ">
          {sildersContent[index]["author"]}
        </p>
        <p className="text-white uppercase text-right leading-3 mb-4">
          {sildersContent[index]["date"]}
        </p>
        {/* Ideally this should be a link <a> that opens in a new tab but linter shows warning for emapty href="" */}
        <button className="text-black hover:text-white bg-white hover:bg-black font-helvetica font-bold rounded-[24px] px-[16px] pt-[9px] pb-[8px] uppercase cursor-pointer leading-3 transition-all duration-400 ease-in-out">
          have a look
        </button>
      </div>
    </div>
  )
}

export default SingleSlide;
