import React, { useState } from 'react';

const TextForm = (props) => {
  const [text, setText] = useState('');
  const [emails, setEmails] = useState([]);

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase!", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase!", "success");
  };

  const handleClear = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared!", "success");
  };

  const handleEmailFounder = () => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
    const foundEmails = text.match(emailRegex);
    setEmails(foundEmails || []);
    props.showAlert("Emails founded", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div style={{ 'color': props.mode === 'dark' ? 'white' : '00063e' }}>
        <div className="container mt-3">
          <div className="form-group">
            <h1>{props.heading}</h1>
            <textarea
              id="exampleTextarea"
              className="form-control"
              value={text}
              onChange={handleOnChange}
              rows="8"
              placeholder="Enter text here"
              style={{ 'background': props.mode === 'dark' ? '#00063e' : 'white','color': props.mode === 'dark' ? 'white' : '00063e' }} />
          </div>
          <button className='btn btn-primary mx-1 my-1' onClick={handleUpperClick}>
            CONVERT TO UPPERCASE
          </button>
          <button className='btn btn-primary mx-1 my-1' onClick={handleLowerClick}>
            convert to lowercase
          </button>
          <button className='btn btn-primary mx-1 my-1' onClick={handleClear}>
            Clear Text
          </button>
          <button className='btn btn-primary mx-1 my-1' onClick={handleEmailFounder}>
            Find E-Mail
          </button>
        </div>
        <div className="container mt-3">
          <h1>Your text summary</h1>
          <p>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(/\s+/).filter(word => word.length > 0).length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter the text  in the above textarea"}</p>

          <h2>Found Emails</h2>
          {emails.length > 0 ? (
            <ul>
              {emails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          ) : (
            <p>No emails found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TextForm;
