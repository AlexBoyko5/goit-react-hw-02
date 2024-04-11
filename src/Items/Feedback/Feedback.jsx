// import React from 'react';
const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => (
	<div>
		<p>Good:{feedback.good}</p>
		<p>Neutral:{feedback.neutral}</p>
		<p>Bad:{feedback.bad}</p>
		<p>TotalFeedback:{totalFeedback}</p> {/*Крок #5 */}
		<p>PositiveFeedback:{positiveFeedback}</p>
	</div>
);
export default Feedback;
