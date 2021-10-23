import styled from "styled-components"
import bg from "../../assets/loginn2.jpg"


export const Background =  styled.div`
background-image:url(${bg});
background-size:cover;
background-position:center;
background-repeat:no-repeat;
width:60%;
height:100vh;
  
background-color:red;
	.bg-content{
    position: relative;
    width: 60%;
    top: 24%;
    left: 17%;
    height: 46vh;
    background-color: black;
    color: white;
border-radius: 10px;
  }
	}
	.inner-bg-content{
		//display: flex;
		//flex-direction: column;
		//width: 100%;
		//align-content: center;
		//align-content: center;
		
		text-align: center;
		font-size: 14px;
		font-weight: bolder;
		margin: 0;
		
	}
	h1,h2,h3{
		margin: 0;
		padding-top:9px;
		font-size:25px;
		text-align:center;
		font-family: BlinkMacSystemFont;
		font-family:cursive;
		color:cadetblue;
	}
	span{
		color:cadetblue;
	}
	h2{
		font-family:Apple Color Emoji;
		font-size: 18px;
		font-family:Courier;
		letter-spacing:5px;
		color:white;
		
	}
`