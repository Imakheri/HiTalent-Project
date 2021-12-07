import React from "react";
import Nav from "../Home/Nav";
import Footer from "../Landing/Footer";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
    Box
} from '@chakra-ui/react'


export default function Faq() {
    return (
        <div>
            <Nav/>
                <h1 class="flex justify-center font-semibold  mt-3 text-2xl">FAQ - Preguntas frecuentes</h1>
            <div class="flex flex-col justify-center min-h-screen max-w-md">
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h3>
                        <AccordionButton>
                            <Box flex='1' class="font-semibold" textAlign='left'>
                            Que es HiTalent?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h3>
                        <AccordionPanel pb={4}>
                        Nuestra mision es conectar personas que deseen aprender algo sin necesidad de recurrir a cursos muy caros, conectando con personas de todo el mundo que tengan estas habilidades y esten dispuestas a ensenarlas.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h3>
                        <AccordionButton>
                            <Box flex='1' class="font-semibold" textAlign='left'>
                            Que buscamos?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h3>
                        <AccordionPanel pb={4}>
                        Buscamos personas talentosas y que tengan ganas de compartir su conocimiento con los demas.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h3>
                        <AccordionButton>
                            <Box flex='1' class="font-semibold" textAlign='left'>
                            Como empiezo?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h3>
                        <AccordionPanel pb={4}>
                        Tanto si quieres aprender o ensenar debes registrarte, para eso puedes hacerlo con tu cuenta de Google, Facebook o simplemente con  tu email, luego deberas verificarlo y listo! Ya puedes empezar.
                        Una vez registrado, buscas todas las ofertas, las puedes filtrar según los criterios que mejor se ajusten a vos. ¡Vas a     encontrar alguna, incluso si buscás un trabajo de un sólo día!
                        Si ofrecés trabajo, creá un anuncio indicando lo necesario.
                        </AccordionPanel>
                    </AccordionItem>
                    </Accordion>
            </div>
            <Footer/>
        </div>
    )
}


