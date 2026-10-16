const formatDistance = (dist) => {
  if (dist == null || Number.isNaN(Number(dist))) {
    return "";
  }
  const meters = Number(dist);
  if (meters < 1000) {
    return `${Math.floor(meters)} m`;
  }
  return `${(meters / 1000).toFixed(1)} km`;
};

export default formatDistance