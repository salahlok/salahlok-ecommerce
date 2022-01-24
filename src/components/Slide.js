import React,{useState,useEffect} from 'react'
import {data} from '../data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const Slide = () => {
    const [people,setPeople] = useState(data)
    const [index,setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
    }, [index]);



    return (
        <div className="slider-container">
        <div className="slider-section">            
            
            <div className="slider-center">
                {people.map((person,personIndex)=>{
                    const {id,image,title,desc} = person
                    let position = 'nextSlide'
                    if(personIndex === index){
                        position = 'activeSlide'
                    }
                    if(personIndex === index -1 ||(index === 0 && personIndex === people.length - 1)){
                        position = 'lastSlide'
                    }

                    return <article key={id} className={position}>
                            <div className="image-container">
                                <img src={image} alt="" className='person-img' />
                            </div>
                            <div className="aritcle-info">
                                <h4>{title}</h4>
                                <p>{desc}</p>
                                <a href="#products"><button>SHOW HERE</button></a>
                            </div>
                    </article>
                })}
            </div>            
            
        </div>
        </div>
    )
}

export default Slide
