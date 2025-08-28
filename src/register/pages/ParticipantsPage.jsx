import { AuthLayout } from "../../auth/layout/AuthLayout"
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'titulo', headerName: 'PROYECTO', width: 200 },
    { field: 'autor', headerName: 'AUTOR', width: 200 },
    { field: 'area', headerName: 'AREA', width: 150 },
    { field: 'institute', headerName: 'INSTITUTO', width: 130 },
    //     { field: 'firstName', headerName: 'First name', width: 130 },
    //     { field: 'lastName', headerName: 'Last name', width: 130 },
    //     {
    //         field: 'age',
    //         headerName: 'Age',
    //         type: 'number',
    //         width: 90,
    //     },
    //     {
    //         field: 'fullName',
    //         headerName: 'Full name',
    //         description: 'This column has a value getter and is not sortable.',
    //         sortable: true,
    //         width: 160,
    //         valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    //     },
];

const rows = [
    { id: 1, titulo: 'Titulo1', autor: 'autor1', area: 'area1', institute: 'institute1' },
    { id: 2, titulo: 'Titulo2', autor: 'autor2', area: 'area2', institute: 'institute2' },
    { id: 3, titulo: 'Titulo3', autor: 'autor3', area: 'area3', institute: 'institute3' },
    { id: 4, titulo: 'Titulo4', autor: 'autor4', area: 'area4', institute: 'institute4' },
    { id: 5, titulo: 'Titulo5', autor: 'autor5', area: 'area5', institute: 'institute5' },
    { id: 6, titulo: 'Titulo6', autor: 'autor6', area: 'area6', institute: 'institute6' },
    { id: 7, titulo: 'Titulo7', autor: 'autor7', area: 'area7', institute: 'institute7' },
    { id: 8, titulo: 'Titulo8', autor: 'autor8', area: 'area8', institute: 'institute8' },
    { id: 9, titulo: 'Titulo9', autor: 'autor9', area: 'area9', institute: 'institute9' },
];

const paginationModel = { page: 0, pageSize: 5 };

export const ParticipantsPage = () => {
    return (
        <AuthLayout title="Participantes registrados">

            <Paper sx={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    // checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </AuthLayout>
    );
}
