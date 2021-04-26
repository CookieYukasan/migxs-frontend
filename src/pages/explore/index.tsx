import styles from "../dashboard/dashboard.module.scss";

import Head from "next/head";
import { useState } from "react";
import Header from "../../components/Header";

const Dashboard = () => {
  const [typeSearch, setTypeSearch] = useState<number>(1);

  return (
    <>
      <Head>
        <title>Migxs | Explorar</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <div className={styles.typeSearchChoose}>
          <span
            onClick={() => setTypeSearch(1)}
            className={typeSearch === 1 && styles.activeType}
          >
            Seguindo
          </span>
          <span
            onClick={() => setTypeSearch(2)}
            className={typeSearch === 2 && styles.activeType}
          >
            Aleatório
          </span>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
