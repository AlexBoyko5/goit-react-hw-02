// import React from 'react';
const Options = ({ updateFeedback }) => (
	<div className="options-container">
		<button onClick={() => updateFeedback('good')}>Good</button>
		<button onClick={() => updateFeedback('neutral')}>Neutral</button>
		<button onClick={() => updateFeedback('bad')}>Bad</button>
		<button onClick={() => updateFeedback('reset')}>Reset</button>
		{/**Крок #4 Add Reset btn*/}
	</div>
);
export default Options;
