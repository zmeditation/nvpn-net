import clsx from "clsx";
import CircleButton from "../CircleButton/CircleButton";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

interface RoadSteppanel {
  color: string;
  className?: any;
  date?: string;
  description?: string;
  onClick?: () => void;
}

const RoadSteppanel = ({
  className,
  color,
  date,
  description,
  onClick,
}: RoadSteppanel) => {
  return (
    <>
      <div className={clsx("c-roadsteppanel-root", className)}>
        <CircleButton color={color} className='c-roadsteppanel-circlebtn'>
          <FiberManualRecordIcon
            fontSize='small'
            className='c-roadsteppanel-dot'
          />
          <div className='c-roadsteppanel-date'>{date}</div>
          <div className='c-roadsteppanel-connect'>
            <div className='c-roadsteppanel-connectline'></div>
            <div className={`c-roadsteppanel-connectdot-${color}`}></div>
            <div className='c-roadsteppanel-connectdescript'>{description}</div>
          </div>
        </CircleButton>
      </div>
    </>
  );
};

export default RoadSteppanel;
