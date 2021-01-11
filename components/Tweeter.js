import React from 'react';

class Tweeter extends React.Component {
	
	render() {
		const styles = {
			backgroundColor: "#ffdd00",
			margin: 200,
			textAlign: "center"
		}
	    
		return (
			<div style= {styles}>
				<h1 > UserName: {this.props.Username}</h1>
				<h1> Name: {this.props.Name}</h1>
				<h1> Date: {this.props.Date}</h1>
				<h1> Message: {this.props.Message}</h1>
				
			</div>
		) 
	}
}


export default Tweeter;
