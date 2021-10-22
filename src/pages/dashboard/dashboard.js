import React, {useContext, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {Wrapper} from "./dashboard.styles";
import {Store} from "../../components/Context/ContextData";
import Avatar from "../../assets/avater.png";
// import  HandleNetwork from  "../../components/network/network"
import {useToasts} from "react-toast-notifications";

function DashBoard() {

	const [status, setStatus] = useState(null)
	const {questionNumber} = useParams();
	const [counter, setCounter] = useState(questionNumber)
	const [seconds, setSeconds] = useState(30);
	const {DataStore} = useContext(Store);
	const History = useHistory()

	const HandleVisibility = () => {
		document.addEventListener("visibilitychange", function () {
			document.title = document.hidden ? "I'm away" : "I'm here";
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
		setCounter(parseInt(counter) + 1)
		History.push(`/test/122277477474/${counter}`)
	}
	const HandleTimer = ()=>{
		let timer = (sessionStorage.getItem("timer"))
		if (timer && timer > 0 && seconds > 0) {
			const interval = setInterval(() => {
				sessionStorage.setItem("timer", JSON.stringify(Number(timer - 1)))
				setSeconds(timer - 1)

			}, 60000)
			return () => clearInterval(interval);
		} else {
			if (seconds != 0) {
				sessionStorage.setItem("timer", JSON.stringify(Number(seconds - 1)))
				setSeconds(seconds - 1)
			}
		}
	}


	useEffect(() => {
		HandleNetwork()
		HandleVisibility()
		HandleTimer()
	}, [seconds]);

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
										<span style={status ? {backgroundColor: "green"} : {backgroundColor: "red"}} className="network-status"/>
										<div className="avater-container">
											<img src={Avatar} alt=""/>
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
											<span className="step-no position-absolute"> Time Remaining: {seconds} mins.</span>
											<div className="wizard-inner-box">
												<div className={"lost-connection"} style={status ? {display:"none"} : {display: "block"}}>
													<p>Lost network connection. re-trying to connect...</p>
												</div>
												<div className="inner-title text-center">
													<h2>
														{" "}
														{DataStore && DataStore[questionNumber - 1] ? (
															DataStore[questionNumber - 1].question
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
																		value="Ux designer label"
																		className="j-checkbox"
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
																		value="Front Developer"
																		className="j-checkbox"
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
																		value="Php Developer"
																		className="j-checkbox"
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
																		value="Ux designer"
																		className="j-checkbox"
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
							<div className="actions" >
								<button style={{border:"none",background:"none"}} disabled={!status} onClick={HandleNext}>
									<li>
										<span className="js-btn-next" title="NEXT">
											NEXT
										</span>
									</li>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default DashBoard;
