import clsx from "clsx";
import CircleButton from "../CircleButton/CircleButton";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

interface MobileRoadPanel {
  color: string;
  className?: any;
  date?: string;
  description?: string;
  onClick?: () => void;
}

const MobileRoadPanel = ({
  className,
  color,
  date,
  description,
  onClick,
}: MobileRoadPanel) => {
  return (
    <>
      <div className={clsx("c-mobileroadpanel-root", className)}>
        <CircleButton color={color} className='c-mobileroadpanel-circlebtn'>
          <FiberManualRecordIcon
            fontSize='small'
            className='c-mobileroadpanel-dot'
          />
        </CircleButton>
        <div className='c-mobileroadpanel-connect'>
          <div className='c-mobileroadpanel-connectline'></div>
          <div className={`c-mobileroadpanel-connectdot-${color}`}></div>
          <div className='c-mobileroadpanel-connectdescript'>
            <div className='c-mobileroadpanel-date'>{date}</div>
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileRoadPanel;
