import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  FaCommentDots,
  FaHome,
  FaPlus,
  FaSearch,
  FaSignOutAlt,
  FaUserCog,
} from "react-icons/fa";
import styles from "./styles.module.scss";

export default function HeaderUserMenu() {
  return (
    <>
      <input
        className={styles.menuInput}
        id="menu"
        type="checkbox"
        name=""
        value=""
      />
      <div className={styles.menuWrapper}>
        <ul>
          <LiOption pathName="/dashboard">
            <FaHome />
            Pagina inicial
          </LiOption>
          <LiOption pathName="/account">
            <FaUserCog />
            Minha conta
          </LiOption>
          <LiOption pathName="/chats">
            <FaCommentDots />
            Minha conversa
          </LiOption>
          <LiOption pathName="/create-post">
            <FaPlus />
            Criar postagem
          </LiOption>
          <LiOption pathName="/explore">
            <FaSearch />
            Pesquisar
          </LiOption>
          <LiOption pathName="/logout">
            <FaSignOutAlt />
            Sair do migxs
          </LiOption>
        </ul>
      </div>
    </>
  );
}

type LiOptionProps = {
  pathName: string;
  children: React.ReactNode;
};

const LiOption = ({ pathName, children }: LiOptionProps) => {
  const router = useRouter();

  return (
    <Link href={pathName}>
      <li className={router.pathname == pathName ? styles.activeMenu : undefined}>
        {children}
      </li>
    </Link>
  );
};
