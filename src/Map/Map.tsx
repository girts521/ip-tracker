import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import InfoPopUp from "../InfoPopUp/InfoPopUp";

const MyComponent: React.FC<{lat: number, lng: number, }> = ({lat,lng}) => {
  const map = useMap();
  map.flyTo([lat,lng],map.getZoom())
  return null
}

const Map: React.FC<{ inputText: string, passData: (data:any) => void }> = ({ inputText, passData }) => {
  const [lat, setlat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [resData, setResData] = useState(null)

  

  useEffect(() => {
    console.log(inputText);
    let url =
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_mlfTL4rhw5QiGt7PByZMEsuIc90ZB";

    if (inputText.length > 0) {
      url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_mlfTL4rhw5QiGt7PByZMEsuIc90ZB&domain=${inputText}`;
    }

    console.log(url);
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.location.lat, data.location.lng);
        if (data.location.lat) {
          setlat(data.location.lat);
          setLng(data.location.lng);
          setShowMap(true);
          setResData(data)
          passData(data)
        }
      });
  }, [inputText]);

  return (
    <>
      {showMap && (
        <div id="map" className={styles.container}>
          <MapContainer
            className={styles.map}
            center={[lat!, lng!]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <MyComponent lat={lat!} lng={lng!} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat!, lng!]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default Map;
