import { Card, MenuTheme, Switch } from "antd";
import { Layout, Menu } from "antd";
import { useAppDispatch, useAppSelector } from "app/hooks";
import Dashboard from "features/dashboard/Dashboard";
import Students from "features/students/Students";
import { useState, useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { selectThemeMode, themeActions } from "theme/darkmodeSlice";
import { Suspense } from "react";
import Moon from "../../images/icons/moon2.png";
import Sun from "../../images/icons/sun.png";
import "./Admin.scss";
import items from "./itemsMenu";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const { Header, Sider } = Layout;

const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [input, setInput] = useState<boolean>(false);
  const [letKey, setLetKey] = useState<String>("/admin/dashboard");
  const [lg, setLg] = useState<string>("es");
  const { pathname } = useLocation();
  const themeMode = useAppSelector<MenuTheme>(selectThemeMode);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (["/admin"].includes(pathname)) return navigate("dashboard");
  }, [pathname]);

  useLayoutEffect(() => {
    if (!["/admin"].includes(pathname)) return setLetKey(pathname);
  }, [pathname]);

  const toggleTheme = () => {
    setInput(!input);
    dispatch(themeActions.toggleTheme(!input));
  };
  const handleLg = () => {
    setLg(lg === "es" ? "vi" : "es");
  };
  const { i18n, t } = useTranslation(["common"]);
  useEffect(()=>{
     
  })
  return (
    <>
      {" "}
      <Suspense fallback={null}>
        <Header className="header">
          <Switch
            checked={input}
            checkedChildren={
              <img
                src={Moon}
                alt=""
                style={{ width: "20px", marginBottom: 2, marginLeft: -10 }}
              />
            }
            unCheckedChildren={
              <img
                src={Sun}
                alt=""
                style={{ width: "20px", marginBottom: 2, marginRight: -10 }}
              />
            }
            onClick={toggleTheme}
            style={{ width: 55, height: 25, right: 0 }}
            className="customize_switch_dark_mode"
          />
          <Switch
            onClick={handleLg}
            checkedChildren="Vi"
            unCheckedChildren="Es"
          />
        </Header>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="logo" />
            <Menu
              theme={themeMode}
              selectedKeys={[`${letKey}`]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Layout className="site-layout">
            <Routes>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="students" element={<Students />}></Route>
            </Routes>
          </Layout>
        </Layout>
      </Suspense>
    </>
  );
};

export default Admin;
