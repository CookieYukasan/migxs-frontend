import styles from "./styles.module.scss";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, MouseEvent } from "react";
import Link from "next/link";

type Model = {
  username: string;
  avatar: string;
};

type StoriesProps = {
  models: Model[];
};

const Stories = ({ models }: StoriesProps) => {
  const storiesRef = useRef<HTMLDivElement>(null);
  let scrollLeft;

  const handleModelStoryClick = (e: MouseEvent, type: string) => {    
    if(type === 'next') {
      scrollLeft = storiesRef.current.scrollLeft;
      storiesRef.current.scrollLeft = scrollLeft + 30;
    } else if (type === 'prev') {
      scrollLeft = storiesRef.current.scrollLeft;
      storiesRef.current.scrollLeft = scrollLeft - 30;
    }
  }

  return (
    <div className={styles.storiesWrapper}>
      <FaArrowLeft onClick={(e) => handleModelStoryClick(e, 'prev')} />
      <section ref={storiesRef} className={styles.storySection}>
        <div className={styles.createStory}>
          <Image src={models[0].avatar} width={150} height={150} />
        </div>

        {models.map((model) => (
          <div key={model.username} className={styles.story}>
            <Link href={`/${model.username}`}>
              <Image
                src={model.avatar}
                width={50}
                height={50}
                alt={`${model.username}'s Stories`}
              />
            </Link>
          </div>
        ))}
      </section>

      <FaArrowRight onClick={(e) => handleModelStoryClick(e, 'next')} />
    </div>
  );
};

export default Stories;
