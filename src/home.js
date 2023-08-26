import React from "react";
import {Segment, Header} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <Segment className="centered">
            <Header content="Welcome" />
            <p>
                Welcome to the Berewood booking site. Nicky and Stewart hope you have a lovely stay!
            </p>
            <p>
                Use the <Link to="/book">booking form</Link> to request your stay, which will be sent for confirmation.
                Don&apos;t forget to read the <Link to="/about">about</Link> for important information regarding your trip.
            </p>
            <p>
                During your stay, enjoy the sights of Dartmoor. Nicky and Stewart have lots of recommended walks,
                restaurants and pubs that will allow you to make the most of your time here.
            </p>
        </Segment>
    );
};

export default Home;
