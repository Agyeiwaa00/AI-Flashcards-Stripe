'use client'
import {useUser}  from '@clerk/nextjs'
import { use, useEffect, useState} from 'react'

import { collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { CardActionArea, Container, Grid, Typography, Card, CardContent } from '@mui/material'

export default function FlashCard (){
    const {isLoaded, isSigned, user} = useUser ()
    const[flashcards, setFlashcards] = useState([])
    const router = useRouter

    useEffect(() => {
        async function getFlashcards() {
            if(!user) return
            const docRef = doc(collection(db, 'users'), user.id)
            docSnap= await getDoc(docRef)

            if (docSnap.exists()) {
                const collections = docSnap.data().flashcards || []

                console.log(collections)
                setFlashcards(collections)
            } else{
                await setDoc(docRef, {flashcards:[]})
            }
        }
        getFlashcards()
    }, [user])

     if(!isLoaded || !isSigned) {
        return <></>
     }
     const handleCardClick =(id) => {
        router.push()('/flashcard?id=${id')
     }
      return <Container maxWidth="100vw">
        <Grid 
        container
         spacing={3}
            sx={{
                nt: 4, 
            }}
            >
                (flashcards.map((flashcard, index) => {
                    <Grid item xs= {12} sm= {6} md={4} key={index}>
                        <Card>
                            <CardActionArea
                            onClick={() => {handleClick(id)}} >
                            <CardContent>
                                <Typography variant ="h6">
                                   {flashcards.name} 
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                        }))
            </Grid>
        }) {
      
        }
        </Grid>
      </Container>
}