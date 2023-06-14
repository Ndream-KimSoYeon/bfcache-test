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
      <Link to="/second">페이지 이동</Link>
    </div>
  );
}

export default Main;
