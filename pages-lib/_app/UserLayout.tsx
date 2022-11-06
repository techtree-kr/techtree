import dynamic from "next/dynamic";
import { FunctionComponent, ReactNode, useMemo, useState } from "react";
import { techTreeGraphData } from "@/constants/roadmap";
import { Box, Typography, Button } from "@mui/material";
import clsx from "clsx";

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout: FunctionComponent<UserLayoutProps> = (props) => {
  const { children } = props;
  const [isTechTreeMini, setIsTechTreeMini] = useState(false);
  const graphSize = useMemo(() => {
    return isTechTreeMini ? 224 : undefined;
  }, [isTechTreeMini]);

  const handleTransition = () => {
    setIsTechTreeMini(true);
  };

  return (
    <>
      <div
        className={clsx(
          "fixed z-0 left-0 bottom-0 w-screen h-screen transition-[height,width] duration-700",
          isTechTreeMini && "w-56 h-56 border-2"
        )}
      >
        <ForceGraph2D
          graphData={techTreeGraphData}
          width={graphSize}
          height={graphSize}
        />
      </div>
      <div className="flex justify-between p-4 h-screen z-999">
        {children}
        <Box className="w-1/3 p-4" sx={{ boxShadow: 2, borderRadius: 1 }}>
          <Typography variant="h3">Thread</Typography>
          <Button onClick={handleTransition}>Transition~~</Button>
        </Box>
      </div>
    </>
  );
};

export default UserLayout;
