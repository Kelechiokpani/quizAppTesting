import React, {useEffect, useState} from 'react';
import Failed from '../../components/summary/failed/failed'
import Success from '../../components/summary/sucess/success'
import './summary.css'
import Axios from "axios"
import {SERVER_URL} from "../../config"
import balloon1 from "../../assets/balloons.jpg"
import balloon2 from "../../assets/balloons2.png"


export default function Summary() {

	const [data, setData] = useState({
		score: null,
		fullName: null,
		avatar: null
	})
	const [status, setStatus] = useState(false)


	const GetInternResult = () => {
		let token = sessionStorage.getItem("user-token")
		Axios.get(`${SERVER_URL}/intern/summary`, {
			headers: {
				"Content-Type": "application/json",
				token: `${token}`
			}
		}).then((res) => {
			const [{HTML}] = res.data
			if(HTML === undefined){
				return window.location.replace("/quiz/overview")
			}
			let data = JSON.parse(sessionStorage.getItem("meta-data"))
			setData({score: HTML, fullName: data.fullName, avatar: data.avatar})
			if (HTML >= 15) {
				setStatus(true)
			}
		}).catch((err) => {
			console.log(err)
		})
	}

	useEffect(() => {
		GetInternResult()
	}, [])


	return (

		<div className="cover">
			<div className={"summary-img-wrapper"}>
				<div  className={"summary-img-container"}>
					<img src={balloon1} alt={"avatar"}/>
				</div>
				<div className={"summary-img-container"}>
					<img src={balloon2} alt={"avatar"}/>
				</div>
				<div className={"summary-img-container"}>
					<img src={balloon1} alt={"avatar"}/>
				</div>
				<div className={"summary-img-container"}>
					<img src={balloon2} alt={"avatar"}/>
				</div>
				<div className={"summary-img-container"}>
					<img src={balloon1} alt={"avatar"}/>
				</div>


			</div>
			<div>
				{status ? <Success fullName={data.fullName} score={data.score}/> :
					<Failed fullName={data.fullName} score={data.score}/>}
			</div>
		</div>
	);
}
