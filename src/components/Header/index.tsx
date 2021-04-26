import styles from "./styles.module.scss";

import Image from "next/image";
import React from "react";
import SearchInput from "../SearchInput";
import { FaBell } from "react-icons/fa";
import Link from "next/link";
import HeaderUserMenu from "../HeaderUserMenu";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <Link href="/">
        <Image src="/logo-pink.svg" width={95} height={53} alt="Migxs Logo" />
      </Link>
      <SearchInput />
      <div className={styles.userInformations}>
        <FaBell />
        <span>@vismaramartina</span>
        <label htmlFor="menu">
          <Image
            src="https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/164427268_1261188114299123_7204963781793366979_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=US4IXLK6VBgAX8u4Ig3&edm=AABBvjUAAAAA&ccb=7-4&oh=0900ef439e4dd15b71954c6003d505ff&oe=60ACF11C&_nc_sid=83d603"
            width={45}
            height={45}
            alt="Migxs Logo"
          />
        </label>
        <HeaderUserMenu />
      </div>
    </header>
  );
};

export default Header;
