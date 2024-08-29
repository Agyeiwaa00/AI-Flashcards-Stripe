"use client"
import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  Grid,
} from "@mui/material";
import {
  SignedIn,
  SignedOut, 
  userButton} from '@clerk/nextjs'
import Head from "next/head";

export default function Home() {
  const handleSubmit = async ()=> {
    const checkoutSession = await fetch('/api/checkout_session', {
      method:POST,
      headers: {
      origin:'http://localhost:3000',
      },
    })

    const checkoutSessionJson = await checkoutSession.json()

    if(checkoutSession.statusCode ===500){
      console.error(checkoutSession.message)
    }

    const stripe = await getStripe()
    const {error}= await stripe.redirectToCheckout ({
      sessionId: checkoutSessionJson.id,
    })

    if(error){
      console.warn(error.message)
    }
  }
  return (
    <Container maxWidth="100vw">
      <Head>
        <title> Flashcard Saas</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>
      <AppBar postion="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {" "}
            Flash Card Saas
          </Typography>
          <SignedOut>
            <Button color="inherit" href="=/sign-in">
              {" "}
              Log In{" "}
            </Button>
            <Button color="inherit" href="/sign-up">
              {" "}
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <userButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to Flashcard{" "}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {" "}
          The easiet way to make flashcard from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{ nt: 2 }}>
          {" "}
          Get Started
        </Button>
      </Box>

      <Box sx={{my:6}}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item sx={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Easy Text Input
            </Typography>
            <Typography>
              {" "}
              Simply put your test and let our software do the rest. Creating
              next flashcard has never been Easy
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Smart Flashcards{" "}
            </Typography>
            <Typography>
              {""}
              Our AI intelligently breaks down your text into concise
              flashcards, perfert for studying
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>
              {""}
              Access your flashcards from any device, at any time. Study on the
              go with ease
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ ny: 6, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Pricing{" "}
        </Typography>
        <Grid container spacing={12}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h5">Basic</Typography>
              <Typography variant="h6" gutterBottom>
                $5/month
              </Typography>
              <Typography>
                {""}
                Access to basics flascard Features
              </Typography>
              <Button variant="contained" color="primary">
                Choose Basics
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6">Smart Flashcards </Typography>
              <Typography>
                {""}
                Our AI intelligently breaks down your text into concise
                flashcards, perfert for studying
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart Flashcards </Typography>
            <Typography>
              {""}
              Our AI intelligently breaks down your text into concise
              flashcards, perfert for studying
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            {" "}
            Pro
          </Typography>
          <Typography>$10/month</Typography>
          <Typography>
            {""}
            Access Pro flash features and limited storage with priority support
            <Button variant="contained" color="primary" sx={{nt:2
            }} onClick={{handleSubmit}}>Choose Pro</Button>
          </Typography>
        </Grid>
      </Box>
    </Container>
  );
}
