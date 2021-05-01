import Image from "next/image";
import React from "react";
import { FaEllipsisH, FaRegBookmark, FaRegComment, FaRegHeart, FaShare } from "react-icons/fa";
import styles from "./styles.module.scss";

type Model = {
  username: string;
  bio: string;
  image: string;
  likes: number;
  comments: number;
  avatar: string;
};

type TimeLineProps = {
  models: Model[];
};

const TimeLine = ({ models }: TimeLineProps) => {

  const isOdd = (num: number) => {
    return num % 2;
  }

  return (
    <div className={styles.timelineWrapper}>
      {models.map((model, index) => (
        <article key={model.username} className={[styles.modelPost, (isOdd(index)) ? styles.private : undefined].join(" ")}>
          <Image
            className={styles.postImage}
            src={model.image}
            width={681}
            height={625}
            alt={`${model.username}'s Post`}
            objectFit="cover"
            layout="responsive"
          />
          <div className={styles.postInformationWrapper}>
            <div className={styles.postEngagementWrapper}>
              <div className={styles.postEngagement}>
                <button className={styles.postLikes}>
                  <FaRegHeart />
                  100K
                </button>
                <button className={styles.postComments}>
                  <FaRegComment />
                  100K
                </button>
              </div>
              <div className={styles.postActions}>
                <button>
                  <FaShare />
                </button>
                <button>
                  <FaRegBookmark />
                </button>
                <button>
                  <FaEllipsisH />
                </button>
              </div>
            </div>
            <div className={styles.modelInformationWrapper}>
              <img
                className={styles.modelAvatar}
                src={model.avatar}
                width={50}
                height={50}
                alt={`${model.username}'s Post`}
              />
              <div className={styles.modelBioWrapper}>
                <strong>
                  {model.username}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0881 10.1092C15.18 8.89781 15.7323 7.74625 15.7323 6.67422C15.7323 5.51906 15.3317 4.52319 14.5738 3.79428C14.2646 3.49688 13.9054 3.25672 13.5106 3.07888C13.5262 2.81869 13.5096 1.48791 11.7465 0C12.1189 1.27716 11.7829 2.22016 11.5058 2.72C10.6105 2.75863 9.83659 3.0005 9.20299 3.44175C8.86946 3.67403 8.61399 3.93641 8.41979 4.18691C7.88126 3.52856 6.94149 2.79447 5.40419 2.72019C5.12702 2.22041 4.79091 1.27731 5.16331 0C3.40027 1.48791 3.38367 2.81872 3.39921 3.07888C3.00448 3.25672 2.64525 3.49684 2.33603 3.79428C1.57819 4.52322 1.17757 5.51906 1.17757 6.67422C1.17757 7.94581 1.95466 9.32931 3.48777 10.7919C4.01005 10.6088 4.55376 10.5087 5.08408 10.5087C5.08699 10.5087 5.08991 10.5089 5.09282 10.5089C4.99867 10.4292 4.90473 10.3479 4.81135 10.2651C3.29975 8.92503 2.50073 7.68331 2.50073 6.67425C2.50073 5.05309 3.56418 3.96384 5.14703 3.96384C5.39344 3.96384 5.61857 3.98728 5.82488 4.02866C7.46229 4.4735 8.50083 6.6875 8.50083 6.6875C8.50083 6.6875 9.35612 4.50916 10.9725 4.03963C11.2072 3.99128 11.4694 3.96384 11.7628 3.96384C13.3457 3.96384 14.4091 5.05306 14.4091 6.67425C14.4091 7.68331 13.6101 8.925 12.0984 10.2651C10.5712 11.619 8.89639 12.5697 8.57615 12.7466C8.52101 12.777 8.43947 12.8219 8.36061 12.8652C7.42236 12.2703 6.40582 11.7587 5.08412 11.7587C4.24957 11.7587 3.33339 12.1255 2.65021 12.7067C2.03127 12.4403 1.2739 12.5459 0.764948 13.024C0.494793 13.2778 0.30717 13.7212 0.174458 14.4192C0.0906029 14.8605 0.059178 15.2494 0.057888 15.2658L0 15.9958L0.772258 15.9353C0.789492 15.934 1.19967 15.9013 1.66555 15.8195C2.63112 15.6497 2.96704 15.4194 3.13567 15.261C3.4535 14.9625 3.62855 14.5653 3.62855 14.1425C3.62855 13.9664 3.59775 13.7948 3.5393 13.6328C4.02163 13.2256 4.65373 13.0087 5.08412 13.0087C6.2949 13.0087 7.19911 13.6127 8.24609 14.3121C9.43048 15.1033 10.7729 16 12.7321 16C13.7088 16 14.542 15.7057 15.1415 15.1488C15.6951 14.6347 16 13.9382 16 13.1875C16 11.9867 15.3575 10.9541 14.0881 10.1092ZM2.20854 14.3691C2.11185 14.4362 1.83118 14.5147 1.48815 14.5791C1.55341 14.2586 1.63406 13.9963 1.70465 13.9043C1.84434 13.7798 2.06574 13.7818 2.20275 13.9104C2.26894 13.9726 2.30543 14.0551 2.30543 14.1426C2.30536 14.2274 2.27106 14.3076 2.20854 14.3691ZM12.7321 14.75C11.4426 14.75 10.4889 14.2523 9.55294 13.6497C10.2142 13.2638 11.6619 12.3662 13.0038 11.1766C13.0595 11.1272 13.1142 11.078 13.1682 11.0288C14.1822 11.6555 14.6768 12.3649 14.6768 13.1875C14.6768 13.9653 14.0755 14.75 12.7321 14.75Z" fill="#EE145B"/>
                    <path d="M10.8439 2.8238C9.75949 2.81771 8.72856 3.31749 8.03001 4.18795C7.33585 3.31155 6.30205 2.81034 5.21608 2.8238C3.18033 2.8238 1.53003 4.55556 1.53003 6.69182C1.53003 10.3527 7.61863 13.9271 7.86547 14.0653C7.96507 14.1351 8.09496 14.1351 8.19459 14.0653C8.44143 13.9271 14.53 10.4045 14.53 6.69182C14.53 4.55556 12.8797 2.8238 10.8439 2.8238Z" fill="#EE145B"/>
                  </svg>
                </strong>
                <p>{model.bio}</p>
              </div>
              <button>Enviar mimo</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default TimeLine;
