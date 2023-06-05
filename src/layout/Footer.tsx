import Avatar from "../components/Avatar";
import SvgIcon from "../components/SvgIcon";

const Footer = () => {
  return (
    <footer className="mt-4 flex items-center justify-between px-8 pb-4">
      <button>
        <Avatar
          className="h-[40px] w-[40px] border-none"
          name="אסף רפפורט"
          image="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
        />
      </button>
      <button>
        <SvgIcon name="users" />
      </button>
      <button>
        <SvgIcon name="document" />
      </button>
      <button>
        <SvgIcon name="home" />
      </button>
    </footer>
  );
};
export default Footer;
