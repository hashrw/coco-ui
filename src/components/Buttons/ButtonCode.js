import { Button } from "react-bootstrap";
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

<script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script>

export default function ButtonCode(props){
    return (
        <div>
        <Button className="boton" FontAwesomeIcon icon="fa-solid fa-eye" style={{
            height: 1,
            width: 5,
            marginTop: 1,
            marginLeft: 5,
          }} variant="outline-dark">
        </Button>
        </div>
    )
}