import SwiperCore from "swiper";
import classNames from "classnames";
import { images, sildersContent } from "./sliderContent";
type MainTitleProps = {
  index: number;
  shadow?: boolean;
  opacity?: boolean;
  swiper?: SwiperCore;
};

function MainTitle({
  index,
  shadow = false,
  opacity = false,
  swiper,
}: MainTitleProps) {
  return (
    <div className="text-center absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <p
        className={classNames(
          "text-[220px] w-[820px] leading-[176px] uppercase tracking-wide",
          { "text-white": !shadow },
          { "text-shadow": shadow }
        )}
      >
        {sildersContent[index]["title"]}
      </p>
      <p className={classNames("uppercase mt-3", { "opacity-0": opacity })}>
        <span className="inline-block text-white font-helvetica text-[10px] leading-3">
          <span>{index + 1}</span>
          <span className="mx-2">of</span>
          <span>{images.length}</span>
        </span>
        <span className="ml-6">
          {images.map((_, i) => (
            <span
              onClick={() => {
                swiper?.slideTo(i);
              }}
              className={classNames(
                "w-[5px] h-[8px] rounded-sm ml-2 inline-block cursor-pointer",
                { "bg-white": i <= index },
                { "border-[2px] border-white": i > index }
              )}
              key={i}
            ></span>
          ))}
        </span>
      </p>
    </div>
  );
}

export default MainTitle;
