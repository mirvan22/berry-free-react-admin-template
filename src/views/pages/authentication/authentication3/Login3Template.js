import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import { Box } from '@mui/system';

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div id="PageLogin">
            <div id="RightLogin">
                <Grid id="LoginFormright" container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                    <div className="WaterEffect"></div>
                    <Grid item xs={6}>
                        <Grid
                            container
                            justifyContent={matchDownSM ? 'center' : 'flex-end'}
                            alignItems="center"
                            sx={{ minHeight: 'calc(100vh - 68px)' }}
                        >
                            <Grid item sx={{ m: { xs: 3, sm: 3 }, mb: 0 }}>
                                <AuthCardWrapper>
                                    <Grid container spacing={2} alignItems="center" justifyContent="center">
                                        <Grid item sx={{ mb: 0 }}></Grid>
                                        <Grid item xs={12}>
                                            <Grid
                                                container
                                                direction={matchDownSM ? 'column-reverse' : 'row'}
                                                alignItems="center"
                                                justifyContent="center"
                                            ></Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <AuthLogin />
                                        </Grid>
                                        <Grid item xs={12}></Grid>
                                        <Grid item xs={12}>
                                            <Grid item container direction="column" alignItems="center" xs={12}></Grid>
                                        </Grid>
                                    </Grid>
                                </AuthCardWrapper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            {matchDownSM ? (
                <div></div>
            ) : (
                <div id="LeftLogin">
                    <h1>
                        tirta <span>sasmita</span>
                    </h1>
                    Air mineral sehat dan alami kemasan gallon 19 L, Tirta Sasmita diolah dengan teknologi reverse osmosis (RO). Memberikan
                    layanan dengan kualitas terbaik air minum.
                    <div className="FooterBackground"></div>
                </div>
            )}
        </div>
    );
};

export default Login;
