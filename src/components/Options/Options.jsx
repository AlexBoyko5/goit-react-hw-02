import styles from './Options.module.css';
const Options = ({ updateFeedback, feedbackCount }) => (
	<div className={styles.optionsContainer}>
		<button onClick={() => updateFeedback('good')}>Good</button>
		<button onClick={() => updateFeedback('neutral')}>Neutral</button>
		<button onClick={() => updateFeedback('bad')}>Bad</button>
		{/**Крок #4 Add Reset btn*/}
		{feedbackCount > 0 && (
			<button onClick={() => updateFeedback('reset')}>Reset</button>
		)}
	</div>
);
export default Options;
