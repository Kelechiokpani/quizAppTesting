
import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
  margin: auto;
  padding: 90px 0;

  .wizard-content-1 .steps {
    //background-image: linear-gradient(
    //        -90deg, #555858 0%, #565353 100%);
    //max-width: 384px;
    height: 37vh;
	  width: 100%;
    float: left;
    position: relative;
    border-radius: 30px;
    padding: 40px 40px 240px 40px;
    box-shadow: 0px 1px 29px 0px rgb(1 1 1 / 10%);
  //  background-image: linear-gradient(
  //          180deg, #ede6ff 0%, white 100%);
  //}
    background-image: linear-gradient(
            -90deg, #555858 0%, #565353 100%);
  }
  .d-inline-block {
    display: inline-block!important;
  } 
	.wizard-content-1 .steps .bg-shape {
    top: -5px;
    left: -5px;
    z-index: -1;
    width: 50%;
    height: 95%;
    position: absolute;
    border-radius: 30px;
    transform: rotate(
            -1deg);
    background-color: #7650e0;
  }

// .multisteps-form__progress {
//   padding-top: 60px;
//   height: 100%;
// }

  ul {
    margin: 0;
    padding: 0;
  }
  .clearfix::after {
    display: block;
    clear: both;
    content: "";
  }

  .step-inner-content {
    width: 60%;
    max-height:48vh;
    float: right;
    margin-left: 30px;
    max-width: 1292px;
    border-radius: 30px;
    padding: 120px 120px 80px;
    box-shadow: 0px 1px 51px 0px rgb(1 1 1 / 6%);
    background-image: linear-gradient(
            -90deg, #efffff 0%, white 100%);
  }
  .position-relative {
    position: relative!important;
  }
  .step-inner-content, .dark-version .wizard-content-1 .steps {
    // background-image: linear-gradient(
    //         -90deg, #555858 0%, #565353 100%);
  }
  @media(min-width: 1300.1px){
    .pos-flex {
      display: flex;
    }
  }
  
  .pos-flex {
    display: flex;
  }
	.container{
    transform: scale(0.95);
	}
  .step-inner-content .bg-shape {
    bottom: -4px;
    right: -10px;
    z-index: -1;
    width: 95%;
    height: 95%;
    position: absolute;
    border-radius: 30px;
    transform: rotate(
            1deg);
    background-color: #7650e0;
  }
  .position-relative {
    position: relative!important;
  }
  .step-no {
    top: -95px;
    right: -85px;
    color: #2f3146;
    font-size: 20px;
    font-weight: 700;
    font-family: "Poppins";
	  // color:white;
    color:black;
  }
  .position-absolute {
    position: absolute!important;
  }
  .wizard-progress {
    left: -46%;
    width: 280px;
    bottom: -120px;
    z-index: 3;
    position: absolute;
  }
  .actions li {
    color: #fff;
    height: 66px;
    width: 169px;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    line-height: 74px;
    border-radius: 50px;
    display: inline-block;
    background-color: #7650e0;
  }
  ul li {
    list-style: none;
  }
	.actions li span {
    display: block;
    //width: 100%;
    width: 50%;
  }
  .bottom-vector {
    left: -110px;
    bottom: -170px;
  }

  .step-inner-content.clearfix.position-relative {
    //width: 50%;
  }
	.js-btn-next{
		width: 9%;
		
	}
  .actions li span {
    display: block;
    width: 90%;
	  height: 30px;
  }
	.actions{

    float: right;
    position: absolute;
    top: 95%;
    left: 73%;
	}
  .avater-container{
    width:80px;
    height:80px;
   border-radius:200px;
  }
  .avater-container img {
    width:100%;
    height:auto;
    border-radius: inherit;
  }
  .network-status{
    width: 15px;
    height: 15px;
    background-color: green;
    position: absolute;
    top: 94px;
    border-radius: 205px;
    left: 110px;
  }
  
  .instruction li:before {
    content: "→"; /* Insert content that looks like bullets */
  
        padding-right: 8px;
    
        color: black;
        font-size: 30px;
    
  } 
	
	.lost-connection{
		background-color: red;
		width: 100%;
		color:white;
		p {
		padding:10px;
		}
  }
  
`