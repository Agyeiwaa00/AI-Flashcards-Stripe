import { SignIn } from "@clerk/nextjs";
import {
    Container,
    AppBar,
    Toolbar,
    Button,
    Link,
    Box,
    Typography,
  } from "@mui/material";
  
  export default function signUpPage() {
    return (
      <Container maxWidth="sm">
        <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
              }}
            >
              FlashCard Saas
            </Typography>

            <Button color="inherit">
              <Link href="/login" passHref>
                Login
              </Link>
            </Button>

            <Button color="inherit">
              <Link href="/signup" passHref>
                Sign Up
              </Link>
            </Button>

          </Toolbar>
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
    )
  }
  