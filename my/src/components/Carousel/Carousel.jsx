import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as SliderCarousel } from "react-responsive-carousel";
import { fontSize } from "../../util/theme";

const Carousel = ({ data }) => {
  return (
    <SliderCarousel showThumbs={false}>
      {data.map((d) => (
        <div>
          <img src={d.imgSrc} />
          <Text fontSize={fontSize.xLarge}>{d.imgText}</Text>
        </div>
      ))}
    </SliderCarousel>
  );
};

export default Carousel;
