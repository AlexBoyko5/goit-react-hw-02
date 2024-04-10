import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import './App.css';

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
	const positiveFeedback =
		totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

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
				<Notification />
			)}
		</div>
	);
};

export default App;
