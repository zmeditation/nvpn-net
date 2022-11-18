import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import clsx from "clsx";

interface ButtonProps {
  className?: any;
  onClick?: () => void;
}

const HorizonButton = ({ className, onClick }: ButtonProps) => {
  return (
    <>
      <div
        className={clsx("c-horizonbutton-lightcolor", className)}
        onClick={onClick}
      >
        <ArrowRightAltIcon fontSize="small" className="c-actionbutton-icon" />
      </div>
    </>
  );
};

export default HorizonButton;
