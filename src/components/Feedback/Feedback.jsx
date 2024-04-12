// import React from 'react';
const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => (
	<div>
		<p>Good:{feedback.good}</p>
		<p>Neutral:{feedback.neutral}</p>
		<p>Bad:{feedback.bad}</p>
		<p>TotalFeedback:{totalFeedback}</p> {/*Крок #5 totalFeedback из Арр*/}
		<p>PositiveFeedback:{positiveFeedback}</p>{' '}
		{/*Крок #5 positiveFeedback из Арр*/}
	</div>
);
export default Feedback;
