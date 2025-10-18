import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutBasic from "../libs/components/layout/LayoutBasic";

const PropertyDetail: NextPage = () => {
  console.log("Property Component Page Router");

  return (
    <>
      <Container>PROPERTY DETAIL</Container>
    </>
  );
};

export default withLayoutBasic(PropertyDetail);
