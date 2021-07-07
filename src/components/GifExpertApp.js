import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = ({ defaultCategories = []}) => {

    //const categories = ['One punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(defaultCategories)

    /*const handleAdd = () => {

        //setCategories( [...categories, 'HunterXHunter'] )
        setCategories( cats => [...cats, 'HunterXHunter'] )

    }*/

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />


            <ol>
                {
                    categories.map( category => (
                        <GifGrid category={ category } key={category} />
                    ))
                }
            </ol>
        </>
    )
}
