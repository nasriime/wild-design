import { motion } from 'framer-motion';
import { smallImages, largeImages, sildersText } from './sliderContent';
import classNames from 'classnames';

function SingleSlide({image, index}: {image: string, index: number}) {
    return (
        <motion.div
            className="w-svw h-svh relative"
            key={index}>
            <div 
                className="w-full h-full"
                style={{
                    backgroundImage: `url(${image})`, 
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover', 
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(20px)',
                    }}>
                </div>

                {/* <img className="w-full h-100" src={image} alt="" /> */}
                <p className="text-white absolute top-[16px] left-[16px] uppercase">XYZ Photography</p>
                
                <div className="absolute overflow-hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <img 
                        className="w-[512px] h-[680px] rounded-[10px] border-[1px] border-black" 
                        src={image} 
                        alt="" />
                    <div className="text-white text-center absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <p className="font-bold text-[150px] uppercase">
                            {sildersText[index]}
                        </p>
                        <p className="uppercase">
                            <span>{index+1} of {smallImages.length}</span>
                            <span className="ml-5">
                                {smallImages.map((_, i) => 
                                <span 
                                    
                                    className={
                                        classNames(
                                            "w-[5px] h-[8px] rounded-sm ml-2 inline-block cursor-pointer",
                                            {'bg-white': i <= index},
                                            {'border-[2px] border-white': i > index})}
                                        key={i}>
                                </span>)}
                            </span>
                        </p>
                    </div>
                </div>
                {/* Text overlap*/}
                <div className="text-center absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <p 
                        className="text-shadow font-bold text-[150px] text-shadow[] uppercase">
                        {sildersText[index]}
                    </p>
                    <p className="opacity-0">{index+1} of {smallImages.length}</p>
                </div>

                <img 
                    className="absolute top-[16px] right-[16px] w-[248px] h-[330px] rounded-[10px] border-[1px] border-black cursor-pointer" 
                    src={largeImages.length-1 === index ? `${smallImages[0]}` : `${smallImages[index+1]}`}
                    alt="" />

                <img 
                    className="absolute bottom-[16px] left-[16px] w-[248px] h-[330px] rounded-[10px] border-[1px] border-black cursor-pointer" 
                    src={index === 0 ? `${smallImages[smallImages.length-1]}` : `${smallImages[index-1]}`} 
                    alt="" />

                <div className="absolute bottom-[16px] right-[16px]">
                    <p className="text-white uppercase">Johanna Hobel for CHanel</p>
                    <p className="text-white text-right">FEB 2020</p>
                    <button 
                        onClick={() => console.log(index)} 
                        className="text-black rounded-[24px] bg-white px-[16px] pt-[9px] pb-[8px] uppercase cursor-pointer">
                        have a look
                    </button>
                </div>
        </motion.div>
    );
}

export default SingleSlide;