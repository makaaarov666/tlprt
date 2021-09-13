import React from "react";

import { string, number } from "prop-types";

import Table from "components/citypage/Table";
import Chart from "components/citypage/Chart";
import Map from "components/citypage/Map";
import About from "components/citypage/About";
import ContentItem from "components/citypage/ContentItem";
import Menu from "components/citypage/Menu";

import styles from "./styles.module.scss";

const CityLayout = ({ nameCity, image }) => (
  <>
    <div className={styles.menu}>
      <Menu />
    </div>
    <div className={styles.header}>
      <img className={styles.img} src={image}></img>
      <div className={styles.text}>
        <h1 className={styles.title}>
          <span>{nameCity}</span>
        </h1>
      </div>
    </div>
    <div className={styles.content}>
      <ContentItem title={"About"} id="about">
        <About />
      </ContentItem>
      <ContentItem title={"Chart"} id="chart">
        <Chart />
      </ContentItem>
      <ContentItem title={"Table"} id="table">
        <Table />
      </ContentItem>
      <ContentItem title={"Map"} id="map">
        <Map />
      </ContentItem>
    </div>
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
