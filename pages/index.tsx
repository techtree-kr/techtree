import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";

const Graph2D = dynamic(() => import("../components/Graph2D"), {
  ssr: false,
});

const Home: NextPage = () => {
  const dummyData = {
    nodes: [
      {
        id: "id1",
        name: "name1",
        val: 1,
      },
      {
        id: "id2",
        name: "name2",
        val: 10,
      },
    ],
    links: [
      {
        source: "id1",
        target: "id2",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Graph2D graphData={dummyData} />
    </div>
  );
};

export default Home;
