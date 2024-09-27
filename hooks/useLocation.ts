import { useState, useEffect } from "react";
import * as Location from "expo-location";

export function useLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  useEffect(() => {
    async function getPosition() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return null;
      }
      setLocation(await Location.getCurrentPositionAsync());
    }
    getPosition();
  }, []);

  return location;
}
