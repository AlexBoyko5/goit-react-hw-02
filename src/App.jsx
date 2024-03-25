import { useState, useEffect } from 'react';
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

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => (
	<div>
		<p>Good:{feedback.good}</p>
		<p>Neutral:{feedback.neutral}</p>
		<p>Bad:{feedback.bad}</p>
		<p>TotalFeedback:{totalFeedback}</p> {/*Крок #5 */}
		<p>PositiveFeedback:{positiveFeedback}</p>
	</div>
);
const Options = ({ updateFeedback }) => (
	<div>
		<button onClick={() => updateFeedback('good')}>Good</button>
		<button onClick={() => updateFeedback('neutral')}>Neutral</button>
		<button onClick={() => updateFeedback('bad')}>Bad</button>
		<button onClick={() => updateFeedback('reset')}>Reset</button>{' '}
		{/**Крок #4 Add Reset btn*/}
	</div>
);

const Notificaion = () => (
	<div>
		<p>No feedback registrated yet</p>
	</div>
);

const App = () => {
	const initialFeedback = {
		good: 0,
		neutral: 0,
		bad: 0,
	};
	const savedFeedback = JSON.parse(localStorage.getItem('feedback')); //получ данные из localStorage при загрузке страниц
	const [feedback, setFeedback] = useState(savedFeedback || initialFeedback); // запускаем State сохраненными данными или начальным состоянием
	//запис изменен Состояния в localStorage при изменении State
	//Сохр данные между рендерингаами и после перегруз страниц
	useEffect(() => {
		localStorage.setItem('feedback', JSON.stringify(feedback));
		[feedback];
	});

	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
	const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

	const updateFeedback = (feedbackType) => {
		if (feedbackType === 'reset') {
			setFeedback(initialFeedback);
		} else {
			setFeedback({
				...feedback,
				[feedbackType]: feedback[feedbackType] + 1,
			});
		}
	};

	return (
		<div>
			<Description />
			<Options updateFeedback={updateFeedback} />
			{/*Крок #3 обчислення totalFeedback*/}
			{totalFeedback > 0 ? (
				<Feedback
					feedback={feedback}
					totalFeedback={totalFeedback}
					positiveFeedback={positiveFeedback}
				/>
			) : (
				<Notificaion />
			)}
		</div>
	);
};

export default App;
