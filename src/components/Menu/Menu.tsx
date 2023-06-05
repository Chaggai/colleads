import SvgIcon from "../SvgIcon";

const Menu = () => {
  return (
    <nav>
      <h1 className="mb-2 h-20 bg-white p-7 text-center font-bold">תפריט</h1>
      <ul>
        <li>
          <div className="mb-0.5 flex flex-row bg-white py-6 pr-6">
            <i className="w-10">
              <SvgIcon name="whatsapp" className="ml-4" />
            </i>
            צרו קשר
          </div>
        </li>
        <li>
          <div className="mb-0.5 flex flex-row bg-white py-6 pr-6">
            <i className="w-10">
              <SvgIcon name="question-mark" className="ml-4" />
            </i>
            שאלות ותשובות
          </div>
        </li>
        <li>
          <div className="mb-0.5 flex flex-row bg-white py-6 pr-6">
            <i className="w-10">
              <SvgIcon name="hamburger" className="ml-4" />
            </i>
            תנאי שימוש
          </div>
        </li>
        <li>
          <div className="mb-0.5 flex flex-row bg-white py-6 pr-6">
            <i className="w-10">
              <SvgIcon name="heart" className="ml-4" />
            </i>
            תנו לנו פידבק
          </div>
        </li>
        <li>
          <div className="mb-0.5 flex flex-row bg-white py-6 pr-6">
            <i className="w-10">
              <SvgIcon name="x" className="ml-4" />
            </i>
            התנתקות
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
