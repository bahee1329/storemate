import React, { useState } from 'react';
import '../components/Selectionsty.css'


function Selection() {
  const [selectedOption, setSelectedOption] = useState('please select'); // Initialize the selected option state

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      
      <select id="selection" value={selectedOption} onChange={handleOptionChange}>
        <option value="">please select</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      
    </div>
  );
}

export default Selection;
