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
import Spinner from '../Components/Spinner';
import Grid from '@mui/material/Grid';
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
  { id: 'Teachers', label: 'Teachers', minWidth: 50 },
  {
    id: 'Catagory',
    label: 'Catagory',
    minWidth: 90,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Actions',
    label: 'Actions',
    minWidth: 90,
    align: 'left',
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

export default function Teacher() {
  const [data, setData] = useState([{ 'role1': 'student1' }, { 'role2': 'student2' }])
  const [loading, setLoading] = useState (true);
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
  const fetchingdata = async () => {
    const datasend = { 'role': 'teacher' }
    const res = await axios.post("https://boardswitch.herokuapp.com/get_user/", datasend)
    if (res.status = 200) {
      console.warn(res.data)
      setData(res.data)
      setLoading(false)

    }
  }
  useEffect(async () => {
    fetchingdata()
  }, [])

  const [id, setId] = useState()
  const remove = async (id) => {
    const datasend = { 'id': id, 'role': 'teacher' }
    const res = await axios.post("https://boardswitch.herokuapp.com/delete_user/", datasend)
    fetchingdata()
  }


  return (
    <>
     <div>
          <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{width:"850px",height:"210px", marginLeft:"100px", marginTop:"3%", color:"#0D223F"}} >
          <h3 className="text-center mt-4">Teacher</h3>
          {loading ?  <Spinner />: <>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table" style={{width:"100%", marginLeft:"8%"}}>
                <TableHead>
                  {/* { listdata } */}
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth , color:"#0D223F", fontWeight:"bolder"}}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    data?.map((row, index) => {

                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                          <TableCell key={row.id} align={row.align}>
                            {index+1}
                          </TableCell>
                          <TableCell key={row.teacher} align={row.teacher}>
                            {row.teacher}
                          </TableCell>
                          <TableCell key={row.category} align={row.category} style={{ textAlign: "inherit" }}>
                            {row.category}
                          </TableCell>
                          <div className="d-flex flex-row">
                            <div className='p-2'>
                              <Grid item xs={4}>
                              <Button onClick={handleOpen}><img src='/images/action.png' alt='action' style={{height:"28px", marginTop:"2px"}}/></Button>
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
                                            <input type="text" className="form-control" id="exampleInputText" placeholder="Teachers" />
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
                            <div className='p-2'>
                              <Grid item xs={8} onClick={() => remove(row.id)}>
                              <div style={{
                                  color:"red",
                                }} >
                               <img src='/images/delete.png' alt='delete' style={{height:"28px", marginTop:"8px" , alignItems:"right"}} />
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
            </TableContainer> </>}
          </Paper>
        </div>


    </>



  );
}
