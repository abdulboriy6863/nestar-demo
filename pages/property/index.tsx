import { Container } from "@mui/material";
import withLayoutBasic from "../libs/components/layout/LayoutBasic";

const PropertyList = () => {
  console.log("Property Component Page Router");

  return (
    <>
      <Container>PROPERTY LIST</Container>
    </>
  );
};

export default withLayoutBasic(PropertyList);
