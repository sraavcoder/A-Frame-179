let coordinates = {};

$(document).ready(function () {
  get_coordinates();
});

function get_coordinates() {
  let searchParms = new URLSearchParams(window.location.search);
  if (searchParms.has("source") && searchParms.has("destination")) {
    let source = searchParms.get("source");
    let destination = searchParms.get("destination");

    coordinates.source_lat = source.split(";")[0];
    coordinates.source_long = source.split(";")[1];
    coordinates.destination_lat = destination.split(";")[0];
    coordinates.destination_lon = destination.split(";")[1];

    console.log(coordinates);
  } else {
    alert("Coordinates not provided");
    windows.history.back();
  }
}
