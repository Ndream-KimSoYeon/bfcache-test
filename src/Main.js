import './App.css';
import { useState } from 'react'
import { Link } from 'react-router-dom';


function Main() {
  const [isColor, setIsColor] = useState(false)
  return (
    <div className={isColor ? 'mainColor' : 'main'}>
      <p>메인</p>
      <button onClick={() => {
        setIsColor(true)
      }}>색 변경</button>
      <p>
        <Link to="/second">페이지 이동(react-route Link 사용)</Link>
      </p>
      <p>
        <a href='/second'>페이지 이동(a태그 사용)</a>
      </p>
    </div>
  );
}

export default Main;
