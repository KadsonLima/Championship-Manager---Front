import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider ,Container, Typography, Box, Grid, Link, Checkbox} from '@mui/material/';
import  Logo  from '../../../assets/img/JobManager.png';
import useAsync from '../../../hooks/useAsync';
import * as auth from '../../../services/auth';
import {TokenContext} from '../../../contexts/tokenContext';
import { useNavigate } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner';
import { LogoJobManager } from '../../../components/Logo';



const theme = createTheme();

export default function SignIn({setSign}) {
  const { data:response, loading, error , act} = useAsync(auth.signIn, false);
  const {setToken, token} = React.useContext(TokenContext)
  const navigate = useNavigate();

  React.useEffect(()=>{

    if(error){
      alert(error.message)
    }
    if(response) {
      setToken(response)
      localStorage.setItem('token', JSON.stringify(response));
      navigate("/home")  

    }

  },[error, response, token])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
    email: data.get('email'),
    password: data.get('password')
    }
    act(body).then((e)=>{
      console.log(response)
    });
  };

  const loadingTime = loading?<RotatingLines
  strokeColor="white"
  strokeWidth="5"
  width="20"
  visible={true}
/>:'Sign In'

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <LogoJobManager/>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" onChange={(e)=>{handleSubmit(e)}}/>}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
            {loadingTime}
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={()=>{setSign(false)}} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
