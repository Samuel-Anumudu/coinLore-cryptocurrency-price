"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:flex lg:min-h-screen lg:w-64 lg:flex-col">
      <div className="bg-gray-800 p-4 text-white lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-6 w-6"
                fill="white"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-6 w-6"
                fill="white"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            </div>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-800 opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed inset-0 z-50 min-h-screen bg-gray-800 text-white transition-transform duration-300 ease-in-out lg:static ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <nav className="flex flex-col p-4">
          <Link href="" className="my-2 rounded p-2 hover:bg-gray-700">
            Dashboard
          </Link>
          <Link href="" className="my-2 rounded p-2 hover:bg-gray-700">
            Profile
          </Link>
          <Link href="" className="my-2 rounded p-2 hover:bg-gray-700">
            Settings
          </Link>
          <Link href="" className="my-2 rounded p-2 hover:bg-gray-700">
            Logout
          </Link>
        </nav>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="h-6 w-6"
            fill="white"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </aside>
    </div>
  );
}
