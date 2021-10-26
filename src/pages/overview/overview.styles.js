import Styled from "styled-components"


export const Container = Styled.div`
width:100%;
background-color:white;
height:100vh;
.first{
width:100%;
height:40vh;
background-color:cadetblue;
}
.second{
width:100%;
height:60vh;
background-color:aliceblue;
}
.content-img-container{
width:100px;
height:100px;
border-radius:200px;
position:relative;
left:40%;
top:-15%;
margin-bottom: -25px;

}
.content-img-container img{
width:100%;
height:100%;
border-radius:inherit;
}
.content{
width:60%;
background-color:white;
    height: 50vh;
    position: absolute;
    top: 26%;
    left: 20%;
    border-radius:10px;
p{
width:95%;
line-height:1.5;
text-align:left;
padding:0 20px;
font-size:18px;
font-family: 'Work Sans', sans-serif;
}
}
.content-btn{
height: 37px;
    width: 23%;
    float: right;
    margin-right: 6%;
    background-color: cadetblue;
    border: none;
    outline: none;
    font-size: 19px;
    text-transform: uppercase;

}
`