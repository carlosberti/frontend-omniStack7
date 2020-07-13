import React from 'react';
import s from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import camera from '../../assets/camera.svg';

const Header: React.FC = () => (
    <s.Header>
        <s.Container>
            <Link to="/">
                <img src={logo} alt="InstaRocket" />
            </Link>
            <Link to="/new">
                <img src={camera} alt="Enviar publicação" />
            </Link>
        </s.Container>
    </s.Header>
)

export default Header;