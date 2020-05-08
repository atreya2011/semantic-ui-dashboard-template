import React from "react";
import MainLayout from "./mainLayout";

const items = [
  { to: "/", content: "Home", icon: "home" },
  { to: "/users", content: "Users", icon: "user" },
  { to: "/about", content: "About", icon: "info circle" },
];

export default function App() {
  return <MainLayout items={items} />;
}
