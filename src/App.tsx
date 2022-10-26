import { Counter } from './Counter';
import './style.css';

export const App = () => {
	return (
		<>
			<h1>Test Webpack setup</h1>
			<h2>Mode is {process.env['NODE_ENV']}</h2>
			<h2>Name is {process.env['name']}</h2>
			<Counter />
		</>
	);
};
