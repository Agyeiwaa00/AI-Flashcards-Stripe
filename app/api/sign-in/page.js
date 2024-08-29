import {
  Container,
  AppBar,
  ToolBar,
  Button,
  Link,
  Box,
  Typography,
  SignIn
} from "@mui/material";

export default function signUpPage() {
  return (
    <Container maxWidth="sm">
      <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
        <ToolBar>
          <Typography
            variant="h6"
            sx={{
              flexGrowth: 1,
            }}
          >
            FlashCard Saas
          </Typography>
          <Button colors="inherit">
            <Link href="/login" passhref>
              Login
            </Link>
          </Button>
          <Button colors="inherit">
            <Link href="/login" passhref>
              Sign Up
            </Link>
          </Button>
        </ToolBar>
      </AppBar>
      <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center">
            <Typography>Sign In</Typography>
            <SignIn/>

      </Box>
    </Container>
  );
}
