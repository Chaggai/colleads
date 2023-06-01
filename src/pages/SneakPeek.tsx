import { t } from "i18next";
import Slider, { Settings } from "react-slick";

import SliderItem from "../components/SliderItem";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";

const SneakPeek = () => {
  const navigate = useNavigate();

  const settings: Settings = {
    dots: true,
    accessibility: true,
    arrows: false,
    infinite: true,
    speed: 500,
  };

  const handleClick = () => {
    navigate("/signup/1");
  };

  return (
    <div
      className="skewed flex h-screen"
      style={{
        backgroundImage: "url(/img/sneak-pick.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="h-1/2 w-full self-end bg-site-bg px-14 pt-10 text-right">
        <Slider {...settings}>
          <SliderItem
            title={t("SneakPeek.title.2")}
            content={t("SneakPeek.paragraph.2")}
          />
          <SliderItem
            title={t("SneakPeek.title.1")}
            content={t("SneakPeek.paragraph.1")}
          />
          <SliderItem
            title={t("SneakPeek.title.3")}
            content={t("SneakPeek.paragraph.3")}
          />
        </Slider>
        <button
          className="btn relative h-[38px] w-[146px] bg-site-lightblue text-site-bg"
          onClick={handleClick}
        >
          {t("button.signup")}
        </button>
      </div>
    </div>
  );
};
export default SneakPeek;
