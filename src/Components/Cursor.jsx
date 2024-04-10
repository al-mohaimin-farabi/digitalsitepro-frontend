import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <div className="relative hidden md:block z-[9999999999999999999999]">
      <AnimatedCursor
        innerSize={0}
        outerSize={18}
        color="#711DB0"
        outerAlpha={0}
        innerScale={2}
        showSystemCursor={true}
        hasBlendMode={true}
        outerScale={1.5}
        outerStyle={{
          backgroundColor: "#711DB0",
        }}
        innerStyle={{ mixBlendMode: "exclusion", backgroundColor: "#711DB0" }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          "img",
          ".link",
        ]}
      />
    </div>
  );
};

export default Cursor;
