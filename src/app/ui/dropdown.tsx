"use client";
import { Dropdown } from "flowbite-react";
import React from "react";

export const FontsDropDown = () => {
  return (
    <div>
      <Dropdown label="Dropdown button">
        <Dropdown.Item>Arial</Dropdown.Item>
        <Dropdown.Item>Helvetica</Dropdown.Item>
        <Dropdown.Item>Times New Roman</Dropdown.Item>
        <Dropdown.Item>Times</Dropdown.Item>
        <Dropdown.Item>Courier New</Dropdown.Item>
        <Dropdown.Item>Verdana</Dropdown.Item>
        <Dropdown.Item>Georgia</Dropdown.Item>
        <Dropdown.Item>Palatino</Dropdown.Item>
        <Dropdown.Item>Garamond</Dropdown.Item>
      </Dropdown>
    </div>
  );
};
