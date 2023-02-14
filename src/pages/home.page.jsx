import './home.page.css'
import { useState } from 'react';

export default function HomePage(props) {
  const [list, setList] = useState(["ready","set","go"]);
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    setList([...list, text]);
    setText("");
  }

  return (
    <div className="homepage-container">
      <h1>TO-DO List</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="listInput">Add Something: &nbsp;</label>
        <input 
          id="listInput"
          type="text"
          name="listInput" 
          maxLength="40"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}/>
        &nbsp;
        <button type="submit">&nbsp;Add</button>
      </form>
      <ul className="list">
          {list.map((item, id) => {
            return <li key={item + id}>{item}</li>;
          })}
      </ul>
    </div>
  );
}