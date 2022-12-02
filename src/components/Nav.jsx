import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/nav.css'
import logo from '../assets/images/wiicar.png'

const Nav = () => {

    const navigate = useNavigate()

    

    return (
        <nav>
            <section className='basic-nav'>
                <div className='menu-icon'>
                    <span>
                        <i className="fas fa-bars"></i>
                    </span>
                </div>
                <div onClick={() => navigate('/')} className='main-logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='off-container'>
                    <div className='off-button'>
                        <i className="fas fa-power-off"></i>
                        <span>Salir</span>
                    </div>
                </div>
            </section>
            <section className='navigation-nav'>
                <div onClick={()=> navigate('/preparacion')}>
                    <span>
                    <i className="fas fa-car-alt"></i>
                    </span>
                    <p>Preparación</p>
                </div>
                <div onClick={() => navigate('/almacenamiento')}>
                    <span><i className="fas fa-warehouse"></i></span>
                    <p>Almacenamiento</p>
                </div>
                <div onClick={() => navigate('/ventas')}>
                    <span><i className="fa-solid fa-tags"></i></span>
                    <p>En venta</p>
                </div>
                <div onClick={() => navigate('/pedidos')}>
                    <span><i className="fas fa-money-bill"></i></span>
                    <p>Pedidos</p>
                </div>
            </section>
        </nav>
    );
};

export default Nav;