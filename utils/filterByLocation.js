const filterByLocation = (activities, loc) => {
  if (!Array.isArray(activities) || loc == null) {
    return [];
  }
  return activities.filter((el) => el?.location === loc);
};

export default filterByLocation;