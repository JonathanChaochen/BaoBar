function initMap() {
  var baobar = {lat: -43.529855, lng: 172.600098};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: baobar
  });
  var marker = new google.maps.Marker({
    position: baobar,
    map: map
  });
}
