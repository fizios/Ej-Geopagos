import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="error404 container-fluid">
    	<div className="row">
    		<div className="error404-msg">
    			<img src="./images/404.png" />
    			<p>
    			 	Página no encontrada <br />
    			 	<span>Lo sentimos pero la página que intentas acceder no existe</span> 
    			</p>
    			<Link to="/">Home</Link>
    		</div>
    	</div>
    </div>
  )
}