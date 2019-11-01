// filter props to exclude certain keys
export const usePropsExclude = (props = {}, keys) => {
  const keyArray = Array.isArray(keys) ? keys : Object.keys(keys);
  return Object.keys(props)
    .filter(k => keyArray.indexOf(k) === -1)
    .reduce((c, k) => ({ ...c, [k]: props[k] }), {});
};

// filter props to include only certain keys
export const usePropsFilter = (props = {}, keys) => {
  const keyArray = Array.isArray(keys) ? keys : Object.keys(keys);
  return Object.keys(props)
    .filter(k => keyArray.indexOf(k) !== -1)
    .reduce((c, k) => ({ ...c, [k]: props[k] }), {});
};
