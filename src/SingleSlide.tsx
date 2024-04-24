import SwiperCore from "swiper";
import MainTitle from "./MainTitle";
import { smallImages } from "./sliderContent";

type SingleSlideProps = {
  image: string;
  index: number;
  swiper?: SwiperCore;
};
function SingleSlide({ image, index, swiper }: SingleSlideProps) {
  const next = smallImages.length - 1 === index ? 0 : index + 1;
  const prev = index === 0 ? smallImages.length - 1 : index - 1;

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
          alt={image}
        />
        <MainTitle index={index} />
      </div>
      {/* Text overlap for title*/}
      <MainTitle index={index} shadow={true} opacity={true} swiper={swiper} />
      <img
        className="absolute top-[16px] right-[16px] w-[248px] h-[330px] rounded-[10px] border-[1px] border-black cursor-pointer hover:scale-105"
        src={smallImages[next]}
        onClick={() => {
          swiper?.slideTo(next);
        }}
        alt={smallImages[next]}
      />
      <img
        className="absolute bottom-[16px] left-[16px] w-[248px] h-[330px] rounded-[10px] border-[1px] border-black cursor-pointer hover:scale-105"
        src={smallImages[prev]}
        onClick={() => {
          swiper?.slideTo(prev);
        }}
        alt={smallImages[prev]}
      />
      <div className="absolute bottom-[16px] right-[16px]">
        <p className="text-white uppercase">Johanna Hobel for CHanel</p>
        <p className="text-white text-right">FEB 2020</p>
        {/* Ideally this should be a link <a> that opens in a new tab but linter shows warning for emapty href="" */}
        <button className="text-black rounded-[24px] bg-white px-[16px] pt-[9px] pb-[8px] uppercase cursor-pointer">
          have a look
        </button>
      </div>
    </div>
  );
}

export default SingleSlide;
