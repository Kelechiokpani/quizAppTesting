import React, {useEffect, useState} from "react";
import {Container} from "./overview.styles"
import Avatar from "./../../assets/avater.png"
const Overview = ()=>{
	const [user,setUser] = useState(null)
	const HandleRedirect =()=>{

		if(user.testTaken){
			return window.location.replace(`/quiz/summary`)
		}
		window.location.replace(`/test/${user && user._id}/1`)
	}
useEffect(()=>{
	let data = JSON.parse(sessionStorage.getItem("meta-data"))
	setUser(data)
},[])
	return(
		<Container>
			<div className={"first"}/>
			<div className={"second"}/>
			<div className={"content"}>
				<div className={"content-img-container"}>
					<img src={user && user.avatar  ? user.avatar : Avatar} alt={"logo"}/>
				</div>
				<p>

					Hello <span style={{fontWeight:"bolder"}}>{user && user.fullName}</span> we are happy to watch you embark on this journey to grow from zero to hero in the the tech industry.
				This test is to evaluate you on what you have been taught and known.
				Try to answer each question as soon as possible and try not to ignore the evaluation rules and regulations.
				</p>

				<button className={"content-btn"} onClick={HandleRedirect}>Start</button>

			</div>
		</Container>
	)
}

export default  Overview