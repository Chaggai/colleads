import SvgIcon, { Logos } from "../SvgIcon";
import Button from "./Button";

type Props = {
  logo: Logos;
  label: string;
  click: () => void;
};
const LoginButton = ({ logo, label, click }: Props) => {
  return (
    <Button
      label={label}
      click={() => click()}
      className="relative mb-6 flex h-14 w-full items-center justify-center bg-white"
    >
      <SvgIcon className="absolute left-4" name={logo} />
    </Button>
  );
};
export default LoginButton;
