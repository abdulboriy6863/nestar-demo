import { Stack } from "@mui/material";
import Head from "next/head";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <Stack id="pc-wrap">
          <Stack> Header Home</Stack>

          <Stack id="main">
            <Component {...props} />
          </Stack>
          <Stack>Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;
