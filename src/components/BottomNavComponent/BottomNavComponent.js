import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const BottomNavComponent = ({ left = "", right = "", onActiveChange }) => (
  <Menu fluid widths={2}>
    <Menu.Item>
      {left && (
        <Button onClick={() => onActiveChange(left)} as={Link} to={`/${left}`}>
          {left.toString()}
        </Button>
      )}
    </Menu.Item>

    <Menu.Item class="ui small image">
      {right && (
        <Button
          onClick={() => onActiveChange(right)}
          as={Link}
          to={`/${right}`}
        >
          {right.toString()}
        </Button>
      )}
    </Menu.Item>
  </Menu>
);

export default BottomNavComponent;
