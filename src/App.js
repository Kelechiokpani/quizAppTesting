import React from "react"
import "./App.css"
import { BrowserRouter ,Route,Switch,} from "react-router-dom"
import Login from "./pages/login/login"
import DashBoard from "./pages/dashboard/dashboard";
import ContextData from "./components/Context/ContextData";
import Overview from "./pages/overview/overview"
import {ProtectedRoute, SecureQuestions} from "./privateRoute";

const  Summary = ()=>{
	return(
		<div>
			this is the summary page
		</div>
	)
}
const App = ()=>{

	return(
	<ContextData>
		<BrowserRouter>
			<Switch>
				<Route path={"/"} exact component={Login}/>

				<SecureQuestions path={"/test/:userId/:questionNumber"}  component={DashBoard}/>
				<ProtectedRoute path={"/quiz/summary"}  component={Summary}/>
				<ProtectedRoute path={"/quiz/overview"}  component={Overview}/>

			</Switch>
		</BrowserRouter>
		</ContextData>
	)
}

export default  App