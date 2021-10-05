import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaLoader = ()=> {

	 return (
		<ContentLoader 
			className='pizza-block'
			speed={2}
			width={260}
			height={460}
			viewBox="0 0 260 460"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
	    >
			<circle cx="138" cy="136" r="93" /> 
			<rect x="109" y="281" rx="0" ry="0" width="1" height="1" /> 
			<rect x="12" y="294" rx="0" ry="0" width="9" height="2" /> 
			<rect x="33" y="293" rx="0" ry="0" width="1" height="0" /> 
			<rect x="8" y="238" rx="0" ry="0" width="276" height="24" /> 
			<rect x="10" y="269" rx="0" ry="0" width="258" height="62" /> 
			<rect x="11" y="345" rx="0" ry="0" width="95" height="35" /> 
			<rect x="158" y="346" rx="0" ry="0" width="96" height="33" />
	    </ContentLoader>
	 
	 )
}


export default PizzaLoader;