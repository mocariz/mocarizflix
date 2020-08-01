import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Layout from '../../components/layout';


const Page = () => {
  return (
    <Layout>
      <Container>
        <Grid container>
          <Grid item xs={12} style={{ padding: '50px 0'}}>
            <Typography gutterBottom align="center" variant="h2">Cadastro de Vídeo</Typography>
          </Grid>
          <Grid item xs={12} justify="flex-end" style={{ display: 'flex' }}>
            <Button component={Link} to="/register/category" variant="contained">
              Cadastrar Categoria
            </Button>
          </Grid>
          <form style={{ width: '100%', paddingTop: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                todo
              </Grid>
              <Grid item xs={12} justify="space-between" style={{ display: 'flex' }}>
                <Button component={Link} to="/" variant="contained">
                  Voltar
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Page;