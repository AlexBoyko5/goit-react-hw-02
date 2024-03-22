import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

const Description = () => {
	return (
		<div>
			<h1>Sip Happens Café</h1>
			<p>
				Please leave your feedback about our service by selecting one of the
				options below.
			</p>
		</div>
	);
};

const Feedback = ({ feedback }) => (
	<div>
		{/* <h2>Feedback</h2> */}
		<p>Good:{feedback.good}</p>
		<p>Neutral:{feedback.neutral}</p>
		<p>Bad:{feedback.bad}</p>
	</div>
);
const Options = ({ handleFeedback }) => (
	<div>
		<button onClick={() => handleFeedback('good')}>Good</button>
		<button onClick={() => handleFeedback('neutral')}>Neutral</button>
		<button onClick={() => handleFeedback('bad')}>Bad</button>
	</div>
);

const App = () => {
	const [feedback, setFeedback] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const handleFeedback = (type) => {
		setFeedback({ ...feedback, [type]: feedback[type] + 1 });
	};

	return (
		<div>
			<Description />
			<Options handleFeedback={handleFeedback} />
			<Feedback feedback={feedback} />
		</div>
	);
};

export default App;
