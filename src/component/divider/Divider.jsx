import React from 'react';
import PropTypes from 'prop-types';
import './divider.css';

export const Divider = ({ weight, style, label, align }) => {
  return (
    <div className='contain'>
      <div
        className={['divider', `weight__${weight}`, style, align].join(' ')}
      >
        <span className='label-divider'>{label}</span>
      </div>
    </div>
  );
};

Divider.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  weight: PropTypes.oneOf(['light', 'regular', 'heavy']),
  /**
   * How large should the button be?
   */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /**
   * Divider contents
   */
  label: PropTypes.any,
  /**
   * Divider style dot
   */
  style: PropTypes.oneOf(['solid', 'dashed', 'dotted']),
};

Divider.defaultProps = {
  weight: 'regular',
  align: 'center',
  style: 'solid',
  label: null,
};
