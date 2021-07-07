import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function AppNav(props) {

	const { classes } = props;

	return (

		<nav className="Nav">
			<Link className="logo" rel="shortcut icon" to="#">
				<img src="../images/GiT.jpg" alt="GiT" width="500" height="600" />
			</Link>
			<AppBar className={classes.NavColor} position="static">
				<Toolbar variant="dense">
					<Typography variant="h6" component="p">Gestión de pacientes</Typography>
				</Toolbar>
			</AppBar>
			<div className="Nav" style={{ display: "flex" }}>
				<div
					style={{
						padding: "10px",
						width: "100%",
						background: "#f0f0f0"
					}}
				>
					<ul className="Nav__item-wrapper" style={{ listStyleType: "none", padding: 0 }}>
						<li className="Nav__item">
							<Link className="Nav__link" to="/registro">Registro </Link>
						</li>

						<li className="Nav__item">
							<Link className="Nav__link" to="/acceso">Acceso </Link>
						</li>

						<li className="Nav__item">
							<Link className="Nav__link" to="/datos">Listado de datos </Link>
						</li>

						<li className="Nav__item">
							<Link className="Nav__link" to="/validacion">Validación</Link>
						</li>

						<li className="Nav__item">
							<Link className="Nav__link" to="/observaciones">Observaciones</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default withStyles({
	NavColor: {
		backgroundColor: '#EF5350'
	}
})(AppNav);