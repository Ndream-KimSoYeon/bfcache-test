import './App.css';
import { Link } from 'react-router-dom';


function Main() {
  return (
    <div className="main">
      <p>메인</p>
      <button>색 변경</button>
      <Link to="/second">페이지 이동</Link>
    </div>
  );
}

export default Main;
