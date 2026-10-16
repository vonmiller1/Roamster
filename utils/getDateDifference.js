const getDateDifference = (date1, date2) => {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
    return 0;
  }
  const t1 = date1.getTime();
  const t2 = date2.getTime();
  if (Number.isNaN(t1) || Number.isNaN(t2)) {
    return 0;
  }
  return Math.ceil((t2 - t1) / (24 * 3600 * 1000)) + 1;
};

export default getDateDifference