import React, {useState, useEffect, useRef} from "react";
import {Segment, Header, Modal, Image as SemImage} from "semantic-ui-react";
import PropTypes from "prop-types";

const ImagePreview = ({children}) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const isDragging = useRef(false);
    const dragCoords = useRef(0);


    const handleOpen = (index) => {
        setIndex(index);
        setOpen(true);
    };

    const handleNavigate = (event) => {
        if (event.key == "ArrowRight") {
            navigate("right");
        } else if (event.key == "ArrowLeft") {
            navigate("left");
        }
    };


    const navigate = (name) => {
        if (name === "left") {
            if (index === 0) {
                setIndex(children.length - 1);
            } else {
                setIndex(index - 1);
            }
        } else {
            if (index === (children.length - 1)) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }
    };

    const handleTouchStart = () => {
        isDragging.current = true;
    };

    const handleTouchMove = (event) => {

        const x = event.touches[0].clientX;
        // console.log("YEAH", dragCoords);
        if (isDragging.current) {
            if (dragCoords.current === 0) {
                dragCoords.current = x;
                return;
            }
            const offset = x - dragCoords.current;
            if (Math.abs(offset) > 30) {
                if (Math.sign(offset) === -1) {
                    // Going to right
                    navigate("right");
                } else {
                    navigate("left");
                }
                isDragging.current = false;
            }
        }
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
        dragCoords.current = 0;
    };

    useEffect(() => {
        if (open) {
            document.addEventListener("keydown", handleNavigate);
        }
        return () => document.removeEventListener("keydown", handleNavigate);
    }, [open, index]);

    return (
        <React.Fragment>
            <SemImage.Group size="medium" className="image-preview-group">
                {children.map((image, index) => (
                    <SemImage key={index} src={image.props.src} style={{objectPosition: image.props.objectPosition}} onClick={() => handleOpen(index)} />
                ))}
            </SemImage.Group>
            <Modal
                basic
                closeIcon
                open={open}
                size="fullscreen"
                className="image-modal"
                onClose={() => setOpen(false)}
            >
                <Modal.Content
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <button name="left" className="image-navigate left" icon="arrow left" onClick={() => navigate("left")} />
                    <button name="right" className="image-navigate right" icon="arrow right" onClick={() => navigate("right")} />
                    <figure>
                        <SemImage
                            src={children[index].props.src} centered
                            draggable={false}
                        />
                        <figcaption>
                            <div>
                                <div className="title">{children[index].props.title}</div>
                                <div className="counter">{index + 1} of {children.length}</div>
                            </div>
                        </figcaption>
                    </figure>
                </Modal.Content>
            </Modal>
        </React.Fragment>
    );
};

ImagePreview.propTypes = {
    children: PropTypes.array
};

/* eslint-disable no-unused-vars */
const Image = ({src, title, objectPosition}) => (
    null
);
/* eslint-enable no-unused-vars */

Image.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string
};


const Images = () => {
    return (
        <Segment className="centered compact">
            <Header as="h2" content="Images" />
            <ImagePreview>
                <Image src="images/patio.jpg" title="Dining Patio" />
                <Image src="images/hot_tub_1.jpg" title="Hot Tub" />
                <Image src="images/hot_tub_2.jpg" title="Hot Tub" />
                <Image src="images/garden.jpg" title="Garden" />
                <Image src="images/garden_2.jpg" title="Garden" />
                <Image src="images/woods_1.jpg" title="Garden (Woods)" />
                <Image src="images/woods_2.jpg" title="Garden (Woods)" />
                <Image src="images/woods_3.jpg" title="Garden (Woods)" />
                <Image src="images/garden_2.jpg" title="Garden" />
                <Image src="images/extension.jpg" title="Extension" />
                <Image src="images/kitchen.jpg" title="Kitchen" />
                <Image src="images/living_room.jpg" title="Living Room" />
                <Image src="images/dining_room.jpg" title="Dining Room" />
                <Image src="images/extension_rear.jpg" title="Rear extension" />
                <Image src="images/bedroom_master.jpg" title="Master Bedroom (with en suite bathroom)" />
                <Image src="images/bedroom_master_2.jpg" title="Master Bedroom (with en suite bathroom)" />
                <Image src="images/master_view.jpg" title="View from master bedroom" />
                <Image src="images/bedroom_4.jpg" title="Double Bedroom 1 (with en suite bathroom)" />
                <Image src="images/bedroom.jpg" title="Double Bedroom 2 (with en suite bathroom)" />
                <Image src="images/bedroom_3.jpg" title="Twin Bedroom" />
                <Image src="images/deer_1.jpg" title="Deer" />
                <Image src="images/deer_2.jpg" title="Deer" objectPosition="0px -115px" />
                <Image src="images/deer_3.jpg" title="Deer" objectPosition="0px -85px" />
            </ImagePreview>
        </Segment>
    );
};


export default Images;
