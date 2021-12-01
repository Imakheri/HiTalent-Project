import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Nav from "./Nav";
import Footer from '../Landing/Footer'
import Categories from "./Categories";
import TalentCard from "./TalentCard";
import { getTalents } from "../../actions";

export default function Home() {
    let skill = useSelector((state) => state.index.filteredTalents)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getTalents())
    }, [dispatch])
    
    return(
        <div className="home_container">
            <Nav/>
            <div class="flex">
                {skill?.length === 0 ? <div className="not_found">not found</div> : (skill?.map((talent) => {
                    return (
                        <TalentCard 
                        key={talent.id}
                        id={talent.id}
                        username={talent.username}
                        title={talent.title} 
                        description={talent.description}
                        image={talent.image}
                        cost={talent.cost}
                        />
                        )
                    }))}
            </div>
            <Categories/>
            <Footer/>
        </div>
    )
}