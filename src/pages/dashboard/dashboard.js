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
	const [seconds, setSeconds] = useState(30);

	const [exactRoute,] = useState(true);
	const [user, setUser] = useState(null)
	const {DataStore, setData} = useContext(Store);
	const History = useHistory()
	let ok = true;
	const HandleVisibility = () => {
		document.addEventListener("visibilitychange", function () {

			if (ok) {
				HandleSubmit()
				console.log("testing")
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
		History.push(`/test/122277477474/${counter}`)
	}


	const HandleChange = ({target}) => {
		setData([...DataStore, DataStore[questionNumber - 1].answer = target.value])
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


	useEffect(() => {
		GetUserData()
		HandleNetwork()
		HandleVisibility()

		let timer = (sessionStorage.getItem("timer"))
		if (timer && timer > 0 && seconds !== 0) {

			const interval = setInterval(() => {
				sessionStorage.setItem("timer", JSON.stringify(Number(timer - 1)))
				setSeconds(Number(timer) - 1)
				clearInterval(interval)
				if (timer <= 0 && seconds <= 0) {
					HandleSubmit()
					clearInterval(interval);

				}

			}, 60000)

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
											<span className="step-no position-absolute"> Time Remaining:{seconds}</span>
											<div className="wizard-inner-box">
												<div className={"lost-connection"} style={status ? {display: "none"} : {display: "block"}}>
													<p>Lost network connection. re-trying to connect...</p>
												</div>
												<div className="inner-title text-center">
													<h2>
														{" "}
														{DataStore && DataStore[questionNumber - 1] ? (
															`Q${questionNumber} ${DataStore[questionNumber - 1].question}`
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
																		value={DataStore[questionNumber - 1].a}
																		className="j-checkbox"
																		onChange={HandleChange}
																	/>
																	<span className="need-job-text">
                                      {DataStore &&
                                      DataStore[questionNumber - 1] ? (
	                                      <span className="text-uppercase need-job-title">
                                          {DataStore[questionNumber - 1].a}
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
																		value={DataStore[questionNumber - 1].b}
																		className="j-checkbox"
																		onChange={HandleChange}
																	/>
																	<span className="need-job-text-inner">
                                    <span className="checkbox-circle-mark position-absolute">
                                      {" "}
                                    </span>
                                    <span className="need-job-text">
                                      {DataStore &&
                                      DataStore[questionNumber - 1] ? (
	                                      <span className="text-uppercase need-job-title">
                                          {DataStore[questionNumber - 1].b}
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
																		value={DataStore[questionNumber - 1].c}
																		className="j-checkbox"
																		onChange={HandleChange}
																	/>
																	<span className="need-job-text-inner">
                                    <span className="checkbox-circle-mark position-absolute">
                                      {" "}
                                    </span>
                                    <span className="need-job-text">
                                      {DataStore &&
                                      DataStore[questionNumber - 1] ? (
	                                      <span className="text-uppercase need-job-title">
                                          {DataStore[questionNumber - 1].c}
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
																		value={DataStore[questionNumber - 1].d}
																		className="j-checkbox"
																		onChange={HandleChange}
																	/>
																	<span className="need-job-text">
                                      {DataStore &&
                                      DataStore[questionNumber - 1] ? (
	                                      <span className="text-uppercase need-job-title">
                                          {DataStore[questionNumber - 1].d}
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
							{questionNumber === "15" ? (<div className="actions">
								<button style={{border: "none", background: "none"}} disabled={!status} onClick={HandleSubmit}>
									<li>
										<span className="js-btn-next" title="NEXT">
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

							<button onClick={HandleSubmit}>submit</button>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default DashBoard;
