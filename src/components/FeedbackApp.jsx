// import React, { Component } from 'react';

// class FeedbackApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedbackClick = type => {
//     this.setState(prevState => ({
//       ...prevState,
//       [type]: prevState[type] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const totalFeedback = this.countTotalFeedback();
//     const { good } = this.state;
//     return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         <button onClick={() => this.handleFeedbackClick('good')}>Good</button>
//         <button onClick={() => this.handleFeedbackClick('neutral')}>
//           Neutral
//         </button>
//         <button onClick={() => this.handleFeedbackClick('bad')}>Bad</button>
//         <h2>Statistics</h2>
//         <p>Good: {good}</p>
//         <p>Neutral: {neutral}</p>
//         <p>Bad: {bad}</p>
//         <p>Total: {this.countTotalFeedback()}</p>
//         <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
//       </div>
//     );
//   }
// }

// export default FeedbackApp;
