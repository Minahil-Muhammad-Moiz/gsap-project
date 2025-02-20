import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { BiArrowToTop, BiPlus, BiUpArrow } from "react-icons/bi";
import SVGanimation from './components/SVGanimation'
import HorizontalScroll from "./components/HorizontalScroll";

const App = () => {
  const scrollRef = useRef(null);
  const headRef = useRef(null);
  const page2 = useRef(null)
  const [scrollReady, setScrollReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (scrollReady) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // lerp: 0.08, // Adjust for smoother experience
      });

      locomotiveScrollRef.current = scroll;

      scroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: scrollRef.current.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.refresh();

      return () => {
        scroll.destroy();
        ScrollTrigger.kill();
      };
    }
  }, [scrollReady]);

  const handleTop = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(0);
    }
  };
  useGSAP(() => {
    const tl = gsap.timeline();

// Disable scrolling at the start
document.body.style.overflow = "hidden"; 

// Loader animation
tl.to("#loader .moveUp", {
  height: 0,
  delay: 0.9,
  stagger: 0.3,
  duration: 1.5,
  ease: "expo.inOut",
});
tl.to("#loader", {
  height: 0,
  delay: -0.4,
  ease: "power4.inOut",
  duration: 0.6,
  onComplete: () => {
    setScrollReady(true);
  },
});


    // Fade-in effect for heading
    if (headRef.current) {
      const children = headRef.current.children;
      tl.from([...children], {
        opacity: 0,
        y: 100,
        stagger: { each: 0.2, from: "random" },
        duration: 1,
      });
    }

    // Page transition animation
    tl.to("#page1", {
      backgroundColor: "#fff",
      // color: '#d900ff',
      // height: "30vh",
      ease: "expo.out",
      duration: 1,
    });

    gsap.to('.marquee', {
      transform: 'translateX(-100%)',
      repeat: -1,
      duration: 10,
      ease: 'none',

    })
  });

  const handleMouseEnter = (ele) => {
    const bgImg = ele.currentTarget.getAttribute('data-img');
    page2.current.style.backgroundImage = `url('${bgImg}')`;
  }

  const handleMouseLeave = () => {
    page2.current.style.backgroundImage = '';
  }

  return (
    <div ref={scrollRef} >
      {/* Loader */}
      <div id="loader" className="h-screen w-full text-white bg-[#3b3b3b] fixed text-center z-50">
        <div className="moveUp bg-[#F5E31A] w-full h-full"></div>
        <div className="moveUp bg-[#d900ff] w-full h-full"></div>
      </div>

      {/* Main Content */}
      <div className="w-full relative" id="main">

        <div className="fixed h-[5vh] text-[1.3vw] z-20 top-0 w-full flex items-center justify-between  text-[#d900ff] px-8 py-6"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#main">
          <div className="font-extrabold"><em>LOGO</em></div>
          <div className="overflow-hidden flex my-auto">
            <div className=" relative w-60 overflow-hidden text-lg">
              <ul className={`flex gap-8 w-full absolute transition-all duration-500 ${isOpen ? 'left-0' : 'left-40'}`}>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className={`text-4xl  ${isOpen ? 'rotate-[135deg]' : 'rotate-0'} transition-all duration-500`} id='navIcon'><BiPlus /></div>
          </div>
        </div>

        <div
          id="page1"
          className="h-screen w-full bg-[#F5E31A] text-[#555555] flex justify-center items-center text-center"
        >
          <h1 ref={headRef} className="font-light text-[3vw] tracking-[-0.3px] leading-[3vw]">
            <em>We are a</em> <span>CREATIVE</span> <em>studio</em> <span>DEDICATED</span> <em>to</em> <span>CULTURAL</span>
            <br />
            <span>ADVANCEMENT</span> <em>through</em> <span>STRATEGY</span> <em>and</em> <span>DESIGN.</span>
          </h1>
        </div>

        <div ref={page2} id="page2" className="bg-[#F5E31A] w-full h-[60vh] flex flex-col -space-y-18 items-center justify-center bg-center bg-cover transition-all duration-500" >
          <div className="uppercase w-full flex text-center flex-col justify-center items-center relative" data-img='https://plus.unsplash.com/premium_photo-1699025726754-8da11fa3fb58?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h2 className="w-full text-[7vw] z-10  peer hover:italic font-extralight cursor-pointer ">Home</h2>
            <div className="w-full absolute top-[50%] -translate-y-[50%] whitespace-nowrap opacity-0 scale-y-0 peer-hover:opacity-100 peer-hover:scale-y-100 peer-hover:block transition-all duration-150 overflow-hidden">
              <div className="absolute bg-[#d900ffe5]  h-full w-[40%] left-[50%] -translate-x-[50%] z-10 overflow-y-hidden shadow-[10px_0px_40px_40px] shadow-[#d900ffe5]"></div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
            </div>
          </div>
          <div className="uppercase w-full flex text-center flex-col justify-center items-center relative" data-img='https://plus.unsplash.com/premium_photo-1736168213200-efe2485efc8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h2 className="w-full text-[7vw] z-10  peer hover:italic font-extralight cursor-pointer ">About</h2>
            <div className="w-full absolute top-[50%] -translate-y-[50%] whitespace-nowrap opacity-0 scale-y-0 peer-hover:opacity-100 peer-hover:scale-y-100 peer-hover:block transition-all duration-150 overflow-hidden">
              <div className="absolute bg-[#d900ffe5]  h-full w-[40%] left-[50%] -translate-x-[50%] z-10 overflow-y-hidden shadow-[10px_0px_40px_40px] shadow-[#d900ffe5]"></div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
            </div>
          </div>
          <div className="uppercase w-full flex text-center flex-col justify-center items-center relative" data-img='https://images.unsplash.com/photo-1739560116855-23a8c43afb5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h2 className="w-full text-[7vw] z-10  peer hover:italic font-extralight cursor-pointer ">Contact</h2>
            <div className="w-full absolute top-[50%] -translate-y-[50%] whitespace-nowrap opacity-0 scale-y-0 peer-hover:opacity-100 peer-hover:scale-y-100 peer-hover:block transition-all duration-700 overflow-hidden">
              <div className="absolute bg-[#d900ffe5]  h-full w-[40%] left-[50%] -translate-x-[50%] z-10 overflow-y-hidden shadow-[10px_0px_40px_40px] shadow-[#d900ffe5]"></div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
              <div className=" bg-[#d900ff] whitespace-nowrap inline-block py-2 marquee ">
                <h5 className="inline-block whitespace-nowrap mr-3 tracking-widest">We believe in the power of intentional creativity.</h5>
              </div>
            </div>
          </div>
        </div>

        <div id="page3" className="bg-white w-full min-h-screen" >
          <div className="img-container p-10  grid grid-cols-3  gap-10">
            <div className="line  flex flex-col gap-10">
              <div className="img-div w-full h-[38vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1739900292622-a7f860175aad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="img1" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
              <div className="img-div w-full h-[35vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1737502860946-8fd4e3b26f32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
              <div className="img-div w-full h-[38vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1739666757651-0648a467c641?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
              <div className="img-div w-full h-[40vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1739532049391-2867bd1a71e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
            </div>
            <div className="line  flex flex-col gap-10">
              <div className="img-div w-full h-[32vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1739532049391-2867bd1a71e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
              <div className="img-div w-full h-[40vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1739900292622-a7f860175aad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="img1" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
              <div className="img-div w-full h-[40vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1737502860946-8fd4e3b26f32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
              <div className="img-div w-full h-[40vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1739666757651-0648a467c641?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
            </div>
            <div className="line  flex flex-col gap-10">
              <div className="img-div w-full h-[40vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1739666757651-0648a467c641?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
              <div className="img-div w-full h-[45vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1739900292622-a7f860175aad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D" alt="img1" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
              <div className="img-div w-full h-[40vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1737502860946-8fd4e3b26f32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
              <div className="img-div w-full h-[40vw]  relative group overflow-hidden">
                <div className="absolute w-full h-full bg-[#000000c0] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black delay-75 transition-all duration-300 z-10">
                  <p className="uppercase text-[2vw] text-center p-10 ">FIRST <em>image</em></p>
                </div>
                <img src="https://images.unsplash.com/photo-1739532049391-2867bd1a71e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
          <SVGanimation />
        <div className="footer cursor-pointer flex items-center justify-center " onClick={handleTop}>
          <h1 className="flex text-black text-[2vw] items-center"><BiArrowToTop /> BACK TO TOP</h1>
        </div>
      </div>

    </div>
  );
};

export default App;
