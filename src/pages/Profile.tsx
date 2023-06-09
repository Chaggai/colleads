import Avatar from "../components/Avatar";
import SvgIcon from "../components/SvgIcon";

const Profile = () => {
  return (
    <main>
      <header className="h-[138px] p-5">
        <SvgIcon name="chevron-right" />
        <div className="mr-auto inline-block w-auto">
          <SvgIcon name="pencil" className="mr-auto" />
          <span className="mr-auto">
            <figure>
              קבלת הפניות
              <SvgIcon name="green-check" />
            </figure>
          </span>
        </div>
      </header>
      <section className="relative mb-4 flex bg-white p-4 pt-10">
        <Avatar
          name="a a"
          image="https://www.lofficielusa.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F39109%2F1611085012-1609881742604438-modelo.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75"
          className="absolute -top-[60px] h-[120px] w-[120px] border-4"
          imgClassName="rounded-full border-4 border-white"
        />
        <div className="mr-auto flex">
          <strong className="text-site-lightblue">050-4563210</strong>
          <button>
            <SvgIcon name="pencil" className="-mt-4 mr-4" />
          </button>
        </div>
      </section>
      <section className="mb-4 bg-white p-4">section 2</section>
      <section className="mb-4 bg-white p-4">section 3</section>
      <section className="mb-4 bg-white p-4">section 4</section>
      <section className="mb-4 bg-white p-4">section 5</section>
      <section className="mb-4 bg-white p-4">section 6</section>
      <section className="mb-4 bg-white p-4">section 7</section>
      <section className="mb-4 bg-white p-4">section 8</section>
      <section className="mb-4 bg-white p-4">section 9</section>
      <section className="mb-4 bg-white p-4">section 10</section>
      <section className="mb-4 bg-white p-4">section 11</section>
    </main>
  );
};
export default Profile;
