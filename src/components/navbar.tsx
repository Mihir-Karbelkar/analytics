"use client";
import { usePathname } from "next/navigation";
import Link from "./overriden/link";
import { useSession } from "next-auth/react";

const links = [
  {
    href: "/board",
    text: "Dashboard",
    icon: "icon-dashboard",
  },
  {
    href: "/board/transactions",
    text: "Transactions",
    icon: "icon-transaction",
  },
  {
    href: "/board/schedules",
    text: "Schedules",
    icon: "icon-schedule",
  },
  {
    href: "/board/users",
    text: "Users",
    icon: "icon-users",
  },
  {
    href: "/board/settings",
    text: "Settings",
    icon: "icon-settings",
  },
];

const NavBar = () => {
  const segment = usePathname();
  const { status } = useSession();
  const footerLinks = [
    {
      href: "/help",
      text: "Help",
    },
    {
      href: "/contact-us",
      text: "Contact Us",
    },
    {
      href: "/api/auth/signout",
      text: "Signout",
      hide: status === "unauthenticated",
    },
  ];
  return (
    <div className="rounded-2xl bg-secondary h-full w-full px-14 pt-14 flex flex-col">
      <p className="text-primary text-4xl">Board.</p>
      <div className="mt-8 flex-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`w-full flex items-center text-primary text-lg ${
              link.href === segment ? "font-bold " : ""
            }`}
          >
            <span
              className={`icon mr-4 ${
                link.href === segment ? "!w-[22px] !h-[22px]" : ""
              } ${link.icon}`}
            ></span>{" "}
            {link.text}
          </Link>
        ))}
      </div>
      <div className="mb-12">
        {footerLinks.map((link) =>
          link.hide ? null : (
            <Link
              key={link.href}
              href={link.href}
              className={`w-full text-primary text-md ${
                link.href === segment ? "font-bold " : ""
              }`}
            >
              {link.text}
            </Link>
          )
        )}
      </div>
    </div>
  );
};
export default NavBar;
