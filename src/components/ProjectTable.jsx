import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function ProjectTable({ data, onAction }) {
	//table columns
	const columns = [
		{ field: "name", headerName: "Proyecto", width: 200 },
		{ field: "status", headerName: "Estatus", width: 200 },
		{ field: "assignment", headerName: "Asignacion", width: 200 },
		{ field: "reassignment", headerName: "Reasignacion", width: 200 },
		{
			field: "id",
			headerName: "Asignar",
			width: 100,
			align: "center",
			renderCell: (data) => (
				<IconButton aria-label="add" onClick={() => onAction(data.row)}>
					<AddCircleOutlineIcon titleAccess="Asignar" />
				</IconButton>
			),
		},
	];

	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[10]}
			/>
		</div>
	);
}
