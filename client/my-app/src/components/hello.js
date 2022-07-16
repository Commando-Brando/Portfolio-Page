import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const Hello = () => {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/api/').then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(jsonResponse => setInitialState(jsonResponse.hello));
    }, []);
    console.log(initialState);
    return (<div>
        {initialState.length > 0 && initialState.map((item, k) => <li key={k}>{item}</li>)}
    </div>
    );
}
// Language: javascript