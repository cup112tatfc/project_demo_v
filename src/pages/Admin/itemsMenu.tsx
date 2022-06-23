import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import i18next from "i18next";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
): MenuItem {
  return {
    key,
    icon,
    label,
  } as MenuItem;
}


const items: MenuProps["items"] = [
  getItem(
    <Link to="dashboard">t('dashboard')</Link>,
    "/admin/dashboard",
    <PieChartOutlined />
  ),
  getItem(
    <Link to="students">Students</Link>,
    "/admin/students",
    <DesktopOutlined />
  ),
  getItem(<Link to="todo">Todo</Link>, "/admin/todo", <ContainerOutlined />),
];
export default items;
