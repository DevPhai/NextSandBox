"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  IoHomeOutline,
  IoCubeOutline,
  IoColorFillOutline,
} from "react-icons/io5";

const SidebarMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const menuItems = [
    { icon: <IoHomeOutline />, text: "Home", link: "/" },
    { icon: <IoColorFillOutline />, text: "CSS", link: "/css" },
    { icon: <IoCubeOutline />, text: "3D", link: "/3D" },
  ];

  return (
    <ul className="navigation">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={activeIndex === index ? "order-1" : "order-2"}
        >
          <motion.li
            layout
            transition={{ duration: 0.6 }}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <div>
              <span className="icon">{item.icon}</span>
              <span className="text">{item.text}</span>
            </div>
          </motion.li>
        </Link>
      ))}
    </ul>
  );
};

export default SidebarMenu;
