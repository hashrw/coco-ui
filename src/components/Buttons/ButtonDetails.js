import Button from 'react-bootstrap/Button';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonDetails(props){
    return (
        <div>
          <Button className="btn" href="/details" style={{
              height: 5,
              width: 5,
              marginTop: 1,
              marginLeft: 10,
            }} variant="outline-dark"><FontAwesomeIcon icon="fa-solid fa-eye" /></Button> 
        </div>
      );
}
