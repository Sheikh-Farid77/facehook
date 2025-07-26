import { useNavigate } from 'react-router';
import LogoutIcon from '../../assets/icons/logout.svg'


export default function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login')
    }
    return (
        <button onClick={handleLogout} className="icon-btn cursor-pointer">
            <img src={LogoutIcon} alt="Logout" />
        </button>
    );
}