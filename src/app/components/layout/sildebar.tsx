"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoHomeOutline, IoCubeOutline } from "react-icons/io5";

const SidebarMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const menuItems = [
    { icon: <IoHomeOutline />, text: "Home", link: "/" },
    { icon: <IoCubeOutline />, text: "SandBox", link: "/css" },
  ];

  return (
    <ul className="navigation">
      {menuItems.map((item, index) => (
        <Link key={index} href={item.link}>
          <li
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <div>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.text}</span>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SidebarMenu;
