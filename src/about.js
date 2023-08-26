import React from "react";
import {Segment, Header, Card} from "semantic-ui-react";


const About = () => {
    return (
        <Segment className="centered compact">
            <Header as="h2" content="About" />
            <Header as="h3" content="General" />
            <p>
                Following your booking, we will send you the code for the key box which is located just
                inside the side gate on the wall. Please put the key straight back in the box after
                opening the front door as there are other sets hung up just inside the front door.
            </p>
            <p>
                The heating can be turned on to continuous or twice a day. It will be set to come on
                for 30 mins twice a day when you arrive, but you may need it longer. Instructions are
                inside the airing cupboard on top landing. Pull down the display flap and you will
                see 3 buttons. One is upstairs heating, one is downstairs and the other is for hot water.
            </p>
            <p>
                An information folder is inside the drawer of the cupboard to the left as you walk in to the dining room area.
            </p>
            <p>
                The property has a large dining table that can seat up to 10 people.
            </p>
            <p>
                There is a fully functioning kitchen with an electric hob/oven, Aga and dishwasher.
                There may be quite a bit of food left in the kitchen cupboards
                and freezer. Feel free to use any of it if you want to – as we go down once a month,
                we do leave some things there. Feel free to leave any non-expiring leftover food you have for future guests.
            </p>
            <p>
                The utility room has a fridge freezer and a washing machine, and you will find a tumble dryer in the garage.
                Also in the garage, there are 4 black sun lounger seats – hopefully you will get some sun!
            </p>
            <p>
                The side boundary to the property is the grass bank outside of the extension (by the swing) and down to the road.
            </p>
            <p>
                If you don’t have dogs with you, just take the throws of the sofas whilst you stay there and
                pop them under the stairs. It’s mostly our dogs that moult so much! If you could just throw
                them back on afterwards in case the next people have dogs we’d be grateful.
            </p>
            <p>
                There are three double bedrooms, two of which have an en-suite. There is a main bathroom and a
                twin bedded room. Two of the double rooms have king size beds, the third has a super king size bed
            </p>
            <p>
                WiFi is available, and the password can be found on the router which is in the corner of the twin bedroom.
            </p>
            <Header as="h3" content="Hot tub" />
            <p>
                There is a hot tub that you are welcome to use during your stay. All the instructions are in a medium-size green storage box on top of the tumble dryer.
                Please read carefully and follow the instructions provided.
            </p>
            <Header as="h3" content="Food and dining out" />
            <p>
                The nearest shop is in <a href="https://goo.gl/maps/SsNaohStMwKGJ53t6">Dunsford</a>, and generally opens 8am-4pm. Exeter is only 25
                mins away which has both an Aldi and Sainsburys. We highly recommend the fresh eggs that can be bought
                from a <a href="https://goo.gl/maps/6gBerNTFvGngTGSX6">house at the bottom of Pound Lane</a> to Bridford on the left (just hold on to the egg boxes). They are usually available during the day for £1.20 a 1/2 dozen. Milk can be bought from the dairy — as
                you come off the main Exeter road towards the house you may have noticed a sign for a <a href="https://goo.gl/maps/uC7muvLjdox8puzA7">dairy</a>.
                This has a 24 hour self service machine and you can take your own bottle or buy one to re fill at £1.20 per litre.
            </p>
            <p>
                We would recommend Sunday Roast at the Bridford Inn; booking is necessary as it is popular. The Manor Inn (10 mins away) is also very good and also requires booking.
            </p>
            <Header as="h3" content="Walks" />
            <p>
                Our 2 favourite walks near by are:
            </p>
            <ol>
                <li>
                    Walking round the Tottisford and Trenchard Reservoirs. Both take approx 1 ½ hours and can be accessed by car — 10 mins from the house. You can walk all the way around both.
                </li>
                <li>
                    Fingle Bridge to Castle Drogo. Park at Fingle Bridge, approx 20 min drive away. The pub there is good for lunch.
                    Walk from the bridge along the river to Castle Drogo, approx 1 hour. The path winds up hill at the end, and seems
                    to be going back, but eventually you come to the castle where there is a tea room and a National Trust Shop.
                    You can come back the same way or go the shorter route but it has a steepish decent. All the walk is well signposted.
                </li>
            </ol>
            <Header as="h3" content="Cleaning" />
            <p>
                The cleaning contractors can be pre booked and charge approx £80 if you want to use them after your stay. If this is the case, please let us know.
                Otherwise, the vacuum is under the stairs and cleaning products are found under the sink.
            </p>
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
                When you leave the house at the end of your stay, please close the gates at the end of the drive.
            </p>
            <p>
                We hope you have a lovely stay and any if you have any problems whilst you’re there - just give us a call.
            </p>
            <p>
                p.s. Bats are in residence in the loft between March and October so we wouldn’t recommend opening the loft access door
                if you stay between those months! They have more rights than us, so we are unable to relocate them! They
                move out for the winter. When you are there, you wouldn’t know about them unless you go outside after dusk,
                when you may catch them flying out of the roof — last summer we thought there were about 4 of them in total.
            </p>
            <p>
                We are very happy to be able to let others use the house and do not want any money for the use,
                however we hope as an alternative you would consider making a contribution to one of the following charities we support:
            </p>
            <Card.Group itemsPerRow="3" stackable className="donate-cards">
                <Card
                    as="a"
                    link
                    image="/teen_challenge.png"
                    className="padded-card-image"
                    header="Teen Challenge UK (Dorset)"
                    description="Teen Challenge UK helps people trapped by addiction and other life controlling problems such as drugs and alcohol."
                    href="https://teenchallengedorset.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                />
                <Card
                    as="a"
                    link
                    image="/tearfund.svg"
                    className="padded-card-image"
                    header="Tearfund"
                    description="Christian relief and development charity, at work wherever the need is greatest. Ending poverty around the world, empowering the local church to make it happen."
                    href="https://www.tearfund.org"
                    target="_blank"
                    rel="noopener noreferrer"
                />
                <Card
                    as="a"
                    link
                    image="/macmillan.png"
                    header="Macmillan Caring Locally"
                    description="Macmillan Caring Locally is a Charity providing specialist end of life care and support to families, carers and friends, based in Christchurch, Dorset."
                    href="https://www.macmillanlocal.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                />
            </Card.Group>
            <br />
            <p>
                There is no obligation to though and we hope you have a wonderful stay in Devon.
            </p>
        </Segment>
    );
};

export default About;
