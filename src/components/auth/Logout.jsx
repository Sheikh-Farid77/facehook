import { useNavigate } from 'react-router';
import LogoutIcon from '../../assets/icons/logout.svg'
import useAuth from '../../hook/useAuth';


export default function Logout() {
    const navigate = useNavigate();
    const {setAuth} = useAuth(); 

    const handleLogout = () => {
        setAuth({});
        navigate('/login');
    }
    return (
        <button onClick={handleLogout} className="icon-btn cursor-pointer">
            <img src={LogoutIcon} alt="Logout" />
        </button>
    );
}