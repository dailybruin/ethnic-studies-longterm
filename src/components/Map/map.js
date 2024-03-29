import { Map, TileLayer, Popup, Marker} from "react-leaflet";
import "./map.css";
import "leaflet/dist/leaflet.css";
import {config} from "./index.js";
import styled from "styled-components";
import marker from "./place.png";
import L from "leaflet";


const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;

const newicon = new L.icon({
        iconUrl: marker,
        iconSize: [35, 35]
      });


const MyMap = () => {
return (
<Container>
<div id = "map_container">
<p className='map-text' id = "header">How each University of California campus responded to the proposed revisions to Senate Regulation 424</p>
<p className='map-text' id = "explainer"> In December, the Board of Admissions and Relations with Schools proposed a revision to Senate Regulation 424, creating an A-G ethnic studies requirement for freshman admission by adding an “H” requirement. The A-G subject requirements are necessary for many students to be granted admissions to University of California and California State University schools. However, some local admissions committees expressed different views than their campuses' original feedback in June updates provided to BOARS.</p>
<Map center={[36.77,-118.41]} zoom={6} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
 {config.schools.map((loc, index) => { 
            return (<Marker
                key={loc.name}
                icon= {newicon}
                position={[loc.lat, loc.long]}
            >
              <Popup>
                <p className = 'popup' id = "popup-header">{loc.name}</p>
                <p className = "popup">{loc.text}</p>
                </Popup>
              </Marker>);
        })}
</Map>
<p className='map-text'id = "map_sources">Sources: Board of Admissions and Relations with Schools, UC Academic Senate</p>
<p className='map-text'id = "map_byline"> Graphic reporting by Shaanth Kodialam, Features and Student Life Editor and Catherine Hamilton National News and Higher Education Editor. Interactive by Priya Kanneboyina, Assistant Data editor.</p>
</div>
</Container>
);
}
export default MyMap;


