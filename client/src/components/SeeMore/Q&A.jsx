import React, { useEffect } from "react";
import { Input, Button } from '@chakra-ui/react'
import { postQuestion } from "../../actions";
import { useDispatch, useSelector } from "react-redux"

export default function QyA() {
    const userState = useSelector(state => state.index.user)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(postQuestion(userState.id))
    })

    function onSubmit(e) {
        e.preventDefault()
        dispatch(postQuestion())
    }

    return (
        <div>
            <h3>Deja tu pregunta</h3>
            <form onSubmit={onSubmit}>
                <Input placeholder='Ingrese su pregunta' size="md"/>
                <Button>Enviar</Button>
            </form>
        </div>
    )
}