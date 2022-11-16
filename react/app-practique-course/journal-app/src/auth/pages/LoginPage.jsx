import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";

export const LoginPage = () => {
    return (
        <form>            
            <Grid container>

                <Grid item xs={12} sx={{mt: 2}}>
                    <TextField
                        label='Correo'
                        type='email'
                        placeholder='correo@google.com'
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sx={{mt:2}}>
                    <TextField
                        label='contraseña'
                        type='password'
                        placeholder="Contraseña"
                        fullWidth
                    />
                </Grid>
                
                <Grid container spacing={2} sx={{mb: 2, mt: 1}}>

                    <Grid item xs={12} sm={6}>
                        <Button variant='contained' fullWidth>
                            Login
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button variant='contained'>
                            <Google/>
                            <Typography sx={{ml:1}}>Google</Typography>
                        </Button>
                    </Grid>
                    
                </Grid>

            </Grid>
        </form>
    );
};

