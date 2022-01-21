import React from "react";
import {Segment, Header} from "semantic-ui-react";


const Home = () => {
    return (
        <Segment className="centered">
            <Header content="Welcome" />
            <p>
                Welcome to the Berewood booking site. Nicky and Stewart hope you have a lovely stay!
            </p>
            <p>
                Use the booking form to request your stay, which will be sent for confirmation.
            </p>
            <p>
                During your stay, enjoy the sights of Dartmoor! Nicky and Stewart have lots of recommended walks,
                restaurants and pubs that will allow you to make the most of your stay
            </p>
        </Segment>
    );
};

export default Home;
