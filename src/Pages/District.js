import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const columns = [
  { id: 'Sr.', label: 'Sr.', minWidth: 50 },
  { id: 'District', label: 'District', minWidth: 50 },
  {
    id: 'Catagory',
    label: 'Catagory',
    minWidth: 90,
    align: 'end',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Actions',
    label: 'Actions',
    minWidth: 90,
    align: 'end',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(Sr, Games, Catagory, Actions) {
  return { Sr, Games, Catagory, Actions };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function District() {
  const [data, setData] = useState([{ 'role1': 'student1' }, { 'role2': 'student2' }])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(async () => {
    const datasend = { 'role': 'District' }
    const res = await axios.post("https://boardswitch.herokuapp.com/get_user/", datasend)
    if (res.status = 200) {
      console.warn(res.data)
      setData(res.data)

    }
  }, [])

  const [id, setId] = useState()
  const remove = async (id) => {
    console.warn('remove', id)
    const datasend = { 'id': id, 'role': 'District' }
    const res = await axios.post("https://boardswitch.herokuapp.com/delete_user/", datasend)
    console.warn(res)
  }


  return (
    <>
      <div >
        <div style={{ margin: "50px", marginLeft: "250px", }}>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} >
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table" >
                <TableHead>
                  {/* { listdata } */}
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    data?.map((row) => {

                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                          <TableCell key={row.id} align={row.align}>
                            {row.id}
                          </TableCell>
                          <TableCell key={row.district} align={row.district}>
                            {row.district}
                          </TableCell>
                          <TableCell key={row.category} align={row.category} style={{ textAlign: "inherit" }}>
                            {row.category}
                          </TableCell>
                          <div className="row">
                            <div className='col 2'>
                              <Grid item xs={4}>
                                <Button onClick={handleOpen}><AddCircleOutlineIcon /></Button>
                                <Modal
                                  open={open}
                                  onClose={handleClose}
                                  aria-labelledby="modal-modal-title"
                                  aria-describedby="modal-modal-description"
                                >
                                  <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                      <div>
                                        <h4>Update the info</h4>
                                        <form>
                                          <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputText" placeholder="Sr." />
                                          </div>
                                          <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputText" placeholder="District" />
                                          </div>
                                          <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputText" placeholder="Catagory" />
                                          </div>

                                          <button type="submit" className="btn btn-primary" style={{ marginLeft: "236px" }}>Update</button>
                                        </form>
                                      </div>
                                    </Typography>
                                  </Box>
                                </Modal>
                              </Grid>
                            </div>
                            <div className='col 2'>
                              <Grid item xs={8} onClick={() => remove(row.id)}>
                              <div style={{
                                  color:"red",
                                }} >
                                <DeleteIcon />
                                </div>
                              </Grid>
                            </div>
                          </div>
                        </TableRow>

                      )
                    })
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>


      </div>


    </>



  );
}