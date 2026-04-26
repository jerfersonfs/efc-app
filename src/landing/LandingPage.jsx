import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Preview from "./components/Preview";
import CTA from "./components/CTA";

const SECTION_IDS = ["hero", "features", "preview", "cta"];
const TRANSITION_MS = 1150;
const WHEEL_THRESHOLD = 48;
const SWIPE_THRESHOLD = 42;

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const isAnimatingRef = useRef(false);
  const wheelDeltaRef = useRef(0);
  const transitionTimeoutRef = useRef(0);

  const sections = useMemo(
    () => [
      { id: SECTION_IDS[0], component: <Hero /> },
      { id: SECTION_IDS[1], component: <Features /> },
      { id: SECTION_IDS[2], component: <Preview /> },
      { id: SECTION_IDS[3], component: <CTA /> },
    ],
    []
  );

  const goToSection = useCallback(
    (targetIndex) => {
      const boundedIndex = Math.max(0, Math.min(targetIndex, sections.length - 1));

      if (boundedIndex === activeSection || isAnimatingRef.current) {
        return;
      }

      isAnimatingRef.current = true;
      setActiveSection(boundedIndex);
      wheelDeltaRef.current = 0;

      window.clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = window.setTimeout(() => {
        isAnimatingRef.current = false;
      }, TRANSITION_MS);
    },
    [activeSection, sections.length]
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(transitionTimeoutRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    let touchStartY = 0;

    const onWheel = (event) => {
      event.preventDefault();
      if (isAnimatingRef.current) return;

      wheelDeltaRef.current += event.deltaY;

      if (Math.abs(wheelDeltaRef.current) < WHEEL_THRESHOLD) {
        return;
      }

      if (wheelDeltaRef.current > 0) {
        goToSection(activeSection + 1);
      } else {
        goToSection(activeSection - 1);
      }
    };

    const onKeyDown = (event) => {
      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        goToSection(activeSection + 1);
      }

      if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goToSection(activeSection - 1);
      }

      if (event.key === "Home") {
        event.preventDefault();
        goToSection(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        goToSection(sections.length - 1);
      }
    };

    const onTouchStart = (event) => {
      touchStartY = event.changedTouches[0].clientY;
    };

    const onTouchEnd = (event) => {
      if (isAnimatingRef.current) return;

      const touchEndY = event.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) < SWIPE_THRESHOLD) {
        return;
      }

      if (deltaY > 0) {
        goToSection(activeSection + 1);
      } else {
        goToSection(activeSection - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeSection, goToSection, sections.length]);

  return (
    <main
      style={{
        height: viewportHeight,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          height: sections.length * viewportHeight,
          transform: `translate3d(0, -${activeSection * viewportHeight}px, 0)`,
          transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          willChange: "transform",
        }}
      >
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            style={{ height: viewportHeight, overflow: "hidden" }}
          >
            {section.component}
          </section>
        ))}
      </div>
    </main>
  );
}