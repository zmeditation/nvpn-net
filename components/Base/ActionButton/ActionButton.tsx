import CallMadeIcon from "@material-ui/icons/CallMade";
import clsx from "clsx";

interface ButtonProps {
  letter: string;
  className?: any;
  onClick?: () => void;
}

const ActionButton = ({ letter, className, onClick }: ButtonProps) => {
  return (
    <>
      <div
        className={clsx("c-actionbutton-lightcolor", className)}
        onClick={onClick}>
        <span className='c-actionbutton-text'>{letter}</span>
      </div>
    </>
  );
};

export default ActionButton;
