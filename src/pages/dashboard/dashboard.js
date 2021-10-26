import React, {useContext, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {Wrapper} from "./dashboard.styles";
import {Store} from "../../components/Context/ContextData";
import Avatar from "../../assets/avater.png";
import Axios from "axios"
import {SERVER_URL} from "../../config"
import {useToasts} from "react-toast-notifications";

function DashBoard() {
	const {addToast} = useToasts();
	const [status, setStatus] = useState(null)
	const {questionNumber, userId} = useParams();
	const [counter, setCounter] = useState(questionNumber)
	const [seconds, setSeconds] = useState(31);
	const [shuffle, setShuffle] = useState([]);

	const [exactRoute,] = useState(true);
	const [user, setUser] = useState(null)
	const {DataStore, setData} = useContext(Store);
	const History = useHistory()
	let ok = true;
	const HandleVisibility = () => {
		document.addEventListener("visibilitychange", function () {

			if (ok) {
				HandleSubmit()
				ok = false
			}

		})
	}
	const HandleNetwork = () => {
		setInterval(function () {

			if (navigator.onLine) {
				setStatus(true)

			} else {
				setStatus(false)

			}

		}, 2000);
	}
	const HandleNext = () => {
		sessionStorage.setItem("current", questionNumber)
		setCounter(parseInt(counter) + 1)
		History.push(`/test/${user._id}/${counter}`)
	}
	const HandlePrev = () => {
		sessionStorage.setItem("current", questionNumber)
		setCounter(parseInt(counter) - 1)
		History.push(`/test/${user._id}/${counter}`)
	}


	const HandleChange = ({target}) => {
		setData([...DataStore, DataStore[questionNumber - 1].answer = target.value])
		target.value=""
	}
	const HandleSubmit = () => {
		// e.preventDefault()
		let data = DataStore.slice(0, 15)
		let token = sessionStorage.getItem("user-token") && sessionStorage.getItem("user-token")
		let questionAndAnswer = data

		Axios.post(`${SERVER_URL}/intern/submit`, {questionAndAnswer: questionAndAnswer}, {
			headers: {
				"Content-Type": "application/json",
				token: `${token}`
			}
		}).then((res) => {

		window.location.replace("/quiz/summary")
		}).catch((err) => {
			addToast(err.message, {
				appearance: "error",
				autoDismiss: true,
			});
		})

	}

	// const HandleRoute = () => {
	// 	const current = sessionStorage.getItem("current");
	// 	if (current) {
	// 		if (Number(questionNumber) - Number(current) !== 1) {
	// 			setExactRoute(true)
	// 			window.location.replace(`/test/${userId}/${current}`)
	// 		}
	// 	} else {
	// 		sessionStorage.setItem("current", questionNumber)
	// 	}
	// }
	const GetUserData = () => {
		let data = JSON.parse(sessionStorage.getItem("meta-data"))
		setUser(data)

	}
	const HandleShuffle = () => {
		let arr = []
		for (let i = 0; i < 30; ++i) arr[i] = i;
		let tmp, current, top = arr.length;
		if (top) while (--top) {
			current = Math.floor(Math.random() * (top + 1));
			tmp = arr[current];
			arr[current] = arr[top];
			arr[top] = tmp;
		}
		sessionStorage.setItem("shuffle",JSON.stringify(arr))
		// return arr;
	}


	useEffect(() => {
		let random = JSON.parse(sessionStorage.getItem("shuffle"))
		if(random === null){

			HandleShuffle()
		}else{
			setShuffle(random)
		}
		GetUserData()
		HandleNetwork()
		HandleVisibility()

		let timer = (sessionStorage.getItem("timer"))
		if (timer && timer > 0 && seconds !== 0) {
		setSeconds(Number(timer))
			const interval = setInterval(() => {
				sessionStorage.setItem("timer", JSON.stringify(Number(timer - 1)))
				setSeconds(Number(timer) - 1)
				return clearInterval(interval)

			}, 60000)

		}else if (timer <= 0 && seconds <= 0) {
			HandleSubmit()

		} else {
			if (timer === null) {
				sessionStorage.setItem("timer", JSON.stringify(seconds - 1))
				setSeconds(seconds - 1)
			} else if (Number(timer) === 0) {
				setSeconds(Number(timer))
			}
		}

	}, [seconds, exactRoute]);

	return (
		<Wrapper>
			<div>
				<div className={"container"}>
					<div className="wizard-content-1 pos-flex clearfix">
						<div className="steps d-inline-block clearfix">
							<span className="bg-shape"/>
							<ul className="tablist multisteps-form__progress">
								<li className="multisteps-form__progress-btn js-active current">
									<div className="step-btn-icon-text">
										<span style={status ? {backgroundColor: "green"} : {backgroundColor: "red"}}
										      className="network-status"/>
										<div className="avater-container">
											<img src={user && user.avatar ? user.avatar : Avatar} alt=""/>
										</div>
									</div>
								</li>
								<li className="multisteps-form__progress-btn">
									<div className="step-btn-icon-text">
										<div className="instruction">
											<h2 className="text-uppercase">Test Instructions</h2>
											<li className="text-capitalize">Do not attempt to leave this page else your quiz will be
												submitted.
											</li>
											<li className="text-capitalize">Your are only allowed to write this test for within 30 mins.</li>
											<li className="text-capitalize">Click the submit button ones you are done answering your
												questions
											</li>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div className="step-inner-content clearfix position-relative">
							<span className="bg-shape"/>
							<form
								className="multisteps-form__form"
								id="wizard"
								method="POST"
								encType="multipart/form-data"
								style={{height: "585px"}}
							>
								<div className="form-area position-relative">
									<div
										className="multisteps-form__panel js-active"
										data-animation="scaleIn"
									>
										<div className="wizard-forms position-relative">
											{/*<span className="step-no position-absolute"> Time Remaining:{<Countdown date={Date.now() + 1800000} onComplete={HandleSubmit}/>}</span>*/}
											<span className="step-no position-absolute"> Time Remaining:{seconds} mins.</span>
											<div className="wizard-inner-box">
												<div className={"lost-connection"} style={status ? {display: "none"} : {display: "block"}}>
													<p>Lost network connection. re-trying to connect...</p>
												</div>
												<div className="inner-title text-center">
													<h2>
														{" "}
														{DataStore && DataStore[shuffle[questionNumber - 1]] ? (
															`Q${questionNumber} ${DataStore[shuffle[questionNumber - 1]].question}`
														) : (
															<h1>No Question Found</h1>
														)}
													</h2>
												</div>
												<div
													id="need-job-slide-id"
													className="need-job-slide owl-carousel owl-theme owl-loaded owl-responsive-1000"
												>
													<div
														className="owl-stage-outer owl-height"
														// style={{ height: "300px" }}
													>
														<div
															className="owl-stage"
															style={{
																transform: "translate3d(0px, 0px, 0px)",
																transition: " all 0s ease 0s",
																width: "1716.67px",
															}}
														>
															<div
																className="owl-item active"
																style={{
																	width: "313.333px",
																	marginRight: "30px",
																	fontSize: "20px"
																}}
															>
																<label className="need-job-icon-text text-center">
																	<input
																		type="radio"
																		name="job_title"
																		value={DataStore && DataStore[shuffle[questionNumber - 1]].a}
																		className="j-checkbox"
																		onChange={HandleChange}
																	/>
																	<span className="need-job-text">
                                      {DataStore && DataStore[shuffle[questionNumber - 1]] ? (
	                                      <span className="text-uppercase need-job-title">
                                          {DataStore && DataStore[shuffle[questionNumber - 1]].a}
                                        </span>
                                      ) : (
	                                      ""
                                      )}
                                  </span>
																</label>
															</div>
															<div
																className="owl-item active"
																style={{
																	width: "313.333px",
																	marginRight: "30px",
																	fontSize: "20px"
																}}
															>
																<label className="need-job-icon-text text-center">
																	<input
																		type="radio"
																		name="job_title"
																		value={DataStore && DataStore[shuffle[questionNumber - 1]].b}
																		className="j-checkbox"
																		onChange={HandleChange}
																	/>
																	<span className="need-job-text-inner">
                                    <span className="checkbox-circle-mark position-absolute">
                                      {" "}
                                    </span>
                                    <span className="need-job-text">
                                      {DataStore &&
                                      DataStore[shuffle[questionNumber - 1]] ? (
	                                      <span className="text-uppercase need-job-title">
                                          {DataStore && DataStore[shuffle[questionNumber - 1]].b}
                                        </span>
                                      ) : (
	                                      ""
                                      )}
                                    </span>
                                  </span>
																</label>
															</div>
															<div
																className="owl-item active"
																style={{
																	width: " 313.333px",
																	marginRight: "30px",
																	fontSize: "20px"
																}}
															>
																<label className="need-job-icon-text text-center">
																	<input
																		type="radio"
																		name="job_title"
																		value={DataStore && DataStore[shuffle[questionNumber - 1]].c}
																		className="j-checkbox"
																		onChange={HandleChange}
																	/>
																	<span className="need-job-text-inner">
                                    <span className="checkbox-circle-mark position-absolute">
                                      {" "}
                                    </span>
                                    <span className="need-job-text">
                                      {DataStore &&
                                      DataStore[shuffle[questionNumber - 1]] ? (
	                                      <span className="text-uppercase need-job-title">
                                          {DataStore[shuffle[questionNumber - 1]].c}
                                        </span>
                                      ) : (
	                                      ""
                                      )}
                                    </span>
                                  </span>
																</label>
															</div>
															<div
																className="owl-item active"
																style={{
																	width: "313.333px",
																	marginRight: "30px",
																	fontSize: "20px"
																}}
															>
																<label className="need-job-icon-text text-center">
																	<input
																		type="radio"
																		name="job_title"
																		value={DataStore && DataStore[shuffle[questionNumber - 1]].d}
																		className="j-checkbox"
																		onChange={HandleChange}
																	/>
																	<span className="need-job-text">
                                      {DataStore &&
                                      DataStore[shuffle[questionNumber - 1]] ? (
	                                      <span className="text-uppercase need-job-title">
                                          {DataStore[shuffle[questionNumber - 1]].d}
                                        </span>
                                      ) : (
	                                      ""
                                      )}
                                  </span>
																</label>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
							{questionNumber > "1" && <div className="actions-left">
									<button style={{border: "none", background: "none"}} disabled={!status} onClick={HandlePrev}>
										<li>
										<span className="js-btn-next" title="PREV">
										PREV
										</span>
										</li>
									</button>
							</div>
								}
							{questionNumber === "30" ? (<div className="actions">
								<button style={{border: "none", background: "none"}} disabled={!status} onClick={HandleSubmit}>
									<li>
										<span className="js-btn-next" title="SUBMIT">
										SUBMIT
										</span>
									</li>
								</button>
							</div>) : (<div className="actions">
								<button style={{border: "none", background: "none"}} disabled={!status} onClick={HandleNext}>
									<li>
										<span className="js-btn-next" title="NEXT">
											NEXT
										</span>
									</li>
								</button>
							</div>)}


						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default DashBoard;
