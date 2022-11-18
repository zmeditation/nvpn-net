import clsx from "clsx";
import { buttontype } from "../../../common/constant";

interface CircleButtonProps {
  color: string;
  children?: React.ReactNode;
  className?: any;
  onClick?: () => void;
}

const CircleButton = ({
  children,
  className,
  color,
  onClick,
}: CircleButtonProps) => {
  return (
    <>
      <div
        className={clsx("c-circlebutton-root", className, {
          ["light"]: color === buttontype.light,
          ["dark"]: color === buttontype.dark,
        })}
        onClick={onClick}>
        {children}
      </div>
    </>
  );
};

export default CircleButton;
