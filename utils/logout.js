import { useRouter } from 'next/router';

const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; // Redirect to the login page
};

export default logout;
