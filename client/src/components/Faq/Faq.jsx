import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
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
import axios from "axios";


export default function Faq(){

    const [input, setInput] = useState({
        name: '',
        email: '',
        message: ''
    })

    function handleOnChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    function handleOnSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3001/message', input)
    }

    return (
        <div>
            <Nav/>
            <h1 className="flex bg-semilight justify-center font-semibold pt-3 text-2xl">FAQ - Preguntas frecuentes</h1>
            <div className='flex flex-row bg-semilight'>
                <div className='flex flex-row items-center'>
                    <div class="flex flex-col justify-center min-h-screen max-w-md">
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem>
                                <h3>
                                <AccordionButton>
                                    <Box flex='1' class="font-semibold" textAlign='left'>
                                    ¿Qué es HiTalent?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                Nuestra mision es conectar personas que deseen aprender algo sin necesidad de recurrir a cursos muy caros, acortando la distancia entre personas de todo el mundo que tengan estas habilidades y esten dispuestas a enseñarlas.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h3>
                                <AccordionButton>
                                    <Box flex='1' class="font-semibold" textAlign='left'>
                                    ¿Qué buscamos?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                Buscamos personas talentosas y que tengan ganas de compartir su conocimiento con los demas. Así como gente con inagotable interés en aprender.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h3>
                                <AccordionButton>
                                    <Box flex='1' class="font-semibold" textAlign='left'>
                                    ¿Cómo empiezo?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                Lo primero que debes hacer, tanto si quieres aprender o enseñar, es registrarte. Esto puedes hacerlo con tu cuenta de Google, Facebook o simplemente con tu dirección correo electrónico. Despueś deberás verificarla y ¡listo! Ya puedes comenzar.
                                Una vez registrado tendrás a tu alcance cualquier talento, puedes filtrarlos según los criterios que se ajusten mejor a tu búsqueda. Si ofrecés algún talento, crea una publicación ofreciendo la información necesaria, sin ningún tipo de costo.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h3>
                                <AccordionButton>
                                    <Box flex='1' class="font-semibold" textAlign='left'>
                                    ¿Cuáles son los beneficios?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                Todas las transacciones realizadas por medio de la plataforma son 100% seguras. Ya que a diferencia de otros sitios, el intercambio monetario sólo será despachado hasta que ambas partes se encuentren de acuerdo y conforme.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h3>
                                <AccordionButton>
                                    <Box flex='1' class="font-semibold" textAlign='left'>
                                    ¿Cómo funciona el servicio?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                En HiTalent nos encargamos de acercar a la gente interesada en aprender nuevas habilidades y quienes ya las dominan. Una vez que la enseñanza de ha llevado a cabo, quien aprendió dicho talento, puede hacer una reseña sobre su experiencia. Por lo tanto, quienes enseñen de una mejor manera, podrán aspirar a un mayor número de aprendizes.
                                </AccordionPanel>
                            </AccordionItem>
                            
                            <AccordionItem>
                                <h3>
                                <AccordionButton>
                                    <Box flex='1' class="font-semibold" textAlign='left'>
                                    ¿Cuáles son los métodos de pago que acepta HiTalent?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                La forma por defecto para hacer transferencias monetarias es Mercadopago, ya que esta plataforma permite agregar cualquier tipo de tarjeta de débito o crédito, así como usar MercadoCrédito.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h3>
                                <AccordionButton>
                                    <Box flex='1' class="font-semibold" textAlign='left'>
                                    ¿Por qué las cuotas son definitas en dólares?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h3>
                                <AccordionPanel pb={4}>
                                Los precios son fíjados en dólares ya que es la moneda más conocida y usada en la mayoría de los países. ¡Existe mucha gente talentosa y llena de ganas de aprender alrededor de todo el mundo!
                                </AccordionPanel>
                            </AccordionItem>

                            </Accordion>
                    </div>
                    <div className='flex flex-col border border-purple'>
                        <div>
                            <h1>Contáctanos</h1>
                            <h4>Si tienes alguna duda, no dudes en escribírnosla.</h4>
                            <form onSubmit={(e) => handleOnSubmit(e)}>
                                <div>
                                    <label>Nombre:</label>
                                    <input type='text' value={input.name} placeholder='Escribe tu nombre...' onChange={(e) => handleOnChange(e)} require/>
                                </div>
                                <div>
                                    <label>Dirección de correo electŕonico:</label>
                                    <input type='email' value={input.email} placeholder='Introduce tu correo electrónico' onChange={(e) => handleOnChange(e)} require/>
                                </div>
                                <div>
                                    <label>Tu mensaje:</label>
                                    <textarea value={input.message} placeholder='Escribe tu mensaje aquí...' onChange={(e) => handleOnChange(e)} require/>
                                </div>
                                <button type='submit'>Enviar</button>
                            </form>
                            <h1>O si preferís, podés enviarnos un mail a: hitalent09@gmail.com</h1>
                        </div>
                    </div>
                    <div className=''>
                        <Link to="/home">
                            <button className="btn-custom btn-colors">Volver</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
