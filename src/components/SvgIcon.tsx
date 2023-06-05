export type Logos = "google" | "facebook" | "apple";

export type Icons =
  | "checkbox"
  | "checkbox-checked"
  | "checkbox-rect"
  | "checkbox-rect-checked"
  | "menu-dots"
  | "bell"
  | "pin"
  | "tune"
  | "document-with-stars"
  | "document-with-stars-green"
  | "home"
  | "document"
  | "users";

type Props = {
  name: Icons | Logos;
  className?: string;
};
const SvgIcon = ({ name, className }: Props) => {
  return (
    <img src={`/icons/${name}.svg`} className={className && className} alt="" />
  );
};
export default SvgIcon;
