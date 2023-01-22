import { FullWidthArticle } from "@components/home/full-width-article";
import { Row5CirclesWBg } from "@components/home/row-5-circles-bg";
import { Rows3X3 } from "@components/home/rows-3x3";
import { Hero } from "../components/home/hero";
import { Row2StoriesWBg } from "../components/home/row-2-stories-wbg";
import { Row2X1Inverted } from "../components/home/row-2x1-inverted";
import { Row3Video } from "../components/home/row-3-video";
import { Row4Reviews } from "../components/home/row-4-reviews";
import { Row4WBg } from "../components/home/row-4-wbg";
import { Rows1x3 } from "../components/home/rows-1x3";

export const Home = () => {
  return (
    <>
      <Hero />
      <Row5CirclesWBg />
      <Rows1x3 />
      <Row4WBg />
      <FullWidthArticle />
      <Row2X1Inverted />
      <Row2StoriesWBg />
      <Row4Reviews />
      <Rows3X3 />
      <Row3Video />
    </>
  );
};
