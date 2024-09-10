// components/Sidebar.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Union from "../public/union.svg";
import Home from "../public/home.svg";
import Overview from "../public/overview.svg";
import Invoice from "../public/invoice.svg";
import Beneficiaries from "../public/beneficiaries.svg";
import Help from "../public/help.svg";
import Settings from "../public/setting.svg";


const Sidebar: React.FC = () => {
  const router = useRouter();

  // Navigation items
  const navItems = [
    { name: "Getting Started", path: "/", icon: Home },
    { name: "Overview", path: "/overview", icon: Overview },
    { name: "Accounts", path: "/accounts", icon: Home },
    { name: "Invoice", path: "/invoice", icon: Invoice  },
    { name: "Beneficiary Management", path: "/beneficiary-management", icon: Beneficiaries },
    { name: "Help Center", path: "/help-center", icon: Help },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <aside className="w-[280px] bg-white text-[#697598] flex-shrink-0 px-6 py-10 text-sm">
      <Image src={Union} alt="logo" />
      <nav className="mt-10">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.name} className={`py-3 px-4 space-x-2 flex items-center ${
              router.pathname === item.path
                ? "border-[#EEF2F9] text-[#4F4F4F] border-8 rounded-full  bg-white" // Highlight active link
                : "text-[#697598]"
            }`}>
              <Link href={item.path} passHref legacyBehavior>
                <a
                  className={`flex items-center space-x-2 w-full rounded-lg`}
                >
                  {item.icon && <Image src={item.icon} alt={`${item.name} icon`} />}
                  <span>{item.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
