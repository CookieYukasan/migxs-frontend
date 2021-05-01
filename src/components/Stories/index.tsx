import styles from "./styles.module.scss";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, MouseEvent, useEffect } from "react";
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
  let isDown = false;
  let startX;

  const handleModelStoryClick = (e: MouseEvent, type: string) => {    
    if(type === 'next') {
      scrollLeft = storiesRef.current.scrollLeft;
      storiesRef.current.scrollLeft = scrollLeft + 45;
    } else if (type === 'prev') {
      scrollLeft = storiesRef.current.scrollLeft;
      storiesRef.current.scrollLeft = scrollLeft - 45;
    }
  }

  useEffect(() => {
    function handleScrollStories(x){
      if(x.matches){
        storiesRef.current.addEventListener('touchstart', (e) => {
          isDown = true;
          startX = e.touches[0].pageX - storiesRef.current.offsetLeft;
          scrollLeft = storiesRef.current.scrollLeft;
        });
        storiesRef.current.addEventListener('touchend', () => {
          isDown = false;
        });
        storiesRef.current.addEventListener('touchmove', (e) => {
          e.preventDefault();
          const x = e.touches[0].clientX - storiesRef.current.offsetLeft;
          const walk = (x - startX) * 1;
          storiesRef.current.scrollLeft = scrollLeft - walk;
        });
      }else{
        storiesRef.current.removeEventListener('mousemove', null);
        storiesRef.current.removeEventListener('mousedown', null);
        storiesRef.current.removeEventListener('mouseleave', null);
      }
    }

    var x = window.matchMedia("(max-width: 768px)")
    handleScrollStories(x)
  }, []);

  return (
    <div className={styles.storiesWrapper}>
      <FaArrowLeft onClick={(e) => handleModelStoryClick(e, 'prev')} />
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

      <FaArrowRight onClick={(e) => handleModelStoryClick(e, 'next')} />
    </div>
  );
};

export default Stories;
