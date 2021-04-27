import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useRef } from "react";

type Model = {
  username: string;
  avatar: string;
};

type StoriesProps = {
  models: Model[];
};

const Stories = ({ models }: StoriesProps) => {
  const storiesRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    storiesRef.current.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - storiesRef.current.offsetLeft;
      scrollLeft = storiesRef.current.scrollLeft;
    });
    storiesRef.current.addEventListener("mouseleave", () => {
      isDown = false;
    });
    storiesRef.current.addEventListener("mouseup", () => {
      isDown = false;
    });
    storiesRef.current.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - storiesRef.current.offsetLeft;
      const walk = (x - startX) * 1;
      storiesRef.current.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }, []);

  return (
    <div className={styles.storiesWrapper}>
      <FaArrowLeft />
      <section ref={storiesRef} className={styles.storySection}>
        <div className={styles.createStory}>
          <Image src={models[0].avatar} width={150} height={150} />
        </div>

        {models.map((model) => (
          <div key={model.username} className={styles.story}>
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
      </section>

      <FaArrowRight />
    </div>
  );
};

export default Stories;
