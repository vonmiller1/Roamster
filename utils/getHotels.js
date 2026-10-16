import getBbox from "./getBBox";

const getHotels = async(type,coords) => {

    const bbox = getBbox(coords);
    if (!bbox) {
      return [];
    }
    const query = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(type)}.json?type=poi&bbox=${bbox.join(",")}&access_token=${process.env.mapbox_key}`,
      { method: "GET" }
    );
    const json = await query.json();
    if (!query.ok || !json.features) {
      return [];
    }
    return json.features;
  }
  
  export default getHotels