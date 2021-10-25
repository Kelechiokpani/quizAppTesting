import React, { useState } from "react";
import { useHistory,Redirect } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {Background} from "./login.styles"


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width:"40%",
		padding:"20px",

	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: "cadetblue",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		// marginTop: theme.spacing(1),
		marginTop:"10%"
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		backgroundColor: "cadetblue",
	},


}));

export default function Login() {
	let intailInput = {
		phoneNumber: "",
		password: "",
	};

	// const { addToast } = useToasts();
	const history = useHistory();


	const classes = useStyles();
	// const eye = <FontAwesomeIcon icon={faEye} />;
	const [passwordShown, setPasswordShown] = useState(false);
	const [submitDisplay, setsubmitDisplay] = useState(true);

	const [input, SetInput] = useState(intailInput);

	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const HandleChange = ({ target }) => {
		const { name, value } = target;
		SetInput({ ...input, [name]: value });
	};

	const HandleSubmit = (e) => {
		e.preventDefault();
		// setsubmitDisplay(true);
		// if (input.email.length <= 4 || input.email === " ") {
			// addToast(`Email field must not be empty`, {
			//   appearance: "error",
			//   autoDismiss: true,
			// });
		// 	return false;
		// }
		// if (input.password.length <= 4 || input.password === " ") {
			// addToast(`Password field must not be empty`, {
			//   appearance: "error",
			//   autoDismiss: true,
			// });
			// return false;
		// window.location.replace("/quiz/overview")
		console.log(input)


		// history.push({
		// 	pathname: '/quiz/12332133/1',
		// 	state: { detail: 'some_value' }
		// });
	  
	};

//get user data from input 

//collecting user data with a handleonchange 

	return (
		<Container component="main" maxWidth="xxl" style={{display:"flex" ,width:"100%",padding:"0" ,}}>
			<CssBaseline />
			<div className={classes.paper} style={{marginTop:"10%"}}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5" >
					Sign in
				</Typography>

				<form className={classes.form} noValidate onSubmit={HandleSubmit} >

					<Grid item xs={12} style={{ display: "flex", alignItems: "center"}}>
						<TextField
							variant="outlined"
							required
							fullWidth
							type={"tel"}
							name="phoneNumber"
							label="Phone Number"
							autoComplete="current-phone"
							onChange={ HandleChange}
							onFocus={() => setsubmitDisplay(false)}
							style={{marginBottom:"3%"}}
						/>
						</Grid>

					<Grid>
						<TextField
							variant="outlined"
							required
							fullWidth
							type={"password"}
							name="password"
							label="Password"
							autoComplete="current-password"
							onChange={ HandleChange}
							onFocus={() => setsubmitDisplay(false)}

						/>
					</Grid>

						<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.submit}
						disabled={submitDisplay}
					>
						Sign In
					</Button>

					{/*<Grid container style={{ marginBottom: "30px" }}>*/}
					{/*	<Grid item xs>*/}
					{/*		<Link href="/customer/forgotpassword" variant="body2">*/}
					{/*			Forgot password?*/}
					{/*		</Link>*/}
					{/*	</Grid>*/}
					{/*	<Grid item>*/}
					{/*		<Link href="/customer/accounttype" variant="body2">*/}
					{/*			Don't have an account? Sign Up*/}
					{/*		</Link>*/}
					{/*	</Grid>*/}
					{/*</Grid>*/}
				</form>

			</div>

		<Background>
		
		<Grid className={"bg-content"} sx={12}>

				
		<Grid container spacing={2}>
			<Grid item xs={12} spacing={2}>
				<h1> <span> DEEP </span> TECHNOLOGY NIGERIA LIMITED</h1>
				<h2>Build To Satisfaction</h2>
			</Grid>

			<Grid item xs={12}>
				<h2>Intern HTML Evaluation Test</h2>
			</Grid>
			<Grid item xs={12}>
				<h2>Sign In</h2>
				<h2>phone: <span>(+234)</span></h2>
				<h2>Password: <span>(12345)</span></h2>
			</Grid>
		</Grid>
	</Grid>

	

		</Background>
		</Container>
	);
}