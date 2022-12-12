import React from 'react';

import './MenuItem.css';

/* the first step of creating this component is putting in the information
    that we called in Menu.jsx 

    we can feed this in where the empty curly brackets are.

    then we can use the information we fed into the function within our actual code using {}

*/

/* the beauty of writing in jsx, is that jsx allows us to write essentially html in a javascript file.*/
const MenuItem = ({}) => {
	return <li className="menu-item"></li>;
};

export default MenuItem;
