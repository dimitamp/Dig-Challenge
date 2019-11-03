import React from 'react';
import propTypes from 'prop-types';
import {StyledText, StyledSpinner} from '../ui';
import {useFetcher} from '../../../hooks';

export const Component = ({action, spinnerClass, silently, children}) => {
  const [data, loading, error, refetch, setData] = useFetcher(action, silently);
  if (loading) return <StyledSpinner class={spinnerClass} />;
  if (error) return <StyledText>Failed to load Data</StyledText>;
  if (!data ) return null;
  return children(data, {setData, refetch});
};

Component.propTypes = {
  action: propTypes.func.isRequired,
  children: propTypes.func.isRequired,
  spinnerClass: propTypes.string,
  silently: propTypes.bool,

};

Component.defaultProps = {
  spinnerClass: '',
  silently: false,
};


export default Component;
