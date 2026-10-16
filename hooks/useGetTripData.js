import { useRef, useState } from "react";
import { useAuth, db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const useGetTripData = () => {
  const user = useAuth();
  const [trip, setTrip] = useState([]);
  const unsubRef = useRef(null);

  const getTripData = async () => {
    if (!user) return;
    if (unsubRef.current) {
      unsubRef.current();
      unsubRef.current = null;
    }
    const colRef = collection(db, "users", user?.uid, "itineraries");

    unsubRef.current = onSnapshot(colRef, (snapShot) => {
      const trips = [];
      snapShot.forEach((doc) => {
        trips.push({ id: doc.id, tripName: doc.data().tripname });
      });
      setTrip(trips);
    });
  };


  return [trip, getTripData];
};

export default useGetTripData;
