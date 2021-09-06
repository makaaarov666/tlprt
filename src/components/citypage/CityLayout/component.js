import React from "react";

import { string, number } from "prop-types";

import Table from "components/citypage/Table";
import Chart from "components/citypage/Chart";
import Maps from "components/citypage/Map";
import About from "components/citypage/About";
import ContentItem from "components/citypage/ContentItem";

import styles from "./styles.module.scss";

const CityLayout = ({ nameCity, image }) => (
  <>
    <div className={styles.header}>
      <img className={styles.img} src={image}></img>
      <div className={styles.text}>
        <h1 className={styles.title}>
          <span>{nameCity}</span>
        </h1>
      </div>
    </div>
    <div className={styles.content}>
      <ContentItem title={"About"}>
        <About />
      </ContentItem>
      <ContentItem title={"Chart"}>
        <Chart />
      </ContentItem>
      <ContentItem title={"Table"}>
        <Table />
      </ContentItem>
      <ContentItem title={"Map"}>
        <Maps />
      </ContentItem>
    </div>
    <div className={styles.menu}></div>
  </>
);

CityLayout.propTypes = {
  population: number,
  nameCity: string,
  cityName: string,
  country: string,
  adminDivision: string,
  image: string,
};

export default CityLayout;
