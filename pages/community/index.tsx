import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "../libs/components/layout/LayoutBasic";

const Community: NextPage = () => {
  console.log("Community Component Page Router");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      {" "}
      COMMUNITY{" "}
      <button onClick={() => alert("Hello")} style={{ margin: "30px" }}>
        Pressme
      </button>{" "}
    </div>
  );
};

export default withLayoutBasic(Community);
