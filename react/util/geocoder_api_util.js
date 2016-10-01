export const fetchCoords = (addressString, successFunc) => {
  let string = addressString + ",+San+Francisco,+CA";
  $.ajax({
    type: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(string)}&key=AIzaSyCl2Zpfpn1LOoTf1jvicyW00_kkQvgi-Xo`,
    success: successFunc
  });
};
