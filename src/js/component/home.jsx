import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

const[Selectedcolor, SetSelectedcolor] = useState("red");
	return (
		<div className="contenedor">
		<div className="trafic-light">
			<div onClick={() => SetSelectedcolor("red")} 
			className= 
			{"light red" + (Selectedcolor == "red" ? " glow" : "")}>

			</div>
			<div onClick={() => SetSelectedcolor("yellow")}
			 className= 
			{"light yellow" + (Selectedcolor=="yellow" ? " glow" : "")}>

			</div>
			<div onClick={() => SetSelectedcolor("green")} className= 
			{"light green" + (Selectedcolor=="green" ? " glow" : "")}>

			</div>
			
		</div>
		</div>
	);
};

export default Home;
