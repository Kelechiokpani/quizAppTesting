import React from "react"
import "./App.css"
import { BrowserRouter ,Route,Switch} from "react-router-dom"
import Login from "./pages/login/login"
import DashBoard from "./pages/dashboard/dashboard";
import ContextData from "./components/Context/ContextData";
import Overview from "./pages/overview/overview"
import Summary from "./pages/summary/summary"

// const  Summary = ()=>{
// 	return(
// 		<div>
// 			this is the summary page
// 		</div>
// 	)
// }
const App = ()=>{
	return(
	<ContextData>
		<BrowserRouter>
			<Switch>
				<Route path={"/"} exact component={Login}/>
				<Route path={"/test/:userId/:questionNumber"}  component={DashBoard}/>
				<Route path={"/quiz/summary"}  component={Summary}/>
				<Route path={"/quiz/overview"}  component={Overview}/>
			</Switch>
		</BrowserRouter>
		</ContextData>
	)
}

export default  App