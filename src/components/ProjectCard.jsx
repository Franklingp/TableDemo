import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProjectCard(props) {
	const { id, name, status, assignment, reassignment, onAction } = props;

	if (props.id) {
		return (
			<div style={{ width: "300px" }}>
				<Card sx={{ minWidth: 275 }}>
					<CardContent>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							Proyecto actual
						</Typography>
						<Typography variant="h5" component="div">
							{name}
						</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							{status}
						</Typography>
						<Typography variant="body2">
							{assignment}
							<br />
							{reassignment}
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							variant="outlined"
							color="primary"
							size="small"
							onClick={onAction}
						>
							Terminar proyecto
						</Button>
					</CardActions>
				</Card>
			</div>
		);
	} else {
		return (
			<div style={{ width: "300px" }}>
				<Card sx={{ minWidth: 275 }}>
					<CardContent>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom
						>
							Aun no tienes un proyecto asignado
						</Typography>
					</CardContent>
				</Card>
			</div>
		);
	}
}

export default ProjectCard;
