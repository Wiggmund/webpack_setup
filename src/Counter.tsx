import { useState } from 'react';

export const Counter = () => {
	const [value, setValue] = useState(0);

	return (
		<>
			<p>Num: {value}</p>
			<button onClick={() => setValue((prev) => prev + 1)}>+</button>
			<button onClick={() => setValue((prev) => prev - 1)}>-</button>
			<p>Some text</p>
		</>
	);
};
