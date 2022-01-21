import {Menu, Icon, Image} from "semantic-ui-react";
import {NavLink} from "react-router-dom";


const _Menu = () => (
    <Menu icon='labeled'
        className="main-menu"
        inverted
    >
        <Image className="logo" src="/logo.png" />
        <Menu.Menu>
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
