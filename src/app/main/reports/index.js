import Paper from '@mui/material/Paper';
// import Table from "@mui/material/Table";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import TableCell from "@mui/material/TableCell";
// import TableBody from "@mui/material/TableBody";
import formatDate from '../../utils/formateDate';
// import {Button, IconButton} from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from '../../components/Dialog';
import TableContainer from '@mui/material/TableContainer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	IconButton,
	Button,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import DataTable from './pagination-table';

const Reports = () => {
	const [fineReports, setFineReports] = useState(null);
	useEffect(() => {
		const getReportsFine = async () => {
			try {
				const response = await axios.get('report/users/fine');
				// setFineReports(response.data.data)
				setFineReports(Object.values(response.data.data));
				// setLoading(false)
			} catch (error) {
				console.log(error);
			}
		};
		getReportsFine();
	}, []);

	console.log('fineReports', fineReports);

	return (
		<>
			{/* <TableContainer
				style={{
					maxWidth: '90%',
					margin: '0px auto',
					marginTop: '10px',
				}}
				component={Paper}
			>
				<div style={{ overflowX: 'auto' }}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead
							style={{ backgroundColor: 'rgba(70, 70, 127, 1)' }}
						>
							<TableRow>
								<TableCell
									style={{
										fontWeight: 'bold',
										color: 'white',
									}}
								>
									ID
								</TableCell>
								<TableCell
									style={{
										fontWeight: 'bold',
										color: 'white',
									}}
								>
									NAME
								</TableCell>
								<TableCell
									style={{
										fontWeight: 'bold',
										color: 'white',
									}}
									align="left"
								>
									TOTAL LATES
								</TableCell>
								<TableCell
									style={{
										fontWeight: 'bold',
										color: 'white',
									}}
								>
									TOTAL HALF DAYS
								</TableCell>
								<TableCell
									style={{
										fontWeight: 'bold',
										color: 'white',
									}}
									align="left"
								>
									LESS THAN 8 HOURS
								</TableCell>
								<TableCell
									style={{
										fontWeight: 'bold',
										color: 'white',
									}}
									align="left"
								>
									TOTAL FORGOT CHECKOUTS
								</TableCell>
								<TableCell
									style={{
										fontWeight: 'bold',
										color: 'white',
									}}
									align="left"
								>
									TOTAL FINE
								</TableCell>
								<TableCell
									style={{
										fontWeight: 'bold',
										color: 'white',
									}}
									align="left"
								>
									STATUS
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell align="left">1</TableCell>
								<TableCell align="left">
									Project Alpha
								</TableCell>
								<TableCell align="left">5</TableCell>
								<TableCell align="left">2</TableCell>
								<TableCell align="left">3</TableCell>
								<TableCell align="left">1</TableCell>
								<TableCell align="left">100</TableCell>
								<TableCell
									style={{
										display: 'flex',
										gap: '10px',
										alignItems: 'center',
									}}
									align="left"
								>
									<IconButton
										aria-label="edit"
										onClick={() =>
											console.log('Edit Project Alpha')
										}
									>
										<EditIcon
											style={{
												color: 'rgb(70, 70, 127)',
											}}
										/>
									</IconButton>
									<Button
										variant="outlined"
										onClick={() =>
											console.log('Delete Project Alpha')
										}
										startIcon={<DeleteIcon />}
										style={{
											color: 'rgb(70, 70, 127)',
											borderColor: 'rgb(70, 70, 127)',
										}}
									>
										DELETE
									</Button>
								</TableCell>
							</TableRow>
							<TableRow
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell align="left">2</TableCell>
								<TableCell align="left">Project Beta</TableCell>
								<TableCell align="left">3</TableCell>
								<TableCell align="left">1</TableCell>
								<TableCell align="left">4</TableCell>
								<TableCell align="left">2</TableCell>
								<TableCell align="left">150</TableCell>
								<TableCell
									style={{
										display: 'flex',
										gap: '10px',
										alignItems: 'center',
									}}
									align="left"
								>
									<IconButton
										aria-label="edit"
										onClick={() =>
											console.log('Edit Project Beta')
										}
									>
										<EditIcon
											style={{
												color: 'rgb(70, 70, 127)',
											}}
										/>
									</IconButton>
									<Button
										variant="outlined"
										onClick={() =>
											console.log('Delete Project Beta')
										}
										startIcon={<DeleteIcon />}
										style={{
											color: 'rgb(70, 70, 127)',
											borderColor: 'rgb(70, 70, 127)',
										}}
									>
										DELETE
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</TableContainer> */}

			<div style={{
                maxWidth: '1067px',
                marginTop: '20px',
            }} className="container mt-10">
				<DataTable />
			</div>
		</>
	);
};

export default Reports;
