import React from "react";
import Nav from "./Nav";
import TALENTS from './MOCKUPhOME'
import Footer from '../Landing/Footer'
import Categories from "./Categories";
import TalentCard from "./TalentCard";

export default function Home() {

    return(
        <div className="home_container">
            <Nav/>
            <div class="flex">
                {TALENTS.length === 0 ? <div className="not_found">not found</div> : (TALENTS?.map((talent) => {
                    return (
                        <TalentCard 
                            key={talent.user.id}
                            id={talent.user.id}
                            name={talent.user.title} 
                            description={talent.user.description}
                            image={talent.user.talent.imagen}
                            cost={talent.user.cost}
                        />
                        )
                    }))}
            </div>
            <Categories/>
            <Footer/>
        </div>
    )
}