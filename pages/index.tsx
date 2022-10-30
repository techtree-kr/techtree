import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
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
      {
        id: "id3",
        name: "name2",
        val: 10,
      },
      {
        id: "id4",
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
      <ForceGraph2D graphData={dummyData} />
    </div>
  );
};

export default Home;
