
import React from 'react'
import imagen2 from '../assets/images/descripcion-de-empresa.jpg'
import Card from 'react-bootstrap/Card';
import imagenSSD from '../assets/images/ssd.jpg'
import memorias from '../assets/images/memorias.jpg'
import procesadores from '../assets/images/procesadores.jpg'

function informacion() {
  return (
    <div className='row' >
        <div className=' col-lg-6'>
            <img src={imagen2} style={{ width: '100%' }}alt="descripcion empresa" />
        </div>
        <div className=' col-lg-6'>
            <h3>Misión</h3>
            <p>Hacer el aprendizaje accesible y emocionante para todos, creando herramientas digitales que inspiren la curiosidad y el conocimiento.</p>
            <h3>Visión</h3>
            <p>Ser la plataforma líder que revolucione la educación, conectando a estudiantes y docentes de todo el mundo a través de la tecnología.</p>
        </div>
        
        <div className=' col-lg-4'>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Tarjeta SSD</Card.Title>
                    <img src={imagenSSD} style={{ width: '50%' }} alt="Tarjeta SSD"/>
                    <Card.Text>
                    Dale una nueva vida a tu computador. Con este disco SSD, experimentarás arranques instantáneos, carga de programas ultrarrápida y una multitarea fluida como nunca antes. ¡Actualiza tu rendimiento de inmediato!
                    </Card.Text>
                    <Card.Link href="#">Pincha aqui</Card.Link>
                    
                </Card.Body>
            </Card>
        </div>
        <div className=' col-lg-4'>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Memorias</Card.Title>
                    <img src={memorias} style={{ width: '50%' }} alt="Memorias" />
                    <Card.Text>
                     ¡Aumenta tus FPS y reduce los tirones! Con esta memoria RAM, tu sistema manejará los juegos más exigentes y las tareas pesadas sin esfuerzo, garantizando una experiencia fluida y rápida en todo momento.
                    </Card.Text>
                    <Card.Link href="#">Pincha aqui</Card.Link>
                    
                </Card.Body>
            </Card>
        </div>
        <div className=' col-lg-4'>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Procesadores</Card.Title>
                    <img src={procesadores} style={{ width: '50%' }} alt="Procesadores" />
                    <Card.Text>
                    Libera el máximo rendimiento en tus juegos. Este procesador de última generación está diseñado para ofrecerte la fluidez y velocidad que necesitas para dominar cada partida, con un rendimiento excepcional que evitará cuellos de botella con tu tarjeta gráfica.
                    </Card.Text>
                    <Card.Link href="#">Pincha aqui</Card.Link>
                    
                </Card.Body>
            </Card>
        </div>
        
    </div>
  );
}

export default informacion;