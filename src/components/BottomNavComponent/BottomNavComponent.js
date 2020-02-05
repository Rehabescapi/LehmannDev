import React from "react";
import { Button, Menu } from "semantic-ui-react";

const BottomNavComponent = ({ left, right }) => (
  <Menu>
    <Menu.Item>{left && <Button primary>{left.toString()}</Button>}</Menu.Item>

    <Menu.Item>{right && <Button>{right.toString()}</Button>}</Menu.Item>
  </Menu>
);

export default BottomNavComponent;
