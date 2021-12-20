import React, { useState } from "react";

//material components
import { Typography, Button, Grid } from "@mui/material";

//components
import ProjectTable from "../components/ProjectTable";
import ProjectCard from "../components/ProjectCard";

function App() {
	//current proyect
	const [assignedProject, setAssignedProject] = useState(null);

	//data fromm API
	const [projectsData] = useState([
		{
			id: 1,
			name: "Proyecto_1",
			status: "Disponible",
			assignment: "Lorem ipsum",
			reassignment: "Reasignacion",
		},
		{
			id: 2,
			name: "Proyecto_2",
			status: "Disponible",
			assignment: "Lorem ipsum ",
			reassignment: "Reasignacion",
		},
		{
			id: 3,
			name: "Proyecto_3",
			status: "Disponible",
			assignment: "Lorem ipsum ",
			reassignment: "Reasignacion",
		},
		{
			id: 4,
			name: "Proyecto_4",
			status: "Disponible",
			assignment: "Lorem ipsum ",
			reassignment: "Reasignacion",
		},
		{
			id: 5,
			name: "Proyecto_5",
			status: "Disponible",
			assignment: "Lorem ipsum ",
			reassignment: "Reasignacion",
		},
	]);

	//assign new project
	const onAssign = (data) => {
		/* api call */
		if (!assignedProject) {
			setAssignedProject(data);
			alert(`Se ha asignado el proyecto ${data.name} satisfactoriamente`);
		} else {
			alert("No se puede asignar un nuevo proyecto si aun tiene uno activo");
		}
	};

	//end current proyect
	const onEndProject = () => {
		/* api call */
		setAssignedProject(null);
		alert(
			"Se ha entregado el proyecto exitosamente, ahora puedes asignarte otro."
		);
	};

	//automatic assignment
	const onAssignemntHandler = () => {
		/* api call */
		const suffle = Math.trunc((Math.random() * 10) % 5);
		onAssign(projectsData[suffle]);
	};

	return (
		<Grid container spacing={3} alignItems="center">
			<Grid item xs={12}>
				<Typography variant="h3" align="left">
					Revision y validacion de proyectos
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<ProjectCard {...assignedProject} onAction={onEndProject} />
			</Grid>
			<Grid item xs={12}>
				<Typography align="left" variant="p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis
					neque nec blandit lobortis. Ut id luctus turpis. Morbi non metus non
					mi dapibus vulputate ut sit amet diam. Integer aliquam fermentum
					cursus. Aenean id mi turpis. Vivamus faucibus nunc vel sem facilisis
					venenatis non at sapien. Nullam in pellentesque arcu. Integer sed
					nulla eu lacus mollis rhoncus. Aenean ullamcorper orci in lectus
					hendrerit cursus. In condimentum nibh vel enim finibus posuere.
					Pellentesque a porta est, ut cursus dui. Nam scelerisque ultricies
					leo. Nunc finibus suscipit finibus. Proin eu neque eget nulla blandit
					rutrum non non nunc. Phasellus ullamcorper, felis vitae luctus
					pretium, tellus mauris vestibulum sem, nec tempus sapien augue sit
					amet diam.
				</Typography>
				<br />
				<Button
					variant="contained"
					color="success"
					size="large"
					style={{ margin: "1em" }}
					onClick={onAssignemntHandler}
				>
					Asignacion automatica
				</Button>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h3" align="left">
					Asignacion Manual
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<ProjectTable data={projectsData} onAction={onAssign} />
			</Grid>
		</Grid>
	);
}

export default App;
