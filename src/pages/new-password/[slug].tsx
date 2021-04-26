import styles from "../auth.module.scss";

import Link from "next/link";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const NewPassword = () => {
  const router = useRouter();
  const [visiblePassword, setVisibilePassword] = useState(false);
  const [visiblePasswordTwo, setVisibilePasswordTwo] = useState(false);

  const handleChangePassword = (e: FormEvent) => {
    e.preventDefault();
    alert("heey");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Migxs | Recuperar Senha</title>
      </Head>
      <div className={styles.heading}>
        <img src="/logo-pink.svg" alt="Migxs Logo" />
        <span>
          Junta-se a comunidade, tenha acesso a conteúdo exclusivo, monetize sua
          influência.
        </span>
      </div>
      <form onSubmit={handleChangePassword} className={styles.form}>
        <div
          className={[styles.inputContainer, styles.inputPassword].join(" ")}
        >
          <label htmlFor="password">Senha</label>
          <input id="password" type={!visiblePassword ? "password" : "text"} />
          {!visiblePassword ? (
            <FaEye onClick={() => setVisibilePassword(!visiblePassword)} />
          ) : (
            <FaEyeSlash onClick={() => setVisibilePassword(!visiblePassword)} />
          )}
        </div>
        <div
          className={[styles.inputContainer, styles.inputPassword].join(" ")}
        >
          <label htmlFor="password">Confirmar senha</label>
          <input
            id="password"
            type={!visiblePasswordTwo ? "password" : "text"}
          />
          {!visiblePasswordTwo ? (
            <FaEye
              onClick={() => setVisibilePasswordTwo(!visiblePasswordTwo)}
            />
          ) : (
            <FaEyeSlash
              onClick={() => setVisibilePasswordTwo(!visiblePasswordTwo)}
            />
          )}
        </div>
        <button type="submit">Alterar</button>
        <span>
          Lembrou sua senha?{" "}
          <Link href="/">
            <strong>Entre agora</strong>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default NewPassword;
