
import React from 'react'
import imagen2 from '../assets/images/descripcion-de-empresa.jpg'
import Card from 'react-bootstrap/Card';

function informacion() {
  return (
    <div className='row'>
        <div className=' col-lg-6'>
            <img src={imagen2} alt="descripcion empresa" />
        </div>
        <div className=' col-lg-6'>
            <h3>Misión</h3>
            <p>Hacer el aprendizaje accesible y emocionante para todos, creando herramientas digitales que inspiren la curiosidad y el conocimiento.</p>
            <h3>Visión</h3>
            <p>Ser la plataforma líder que revolucione la educación, conectando a estudiantes y docentes de todo el mundo a través de la tecnología.</p>
        </div>
        
        <div className=' col-lg-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
        <div className=' col-lg-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
        <div className=' col-lg-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
        
    </div>
  );
}

export default informacion;