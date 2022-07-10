import { useNavigate } from 'react-router-dom';
import './Backbutton.css'

function BackButton() {
  const navigate = useNavigate();

  return (
    <>
        <button className='button' onClick={() => navigate(-1)}>
            RETORNAR
        </button>
    </>
  );
}

export default BackButton