import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return(
      <div className={style.recipe}>
          <h1 >Recipe Name : {title}</h1>
          <b>ingredients Required:</b>
          <ol>
              {ingredients.map(ingredient =>(
                  <li>{ingredient.text}</li>
              ))}
          </ol>
          <b>Calories :</b><p>{calories}</p>
          <img className={style.image} src={image} alt="" />
      </div>
    );
}

export default Recipe;