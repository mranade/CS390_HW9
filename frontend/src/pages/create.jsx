import {useState} from "react";
import {json, Link} from "react-router-dom";
import axios from 'axios';

export function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [done, setDone] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const requestData = {title, content};
    const headers = {"content-type": "application/json"};
    axios.post('http://localhost:3000/blog/create-post', {title: title, content: content}, headers);
    // ??
    console.log(requestData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
      </div>
      <button>Post</button>
      <div>
        <Link to="/view">Check out your currrent blog posts</Link>
      </div>
      <div><Link to="/index">Home</Link></div>
    </form>
  );
}
