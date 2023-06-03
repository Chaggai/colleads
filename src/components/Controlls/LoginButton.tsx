import { t } from "i18next";
import SvgIcon, { Logos } from "../SvgIcon";
import Button from "./Button";

type Props = {
  logo: Logos;
  click: () => void;
};
const LoginButton = ({ logo, click }: Props) => {
  console.log(logo);
  return (
    <Button
      label={t("signup.stepOne.withFacebook")}
      click={() => click()}
      className="relative mb-6 flex h-14 w-full items-center justify-center bg-white"
    >
      <SvgIcon className="absolute left-4" name={logo} />
    </Button>
  );
};
export default LoginButton;
