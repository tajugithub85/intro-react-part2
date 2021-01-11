import React from 'react'
import Tweeter from "./components/Tweeter"

class App extends React.Component {


	render() {
		return (
			<div>
				<Tweeter 
				Username = "Tajutech"
				Name = "Tahiru Tajudin"
				Date="23th 09 2021"
				Message =" the message been tweeted"
				
				/>

			</div>
		) 
	}
}


export default App;

