import gsap from 'gsap'
import {useGSAP} from "@gsap/react";
import {SplitText} from 'gsap/all';
import {useRef} from "react";
import {useMediaQuery} from 'react-responsive';


const Hero = () => {

    const videoRef = useRef(null);
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {

        const heroSplit = new SplitText('.title', {type: 'chars,words'});
        const heroSplit2 = new SplitText('.subtitle', {type: 'chars,words'});
        heroSplit2.chars.forEach((char) => char.classList.add('text-gradient2'));
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'})
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient1'));
        gsap.from(heroSplit.chars, {
            yPercent: 100, duration: 1.5, ease: 'expo.out', stagger: 0.06
        })
        gsap.from(paragraphSplit.lines, {
            opacity: 1, yPercent: 100, duration: 1.8, ease: 'expo.out', stagger: 0.06, delay: 1,
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true,
            }
        })
            .to('.right-leaf', {y: 200}, 0)
            .to('.left-leaf', {y: -200, rotation: 5}, 0);


        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom  top';
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        })
        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }
    }, [])
    return (

        <div className="relative grid grid-cols-[1fr_2fr_1fr]  justify-between items-start  ">
            {/*video*/}
            <div className="mb-64 flex justify-center items-center">
                <video ref={videoRef} className="w-full min-w-[15vh] mx-auto rounded-tl-[50%]" muted playsInline preload="auto" >
                    <source src="/videos/inpooot.mp4" type="video/mp4" />
                </video>
                <img src="/images/hero-left-leaf.png"
                     alt="left-leaf"
                     className="absolute  top-2 left-0 w-[20vh] md:w-[25vh] lg:w-[30vh] "
                /></div>

            {/*content*/}
            <div id="hero" className=" md:mt-12 ml-5 md:ml-10    justify-between items-center gap-16  ">
                <h1 className=" title text-3xl md:text-6xl lg:text-9xl  leading-none text-center font-modern-negra"> COFEBLOOM </h1>
                <div
                    className=" subtitle flex flex-col gap-1 text-center items-center justify-center   text-base md:text-2xl lg:text-3xl">
                    <p className="">Hot,Bitter,Cool</p>
                    <p className="">
                        coffee smells like magic and fairytales.
                    </p>
                    <a href="#cocktails"> view COFEBLOOM</a>
                </div>
            </div>
            {/*right-leaf*/}
            <img src="/images/hero-right-leaf.png"
                 alt="right-leaf"
                 className="absolute top-2 md:top-0 right-0  z-10 w-[10vh] md:w-[20vh] lg:w-[30vh]"
            />
        </div>


    )
}

export default Hero