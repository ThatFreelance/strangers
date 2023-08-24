import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register } from '../API/Register.jsx';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


export default function userRegister() {

    const userRef = useRef();
    const errRef = useRef();

    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false);
    const [result, setRegister] = useState('');

    async function handleSubmit(e, data) {
        e.preventDefault();
        try{
            const result = await Register(user, pwd);
            setRegister(result);
        console.log(result);
        console.log(user, pwd);
        
        }catch (error) {
            console.error(error);
            console.log({user, pwd});
        }
        setUser("");
        setPwd("");
        setValidPwd("");

    }

    return <form method="post" onSubmit={handleSubmit}>

        <h3 id="component-h3"> Register </h3>
        <label>
        <input className='reg-log-input'value={user} onChange={(e) => setUser(e.target.value)} required 
        placeholder=" Username *"/>
        </label>
        <hr />
        <label>
        <input className='reg-log-input' value={pwd} type="password" onChange={(e) => setPwd(e.target.value)} required
        placeholder=" Password *" maxLength="8" minLength="6"/>
        </label>
        <hr />
        <label>
        <input className='reg-log-input' value={validPwd} type="password" onChange={(e) => setValidPwd(e.target.value)} required
        placeholder=" Confirm your password *" maxLength="8" minLength="6" />
        </label>
        <hr />
        <label>
        <button type="submit" onClick={() => navigate(`/Login`)}> Register </button>
        </label>
    </form>
}