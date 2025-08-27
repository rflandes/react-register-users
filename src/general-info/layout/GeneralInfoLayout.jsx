import { Grid, Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar } from '../components/NavBar';
import { FooterBar } from '../components/FooterBar';


const drawerWidth = 0;

export const GeneralInfoLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

            <NavBar drawerWidth={drawerWidth} />

            {/* <SideBar drawerWidth={ drawerWidth } /> */}

            <div>

                <Box
                    component='main'
                    sx={{ flexGrow: 1, p: 3 }}
                >
                    <div className="text-center">
                        <div className="row justify-content-center mt-5" >
                            <div className="col-12" >

                                <Grid
                                    className='animate__animated animate__fadeIn animate__faster'
                                    container
                                    spacing={0}
                                    direction="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={{
                                        minHeight: 'calc(100vh - 250px)',
                                        color: 'primary.fontcolor',
                                        backgroundColor: 'secondary.main',
                                        borderRadius: 3,
                                        padding: 5
                                    }}
                                >
                                    <Grid item xs={12}>
                                        {children}
                                    </Grid>
                                </Grid>

                            </div>
                        </div>
                    </div>

                </Box>

                <FooterBar />
            </div>


        </Box>
    )
}
