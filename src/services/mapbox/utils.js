import immutable from 'immutable';
import basic from './basic.json';

export const format = (theme = {}) => {
  const str = JSON.stringify(basic).replace(
    /\#\{([^}]+)\}/g,
    (matched, key) => process.env.GEOSERVER[key] || theme[key]
  );
  return immutable.fromJS(JSON.parse(str));
};
