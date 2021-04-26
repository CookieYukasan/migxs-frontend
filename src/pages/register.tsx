import Link from "next/link";
import Head from "next/head";
import { FaRegCircle, FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";

import styles from "./auth.module.scss";
import { useState } from "react";

export default function HomePage() {
  const [visiblePassword, setVisibilePassword] = useState(false);
  const [termsOfUseChecked, setTermsOfUseChecked] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Migxs | Register</title>
      </Head>
      <div className={styles.heading}>
        <img src="/logo-pink.svg" alt="Migxs Logo" />
        <span>
          Junta-se a comunidade, tenha acesso a conteúdo exclusivo, monetize sua
          influência.
        </span>
      </div>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="username">Nome de usuário</label>
          <input id="username" type="text" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="birthday">Data de nascimento</label>
          <input id="birthday" type="date" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" />
        </div>
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
        <div className={styles.termsOfUse}>
          {termsOfUseChecked ? (
            <FaCheckCircle
              color="#EE145B"
              size="38px"
              onClick={() => setTermsOfUseChecked(!termsOfUseChecked)}
            />
          ) : (
            <FaRegCircle
              size="38px"
              onClick={() => setTermsOfUseChecked(!termsOfUseChecked)}
            />
          )}
          <p>
            Criar uma conta significa que você{" "}
            <strong>
              concorda com nossos Termos de Serviço, Política de Privacidade
            </strong>
          </p>
        </div>
        <button type="submit">Cadastrar</button>
        <span>
          Já tem uma conta?{" "}
          <Link href="/">
            <strong>Entre agora</strong>
          </Link>
        </span>
      </form>
    </div>
  );
}
