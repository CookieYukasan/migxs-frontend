import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./styles.module.scss";

type Model = {
  username: string;
  avatar: string;
};

type StoriesProps = {
  models: Model[];
};

const Stories = ({ models }: StoriesProps) => {
  return (
    <div className={styles.storiesWrapper}>
      <FaArrowLeft />
      <div className={styles.createStory}>
        <Image src={models[0].avatar} width={150} height={150} />
      </div>

      {models.map((model) => (
        <div key={model.username} className={styles.storyImage}>
          <Link href={`/model/${model.username}`}>
            <Image
              src={model.avatar}
              width={50}
              height={50}
              alt={`${model.username}'s Stories`}
            />
          </Link>
        </div>
      ))}
      <FaArrowRight />
    </div>
  );
};

export default Stories;
