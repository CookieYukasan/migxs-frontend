import Image from "next/image";
import styles from "./styles.module.scss";

type Model = {
  username: string;
  bio: string;
  image: string;
  likes: number;
  comments: number;
};

type TimeLineProps = {
  models: Model[];
};

const TimeLine = ({ models }: TimeLineProps) => {
  return (
    <div className={styles.timelineWrapper}>
      {models.map((model) => (
        <article key={model.username} className={styles.modelPost}>
          <Image
            src={model.image}
            width={681}
            height={625}
            alt={`${model.username}'s Post`}
            objectFit="cover"
          />
          <div className={styles.modelPostInformations}></div>
        </article>
      ))}
    </div>
  );
};

export default TimeLine;
