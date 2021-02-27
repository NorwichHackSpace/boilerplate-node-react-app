import { Component } from "react";
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: "10px",
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: "10px",
};

const navStyle = {
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: "10px",
};
class MapBox extends Component {
  state = {
    viewport: {
      width: "90vw",
      height: "80vh",
      latitude: 52.640871299374155,
      longitude: 1.2890141158335457,
      zoom: 13,
    },
  };

  render() {
    return (
      <MapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoidG9ieWNhdGxpbiIsImEiOiJja2xtdDh6b3gwY2c5Mm9xeXo4MTg4NjEzIn0.6ayr26hPZGDJoD7_JzvKxw"
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        {" "}
        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </MapGL>
    );
  }
}

export default MapBox;
