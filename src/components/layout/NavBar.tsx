"use client";
import Link from "next/link";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function NavBar() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-teal-600 h-20 z-10 fixed w-full text-white flex items-center justify-between px-12">
        <Link
          href="/"
          className="text-3xl no-underline font-semibold text-white"
        >
          HoverSprite
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/orders"
            className="text-white flex items-center gap-1 no-underline"
          >
            <ClipboardDocumentListIcon className="w-6 h-6"></ClipboardDocumentListIcon>
            <div>Orders</div>
          </Link>
          <Link className="text-white no-underline" href="/login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
