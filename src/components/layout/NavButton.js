import PropTypes from 'prop-types';
import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const NavButton = (props) => {
  const {title, customFunc,color,dotColor,icon} = props;
  return (
    <TooltipComponent content={title} position="BottomCenter">
    <button
        type="button"
        onClick={() => customFunc()}
        style={{ color }}
        className="relative text-xl mt-4 rounded-full p-3 hover:bg-light-gray">
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
      </TooltipComponent>
  )
}
NavButton.propTypes = {
  title: PropTypes.string,
  customFunc: PropTypes.func,
  icon: PropTypes.element,
  color: PropTypes.string,
  dotColor: PropTypes.string
};

export default NavButton