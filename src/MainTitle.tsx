import classNames from 'classnames';
import { smallImages, sildersText } from './sliderContent';

type MainTitleProps = {
    index: number,
    shadow?: boolean,
    opacity?: boolean
}

function MainTitle({index, shadow = false, opacity=false}: MainTitleProps) {
    return (
        <div 
            className="text-center absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <p className={
            classNames(
                "text-[220px] w-[800px] leading-[176px] uppercase",  
                {"text-white": !shadow},
                {"text-shadow": shadow})}>
            {sildersText[index]}
        </p>
        <p className={
            classNames("uppercase mt-4", {"opacity-0": opacity})}>
            <span className="text-white">{index+1} of {smallImages.length}</span>
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
    )
}

export default MainTitle;