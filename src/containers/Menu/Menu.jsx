import React from 'react';

import { data } from '../../constants';
import { MenuItem } from '../../components';
import './Menu.css';

/*
first we need to write a function that calls all menu items from data.js
 
data has already been imported at the top for convience. 
 
then once we call data, we need to call the specific const menu from within it using .

afterwards, we can use the .map() function to read each element within the function.
 
within in that function, we want to call each MenuItem component and feed it the data that created in data.js
an example of this would be <componentName name={dataVariable.category}/>
(you'll have to do this with the name, price and description though)

once you're done, we can then proceed to do the actual formatting in MenuItem component.

*/

const Menu = () => {
	return (
		<div className="app__menu">
			<h3>our drinks</h3>
			<ul className="menu-items">//content goes here</ul>
		</div>
	);
};

export default Menu;
