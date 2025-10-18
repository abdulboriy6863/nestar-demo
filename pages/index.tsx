import { Box, Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack>Header</Stack>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular Properties</Box>
          <Box>Top Agents</Box>
          <Box>Top Properties</Box>
          <Box>Events</Box>
        </Stack>
      </Container>
      <Stack>Footer</Stack>
    </>
  );
}
