import { iconsMap } from "./iconsMap";

export const Icon = ({ name, className, style, onClick }) => {
  const IconComponent = iconsMap[name];
  if (!IconComponent) return null;

  return (
    <IconComponent className={className} style={style} onClick={onClick} />
  );
};
