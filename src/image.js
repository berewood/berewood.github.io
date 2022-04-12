import React from "react";
import {Segment, Header, Modal, Image as SemImage} from "semantic-ui-react";
import PropTypes from "prop-types";

const ImageExpand = ({src, title}) => (
    <Modal
        className="image-modal"
        basic
        closeIcon
        size="fullscreen"
        trigger={
            <SemImage src={src} style={{cursor: "pointer"}} />
        }
    >
        <Modal.Content>
            <SemImage src={src} centered />
            <Header as="h2" content={title} style={{color: "white", textAlign: "center"}}/>
        </Modal.Content>
    </Modal>
);

ImageExpand.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string
};

const Images = () => {
    return (
        <Segment className="centered compact">
            <Header as="h2" content="Images" />
            <SemImage.Group size="medium" style={{textAlign: "center"}}>
                <ImageExpand src="images/garden.jpg" title="Garden" />
                <ImageExpand src="images/living_room.jpg" title="Living Room" />
                <ImageExpand src="images/kitchen.jpg" title="Kitchen" />
                <ImageExpand src="images/dining_room.jpg" title="Dining Room" />
                <ImageExpand src="images/bedroom_4.jpg" title="Master Bedroom (with en suite bathroom)" />
                <ImageExpand src="images/bedroom.jpg" title="Double Bedroom 1 (with en suite bathroom)" />
                <ImageExpand src="images/bedroom_2.jpg" title="Double Bedroom 2" />
                <ImageExpand src="images/bedroom_3.jpg" title="Twin Bedroom" />
            </SemImage.Group>
        </Segment>
    );
};



export default Images;
