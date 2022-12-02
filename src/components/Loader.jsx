import React from 'react';
import '../assets/styles/loader.css'
const Loader = () => {
    return (
        <div className='loader-container'>
            <div className='card-loader'>
                <div className='title-loader'>
                    <p>
                        <b>
                            Cargando
                        </b>
                    </p>
                </div>
                <div className='sub-info-loader'>
                    <div className='loader'>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                    <div className='info-loader'>
                        <div className='title-info'>
                            <p>
                                <b>Cargue masivo</b>
                            </p>
                        </div>
                        <div>
                            <p>
                                Espera un momento mientras procesamos los datos, esto puede tardar unos minutos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Loader;