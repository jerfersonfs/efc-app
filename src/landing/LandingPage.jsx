import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Preview from "./components/Preview";
import CTA from "./components/CTA";

export default function LandingPage() {
  return (
    <ReactFullpage
      scrollingSpeed={700}
      navigation={false}
      anchors={["hero", "features", "preview", "cta"]}
      render={() => {
        return (
          <ReactFullpage.Wrapper>

            <div className="section">
              <Hero />
            </div>

            <div className="section">
              <Features />
            </div>

            <div className="section">
              <Preview />
            </div>

            <div className="section">
              <CTA />
            </div>

          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}