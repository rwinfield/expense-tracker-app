import React, { useState } from 'react';

export default function CharacterCounter({children, max, initial}) {
    const [text, setText] = useState(initial || '');
    const [color, setColor] = useState('');

    const handleChange = (event) => {
        const inputText = event.target.value;
    
        if (inputText.length <= max) {
            setText(inputText);
        }

        inputText.length >= max ? setColor("red") : setColor("white");
        if (children.props.onChange) {
            children.props.onChange(event);
        }
    }

    return (
        <div>
            {React.cloneElement(children, {
                value: text,
                onChange: handleChange
            })}
            <div style={{color: color, fontSize: '14px', marginTop: '-5px'}}>
                {text.length}/{max}
            </div>
        </div>
    )
}