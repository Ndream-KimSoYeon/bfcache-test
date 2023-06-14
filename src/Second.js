import './App.css';
import { Link } from 'react-router-dom';


function Second() {
  return (
    <div className="Second">
      <p>두번째 페이지</p>
      <Link to="/">메인으로 이동</Link>
    </div>
  );
}

export default Second;
