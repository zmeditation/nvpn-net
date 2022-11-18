import clsx from "clsx";
import { buttontype } from "../../../common/constant";

interface TitleProps {
  color: string;
  description: string;
  className?: any;
}

const Title = ({
  description,
  className,
  color,
}: TitleProps) => {
  return (
    <>
      <span
        className={clsx("c-title-root", className, {
          ["light"]: color === buttontype.light,
          ["dark"]: color === buttontype.dark,
        })}>
        {description}
      </span>
    </>
  );
};

export default Title;
