// src/components/Counter.jsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px'}}>
            <p style={{ fontSize: '20px'}}>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)} style={{ margin: '0 10px'}}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;