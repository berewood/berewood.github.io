import React, {useMemo} from "react";
import {Segment, Header, Icon, Image} from "semantic-ui-react";
import GoogleMapReact from "google-map-react";
import CryptoJS from "crypto-js";
import usePin from "./usePin";
import PropTypes from "prop-types";

const ENC = "U2FsdGVkX19/n+iif77Bh6rFS6+TKusCtniKW1Rq7bR3MrwK0/SPknTk6gkXdkmz8S8WP/aahg==";

const info = {
    center: {
        lat: 50.663917627819615,
        lng: -3.672083526204176
    },
    zoom: 15
};


const getMapOptions = (maps) => ({
    streetViewControl: false,
    scaleControl: true,
    fullscreenControl: false,
    disableDoubleClickZoom: true,
    mapTypeControl: true,
    mapTypeId: maps.MapTypeId.HYBRID,
    zoomControl: true,
    clickableIcons: false
});

const Marker = ({text, icon}) => (
    <div className="marker">
        <Icon name={icon} size="large" inverted />
        {text}
    </div>
);

Marker.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string
};

const handleApiLoaded = (map, maps) => {
    const drivewayCoords = [
        {lat: 50.66250944840289, lng: -3.672352359361284},
        {lat: 50.66233262543355, lng: -3.671574518746965},
        {lat: 50.66270023195469, lng: -3.6695861900784132}
    ];
    const drivewayPath = new maps.Polyline({
        path: drivewayCoords,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });
    drivewayPath.setMap(map);
};


const Directions = () => {
    const [pin] = usePin();
    const key = useMemo(() => CryptoJS.RC4.decrypt(ENC, pin).toString(CryptoJS.enc.Utf8), [pin]);

    return (
        <Segment className="centered">
            <a target="_blank" rel="noopener noreferrer" href="https://what3words.com/fluctuate.exact.stun">
                <div style={{display: "flex", alignItems: "center"}}>
                    <Image size="small" src="/what3words.png" style={{borderRight: "1px solid", paddingRight: "1em", marginRight: "1em"}}/>
                    fluctuate.exact.stun
                </div>
            </a>
            <Header content="Directions to Berewood, Bridford from Exeter" />
            <p>Come along the B3193 from A38.</p>
            <p>Turn left following signs to Bridford/The Bridford Inn up Pound Lane.</p>
            <p>1 mile up lane you will enter Bridford. Turn left towards pub (No through road)</p>
            <p>After 20m you will pass a small church, turn immediately left down a narrow track sign posted Christow.</p>
            <p>After 200m track forks, take left hand sign posted Christow. After a further 200m you will see a set of gates and track on the left opposite a garage (highligted in red). This is Berewood</p>
            <Header>Google Map <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/NdmTwyhxHaRF8kT16"><Icon name="map" /></a></Header>
            <div className="google-map-wrapper">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: key }}
                    defaultCenter={info.center}
                    defaultZoom={info.zoom}
                    options={getMapOptions}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <Marker
                        lat={50.662751507364874}
                        lng={-3.6694815790401614}
                        text="Berewood"
                        icon="home"
                    />
                    <Marker
                        lat={50.6656177637126}
                        lng={-3.6762248569231626}
                        text="Bridford"
                        icon="circle outline"
                    />
                </GoogleMapReact>
            </div>
            <Header content="Pound lane to Berewood Video" />
            <p>The following video outlines the turns you should take when travelling into Bridford from Pound Lane.</p>
            <video width="550" controls>
                <source src="/videos/directions.mp4" type="video/mp4" />
                Your browser does not support video playback
            </video>
        </Segment>
    );
};

export default Directions;
