import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    const onNewCategory = (category) => {
        if(categories.includes(category)){
            return;
        }
        setCategories(cat => { return [category, ...cat] })
    }

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onNewCategory}
            />

            {categories.map( category => (
                  <GifGrid
                      key={category}
                      category={category}
                  />
              )
            )}
        </>
    )
}