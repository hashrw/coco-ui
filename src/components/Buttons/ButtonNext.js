import Button from 'react-bootstrap/Button';

 function ButtonValidar(props) {

  const next = ()=>{};
  return (
    <div>
      <Button href="/resultados" style={{
          height: 42,
          width: 90,
          marginTop: 100,
          marginLeft: 1135
        }} variant="outline-dark">Validar</Button> 
    </div>
  );
}

export default ButtonValidar;

