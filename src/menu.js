import {Menu, Icon, Image} from "semantic-ui-react";
import {NavLink} from "react-router-dom";


const _Menu = () => (
    <Menu icon='labeled'
        inverted
        style={{
            marginBottom: 0,
            background: "rgba(0,0,0, 0.5)",
            marginBottom: "0px"
        }}
    >
        <Image style={{position: "fixed", bottom: "25px", left: "10px"}} src="/logo.png" />
        <Menu.Menu
            style={{
                marginLeft: "auto",
                marginRight: "auto"
            }}
        >
            <Menu.Item
                as={NavLink}
                name="home"
                to="/"
            >
                <Icon name="home" />
                Home
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                name="about"
                to="/about"
            >
                <Icon name="help" />
                About
            </Menu.Item>
            <Menu.Item
                as={NavLink}
                name="book"
                to="/book"
            >
                <Icon name="calendar" />
                Book
            </Menu.Item>

            <Menu.Item
                as={NavLink}
                name="directions"
                to="/directions"
            >
                <Icon name="map" />
                Directions
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

export default _Menu;
