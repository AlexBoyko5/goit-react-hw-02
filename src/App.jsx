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
		<p>Good:{feedback.good}</p>
		<p>Neutral:{feedback.neutral}</p>
		<p>Bad:{feedback.bad}</p>
	</div>
);
const Options = ({ updateFeedback }) => (
	<div>
		<button onClick={() => updateFeedback('good')}>Good</button>
		<button onClick={() => updateFeedback('neutral')}>Neutral</button>
		<button onClick={() => updateFeedback('bad')}>Bad</button>
	</div>
);

const App = () => {
	const [feedback, setFeedback] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const updateFeedback = (feedbackType) => {
		setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
	};

	return (
		<div>
			<Description />
			<Options updateFeedback={updateFeedback} />
			<Feedback feedback={feedback} />
		</div>
	);
};

export default App;
