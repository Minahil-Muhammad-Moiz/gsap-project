import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const scrollRef = useRef(null);
  const headRef = useRef(null);
  const [scrollReady, setScrollReady] = useState(false); // 🚀 Prevent Locomotive from running before loader

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (scrollReady) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      // Sync GSAP with Locomotive Scroll
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
      };
    }
  }, [scrollReady]); // 🚀 Locomotive Scroll only initializes AFTER the loader animation

  useGSAP(() => {
    const tl = gsap.timeline();

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
      onComplete: () => setScrollReady(true), // 🚀 Enable Locomotive Scroll AFTER loader animation
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
      height: "30vh",
      ease: "expo.out",
      duration: 1,
    });
  });

  return (
    <div ref={scrollRef}>
      {/* Loader */}
      <div id="loader" className="h-screen w-full text-white bg-[#3b3b3b] fixed text-center z-50">
        <div className="moveUp bg-[#F5E31A] w-full h-full"></div>
        <div className="moveUp bg-[#d900ff] w-full h-full"></div>
      </div>

      {/* Main Content */}
      <div className="h-full w-full" id="main">
        <div
          id="page1"
          className="h-screen w-full text-[#555555] bg-[#F5E31A] flex justify-center items-center text-center"
        >
          <h1 ref={headRef} className="text-[3vw] tracking-[-0.3px] leading-[3vw]">
            <em>We are a</em> <span>CREATIVE</span> <em>studio</em> <span>DEDICATED</span> <em>to</em> <span>CULTURAL</span>
            <br />
            <span>ADVANCEMENT</span> <em>through</em> <span>STRATEGY</span> <em>and</em> <span>DESIGN.</span>
          </h1>
        </div>

        <div id="page2" className="bg-pink-400 w-full h-screen" data-scroll data-scroll-speed='2'></div>
        <div id="page3" className="bg-white w-30 rounde-full h-30" data-scroll data-scroll-speed='-5'></div>
      </div>
    </div>
  );
};

export default App;
