import styles from "./dashboard.module.scss";

import Head from "next/head";
import { useState } from "react";
import Header from "../../components/Header";
import Stories from "../../components/Stories";
import TimeLine from "../../components/TimeLine";

const Dashboard = () => {
  const [typeSearch, setTypeSearch] = useState<number>(1);

  const models = [
    {
      username: "vismaramartina1",
      avatar:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/164427268_1261188114299123_7204963781793366979_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=US4IXLK6VBgAX8u4Ig3&edm=AABBvjUAAAAA&ccb=7-4&oh=0900ef439e4dd15b71954c6003d505ff&oe=60ACF11C&_nc_sid=83d603",
      bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates, deserunt dolore mollitia repudiandae vel accusantium aspernatur esse itaque officia neque quasi, rerum animi sint dolorem eligendi! Nemo, soluta quia.",
      image:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/162214363_1030255651060676_502797493098531955_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=G05GMjSQpVsAX8N9IjB&edm=AABBvjUBAAAA&ccb=7-4&oh=f097b797a97442a6f52de591ea1c500e&oe=60AAD39B&_nc_sid=83d603",
      likes: 12424,
      comments: 6252,
    },
    {
      username: "vismaramartina2",
      avatar:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/164427268_1261188114299123_7204963781793366979_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=US4IXLK6VBgAX8u4Ig3&edm=AABBvjUAAAAA&ccb=7-4&oh=0900ef439e4dd15b71954c6003d505ff&oe=60ACF11C&_nc_sid=83d603",
      bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates, deserunt dolore mollitia repudiandae vel accusantium aspernatur esse itaque officia neque quasi, rerum animi sint dolorem eligendi! Nemo, soluta quia.",
      image:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/162214363_1030255651060676_502797493098531955_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=G05GMjSQpVsAX8N9IjB&edm=AABBvjUBAAAA&ccb=7-4&oh=f097b797a97442a6f52de591ea1c500e&oe=60AAD39B&_nc_sid=83d603",
      likes: 12424,
      comments: 6252,
    },
    {
      username: "vismaramartina3",
      avatar:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/164427268_1261188114299123_7204963781793366979_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=US4IXLK6VBgAX8u4Ig3&edm=AABBvjUAAAAA&ccb=7-4&oh=0900ef439e4dd15b71954c6003d505ff&oe=60ACF11C&_nc_sid=83d603",
      bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates, deserunt dolore mollitia repudiandae vel accusantium aspernatur esse itaque officia neque quasi, rerum animi sint dolorem eligendi! Nemo, soluta quia.",
      image:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/162214363_1030255651060676_502797493098531955_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=G05GMjSQpVsAX8N9IjB&edm=AABBvjUBAAAA&ccb=7-4&oh=f097b797a97442a6f52de591ea1c500e&oe=60AAD39B&_nc_sid=83d603",
      likes: 12424,
      comments: 6252,
    },
    {
      username: "vismaramartina4",
      avatar:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/164427268_1261188114299123_7204963781793366979_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=US4IXLK6VBgAX8u4Ig3&edm=AABBvjUAAAAA&ccb=7-4&oh=0900ef439e4dd15b71954c6003d505ff&oe=60ACF11C&_nc_sid=83d603",
      bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates, deserunt dolore mollitia repudiandae vel accusantium aspernatur esse itaque officia neque quasi, rerum animi sint dolorem eligendi! Nemo, soluta quia.",
      image:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/162214363_1030255651060676_502797493098531955_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=G05GMjSQpVsAX8N9IjB&edm=AABBvjUBAAAA&ccb=7-4&oh=f097b797a97442a6f52de591ea1c500e&oe=60AAD39B&_nc_sid=83d603",
      likes: 12424,
      comments: 6252,
    },
    {
      username: "vismaramartina5",
      avatar:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/164427268_1261188114299123_7204963781793366979_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=US4IXLK6VBgAX8u4Ig3&edm=AABBvjUAAAAA&ccb=7-4&oh=0900ef439e4dd15b71954c6003d505ff&oe=60ACF11C&_nc_sid=83d603",
      bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates, deserunt dolore mollitia repudiandae vel accusantium aspernatur esse itaque officia neque quasi, rerum animi sint dolorem eligendi! Nemo, soluta quia.",
      image:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/162214363_1030255651060676_502797493098531955_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=G05GMjSQpVsAX8N9IjB&edm=AABBvjUBAAAA&ccb=7-4&oh=f097b797a97442a6f52de591ea1c500e&oe=60AAD39B&_nc_sid=83d603",
      likes: 12424,
      comments: 6252,
    },
    {
      username: "vismaramartina6",
      avatar:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/164427268_1261188114299123_7204963781793366979_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=US4IXLK6VBgAX8u4Ig3&edm=AABBvjUAAAAA&ccb=7-4&oh=0900ef439e4dd15b71954c6003d505ff&oe=60ACF11C&_nc_sid=83d603",
      bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates, deserunt dolore mollitia repudiandae vel accusantium aspernatur esse itaque officia neque quasi, rerum animi sint dolorem eligendi! Nemo, soluta quia.",
      image:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/162214363_1030255651060676_502797493098531955_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=G05GMjSQpVsAX8N9IjB&edm=AABBvjUBAAAA&ccb=7-4&oh=f097b797a97442a6f52de591ea1c500e&oe=60AAD39B&_nc_sid=83d603",
      likes: 12424,
      comments: 6252,
    },
    {
      username: "vismaramartina7",
      avatar:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/164427268_1261188114299123_7204963781793366979_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=US4IXLK6VBgAX8u4Ig3&edm=AABBvjUAAAAA&ccb=7-4&oh=0900ef439e4dd15b71954c6003d505ff&oe=60ACF11C&_nc_sid=83d603",
      bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates, deserunt dolore mollitia repudiandae vel accusantium aspernatur esse itaque officia neque quasi, rerum animi sint dolorem eligendi! Nemo, soluta quia.",
      image:
        "https://instagram.fvix12-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/162214363_1030255651060676_502797493098531955_n.jpg?tp=1&_nc_ht=instagram.fvix12-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=G05GMjSQpVsAX8N9IjB&edm=AABBvjUBAAAA&ccb=7-4&oh=f097b797a97442a6f52de591ea1c500e&oe=60AAD39B&_nc_sid=83d603",
      likes: 12424,
      comments: 6252,
    },
  ];

  return (
    <>
      <Head>
        <title>Migxs | Painel</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <div className={styles.typeSearchChoose}>
          <span
            onClick={() => setTypeSearch(1)}
            className={typeSearch === 1 ? styles.activeType : undefined}
          >
            Seguindo
          </span>
          <span
            onClick={() => setTypeSearch(2)}
            className={typeSearch === 2 ? styles.activeType : undefined}
          >
            Aleatório
          </span>
        </div>
        <Stories models={models} />
        <TimeLine models={models} />
      </main>
    </>
  );
};

export default Dashboard;
