import React from 'react';
import Style from './recipe.module.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Recipe({ title, calorie, imagesrc, ingredients, prep }) {
    return (
        <div className={Style.recipe}>
            <h1 className={Style.title}>{title}</h1>
            <h4 className={Style.calorie_text}>Calorie - {calorie.toFixed(2)}</h4>
            <img src={imagesrc} className={Style.img} alt="Food" />
            <p className={Style.ingredient}>Ingredients</p>
            <div className={Style.ingredient_list_container}>
                <ul className={Style.ingredient_list} >
                    {ingredients.map(ingredient => (
                        <li><ArrowRightIcon className="icon" /> {ingredient.text}</li>
                    ))}
                </ul>
            </div>
            <a className="btn-link" href={prep}>View Preparation</a>
        </div>
    )
}

export default Recipe
