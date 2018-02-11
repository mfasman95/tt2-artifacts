const rounding = num => `${num.toFixed(3)}`;
export const displayTruncated = (val) => {
  // Don't display decimal points on numbers below a certain threshold
  let retVal = `${(val * 1).toFixed(0).replace(/\.?0+$/)}`;

  if (val > 999999999999999999) {
    retVal = `${rounding(val / 1000000000000000000)} e18/ab`;
  } else if (val > 99999999999999999) {
    retVal = `${rounding(val / 100000000000000000)} e17`;
  } else if (val > 9999999999999999) {
    retVal = `${rounding(val / 10000000000000000)} e16`;
  } else if (val > 999999999999999) {
    retVal = `${rounding(val / 1000000000000000)} e15/aa`;
  } else if (val > 99999999999999) {
    retVal = `${rounding(val / 100000000000000)} e14`;
  } else if (val > 9999999999999) {
    retVal = `${rounding(val / 10000000000000)} e13`;
  } else if (val > 999999999999) {
    retVal = `${rounding(val / 1000000000000)} T`;
  } else if (val > 999999999) {
    retVal = `${rounding(val / 1000000000)} B`;
  } else if (val > 999999) {
    retVal = `${rounding(val / 1000000)} M`;
  } else if (val > 999) {
    retVal = `${rounding(val / 1000)} K`;
  }

  if (['undefined', 'NaN', 'null'].includes(retVal)) retVal = '0';
  return retVal;
};

export const displayPercentage = value => `${displayTruncated(value * 100)}%`;

export default Object.freeze({ displayTruncated, displayPercentage });
