import React from 'react';
import PropTypes from 'prop-types';

const mapFirstSkeleton = (children, fn) =>
  React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child;
    }
    if (child.type.skeleton) {
      return fn(child);
    }
    if (child.props.children) {
      child = React.cloneElement(child, {
        children: mapFirstSkeleton(child.props.children, fn),
      });
    }
    return child;
  });

const Skeletonizer = props => {
  const { ready } = props;

  if (ready) {
    return <>{props.children}</>;
  } else {
    return mapFirstSkeleton(props.children, child => {
      const { type } = child;
      return React.createElement(
        type.skeleton,
        {
          ...child.props,
          'aria-hidden': true,
        },
        null,
      );
    });
  }
};

Skeletonizer.propTypes = {
  ready: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

Skeletonizer.defaultProps = {
  ready: false,
};

export { Skeletonizer };
