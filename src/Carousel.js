import  React  from  'react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Image, Button } from  'semantic-ui-react'
import APOD from "APOD.js";

const  CarouselMod  = () => {
	let  elements  = [
		{
			render:()=>{
				return <Button  fluid>1111111</Button>
			}
		},
		{
			render:()=>{
				return <Button  fluid>2222222</Button>
			}
	    },
	]
	return (
		<div>
			<Carousel
				elements  =  {null}
				duration  ={3000}
				animation  ='slide left'
				showNextPrev  =  {false}
				showIndicators  ={true}
			/>
		</div>
	)

}
export  default  CarouselMod;