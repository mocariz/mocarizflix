import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty, trim, pullAt, findIndex } from 'lodash';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Layout from '../../components/layout';
import TextField from '../../components/TextField';
import Backdrop from '../../components/Backdrop';
import Autocomplete from '../../components/Autocomplete';

import useForm  from '../../services/useForm';
import API      from '../../services/api';

const INITIAL_VALUES = {
  title: '',
  url: '',
  categoryId: null
};

const Page = () => {
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleChange, clearForm } = useForm(INITIAL_VALUES);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setValidated(true);

    if (event.target.checkValidity()) {
      onCreate();
    }
  }

  const onCreate = () => {
    setIsLoading(true);

    API.create('videos', values)
      .then((response) => {
        setIsLoading(false);
        setValidated(false);
        clearForm();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

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
          <form noValidate onSubmit={handleSubmit} style={{ width: '100%', paddingTop: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="title"
                  label="Titulo"
                  value={values.title}
                  type="text"
                  onChange={handleChange}
                  required
                  error={validated && isEmpty(trim(values.title))}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  id="url"
                  label="Url"
                  value={values.url}
                  type="text"
                  onChange={handleChange}
                  required
                  error={validated && isEmpty(trim(values.url))}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Autocomplete
                  id="categoryId"
                  value={values.categoryId}
                  onChange={handleChange}
                  error={validated && isEmpty(trim(values.categoryId))}
                />
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
      <Backdrop show={isLoading} />
    </Layout>
  )
}

export default Page;