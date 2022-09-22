import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Chittagong" special="Invetation"></District>
      <District name="Syhlet" special="Eduction"></District>
      <District name="Rajshahi" special="Mango"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Post: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post(props) {
  return (
    <div style={{ backgroundColor: 'lightgray', margin: '20px', borderRadius: '20px', padding: '15px', border: '4px solid salmon' }}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    setPower(power * 2);
    // const newPower = power * 2;
    // setPower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Special: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}
export default App;
