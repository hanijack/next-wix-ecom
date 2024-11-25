"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { WixClientContext } from "../context/wixContext";
import Cookies from "js-cookie";
import Cart from "./Cart";
import Link from "next/link";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState(false);

  const router = useRouter();
  const path = usePathname();

  const wix = useContext(WixClientContext);
  const logged = wix.auth.loggedIn();

  const ProfileHandler = () => {
    if (!logged) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };
  const logoutHandler = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wix.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  return (
    <div className="flex justify-between items-center gap-4 relative">
      <Image
        src="/profile.png"
        alt="profile-logo"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={ProfileHandler}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={logoutHandler}>
            {isLoading ? "Logging out" : "Logout"}
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="notification-logo"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer "
        onClick={()=>setCart(prev => !prev)}
      >
        <Image src="/cart.png" alt="cart-logo" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#F35C7A] rounded-full text-white text-sm flex items-center justify-center">
          {/* {counter} */}
        </div>
      </div>
      {cart && <Cart />}
    </div>
  );
};

export default NavIcons;
