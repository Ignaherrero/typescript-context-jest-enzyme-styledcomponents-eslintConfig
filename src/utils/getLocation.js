// useEffect(() => {
//   const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   };
// });
// const success = (pos) => {
//   const { latitude, longitude } = pos.coords;
//   return { latitude, longitude };
// };

// const error = (err) => {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// };

// navigator.geolocation.getCurrentPosition(success, error, options);

// !  retorna null
export const geoFindMe = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const succes = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    return { latitude, longitude };
  };

  const error = () => {
    return "error";
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(succes, error, options);
  } else {
    return "tu navegador no soporta browser";
  }
};
