import { useRouter } from "next/router";
// import fs from "fs";

const MarkdownPage = () => {
  const router = useRouter();
  // const readme = fs.readFileSync("README.md", "utf-8");

  return (
    <div>
      <div>{router.asPath}</div>
      {/* <div>{readme}</div> */}
    </div>
  );
};

export default MarkdownPage;
