import SwiperCore from "swiper";
import MainTitle from "./MainTitle";
import { smallImages, largeImages } from "./sliderContent";

type SingleSlideProps = {
  image: string;
  index: number;
  swiper?: SwiperCore;
};
function SingleSlide({ image, index, swiper }: SingleSlideProps) {
  const right = largeImages.length - 1 === index ? 0 : index + 1;
  const left = index === 0 ? smallImages.length - 1 : index - 1;

  return (
    <div className="w-svw h-svh relative">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "blur(20px)",
        }}
      ></div>
      {/* <img className="w-full h-100" src={image} alt="" /> */}
      <p className="text-white absolute top-[16px] left-[16px] uppercase">
        XYZ Photography
      </p>
      <div className="absolute overflow-hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <img
          className="w-[512px] h-[680px] rounded-[10px] border-[1px] border-black"
          src={image}
          alt=""
        />
        <MainTitle index={index} />
      </div>
      {/* Text overlap*/}
      <MainTitle index={index} shadow={true} opacity={true} swiper={swiper} />
      <img
        className="absolute top-[16px] right-[16px] w-[248px] h-[330px] rounded-[10px] border-[1px] border-black cursor-pointer"
        src={smallImages[right]}
        onClick={() => {
          swiper?.slideTo(right);
        }}
        alt=""
      />
      <img
        className="absolute bottom-[16px] left-[16px] w-[248px] h-[330px] rounded-[10px] border-[1px] border-black cursor-pointer"
        src={smallImages[left]}
        onClick={() => {
          swiper?.slideTo(left);
        }}
        alt=""
      />
      <div className="absolute bottom-[16px] right-[16px]">
        <p className="text-white uppercase">Johanna Hobel for CHanel</p>
        <p className="text-white text-right">FEB 2020</p>
        <button className="text-black rounded-[24px] bg-white px-[16px] pt-[9px] pb-[8px] uppercase cursor-pointer">
          have a look
        </button>
      </div>
    </div>
  );
}

export default SingleSlide;
