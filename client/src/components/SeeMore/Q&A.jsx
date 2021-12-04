import React, { useEffect, useState } from "react";
import { Input, Button } from '@chakra-ui/react'
import { postQuestion } from "../../actions";
import { useDispatch, useSelector } from "react-redux"

export default function QyA() {
    const userState = useSelector(state => state.index.user)
    const dispatch = useDispatch()
    const [ question, setQuestion ] = useState('')
    console.log(question)
    
    useEffect(() => {
        dispatch(postQuestion(userState.id))
    })

    function onSubmit(e) {
        e.preventDefault()
        dispatch(postQuestion())
    }

    function onChange(e) {
        e.preventDefault()
        setQuestion(e.target.value)
    }

    function onClick(e) {
        e.preventDefault()
        dispatch(postQuestion())
    }

    return (
        <div class="m-3">
            <h3 class="text-xl font-semibold">Deja tu pregunta</h3>
            <form onSubmit={onSubmit}>
                <Input value={question} onChange={onChange} placeholder='Ingrese su pregunta' size="md"/>
                <Button onClick={onClick}>Enviar</Button>
            </form>
        </div>
    )
}