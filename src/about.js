import React from "react";
import {Segment, Header, Card} from "semantic-ui-react";


const About = () => {
    return (
        <Segment className="centered compact">
            <Header as="h2" content="About" />
            <Header as="h3" content="General" />
            <p>
                During your stay if you need heating, you will find a thermostat at the bottom of the stairs, and another <b>somewhere</b>
            </p>
            <p>
                WiFi is available, and the password can be found in the drawer to the left when entering the property, along with
                some helpful guides to local attractions.
            </p>
            <Header as="h3" content="Cleaning" />
            <p>The cleaning contractors charge approximately £80 to clean the house</p>
            <p>
                <b>Bedding</b> - If you want to take your own bedding, there are 3 kingsize beds and 2 singles.
                Otherwise, feel free to use the bedding already on the made up beds, but we would be grateful if
                you could wash and tumble dry any used sheets and/or towles before you leave, and re make the beds.
                No need to iron!
                Alternatively, we can ask the cleaning contractors to strip and wash everything,
                but that will add to the cleaning costs. The tumble dryer can be found in the garage
            </p>
            <Header as="h3" content="Final Thoughts" />
            <p>
                We are very happy to be able to let others use the house and do not want any money for the use,
                but some people have said they would prefer to contribute and so we suggest a contribution to one of these charities:
            </p>
            <Card.Group className="donate-cards">
                <Card
                    as="a"
                    link
                    image="/teen_challenge.jpg"
                    header="Teen Challenge UK"
                    description="Teen Challenge UK helps people trapped by addiction and other life controlling problems such as drugs and alcohol."
                    href="http://www.teenchallenge.org.uk"
                    target="_blank"
                    rel="nooper noreferrer"
                />
                <Card
                    as="a"
                    link
                    image="/tearfund.svg"
                    header="Tearfund"
                    description="Christian relief and development charity, at work wherever the need is greatest. Ending poverty around the world, empowering the local church to make it happen."
                    href="https://www.tearfund.org"
                    target="_blank"
                    rel="nooper noreferrer"
                />
            </Card.Group>

        </Segment>
    );
};

export default About;
