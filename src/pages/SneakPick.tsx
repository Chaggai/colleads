import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import "../assets/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Settings } from "react-slick";
import Button from "../components/elements/Button";
import SliderItem from "../components/SliderItem";

const SneakPick = () => {
  const { t } = useTranslation();

  const settings: Settings = {
    dots: true,
    accessibility: true,
    arrows: false,
    infinite: true,
    speed: 500,
  };

  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div className="skewed h-full">
      <img
        src="data:image/png;base64,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"
        alt=""
        className="h-1/2"
      />
      <div className="mx-14 my-12 text-right">
        <Slider {...settings}>
          <SliderItem
            title={t("SneakPick.title.2")}
            content={t("SneakPick.paragraph.2")}
          />
          <SliderItem
            title={t("SneakPick.title.1")}
            content={t("SneakPick.paragraph.1")}
          />
          <SliderItem
            title={t("SneakPick.title.3")}
            content={t("SneakPick.paragraph.3")}
          />
        </Slider>
        <Button
          className="mt-20"
          click={handleClick}
          text={t("button.signup")}
        />
      </div>
    </div>
  );
};
export default SneakPick;
