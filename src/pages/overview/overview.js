import React from "react";
import {Container} from "./overview.styles"
import Avater from "./../../assets/avater.png"
const Overview = ()=>{
	const HandleRedirect =()=>{
		window.location.replace("/test/12332133/1")
	}

	return(
		<Container>
			<div className={"first"}></div>
			<div className={"second"}></div>
			<div className={"content"}>
				<div className={"content-img-container"}>
					<img src={Avater} alt={"logo"}/>
				</div>
				<p>

					Hello <span style={{fontWeight:"bolder"}}>{"sixtus iwuchukwu"}</span> we are happy to watch you embark on this journey to grow from zero to hero in the the tech industry.
				This test is to evaluate you on what you have been taught and known.
				Try to answer each question as soon as possible and try not to ignore the evaluation rules and regulations.
				</p>

				<button className={"content-btn"} onClick={HandleRedirect}>Start</button>

			</div>
		</Container>
	)
}

export default  Overview