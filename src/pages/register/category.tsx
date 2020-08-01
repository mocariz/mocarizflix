import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Layout from '../../components/layout';
import TextField from '../../components/TextField';

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    name: '',
    color: '#581F6E',
    description: ''
  });

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (response) => {
          if (response.ok) {
            const items = await response.json();
            setCategories(items);
            return;
          }
          throw new Error('Failed to retrieve categories list');
        });
    }
  }, [])

  const handleChange = (field: string, value: string) => {
    setValues({
      ...values,
      [field]: value
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(values);
  }

  return (
    <Layout>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography gutterBottom align="center" variant="h2">Cadastro de Categoria</Typography>
          </Grid>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={10} md={11}>
                <TextField
                  id="name"
                  label="Caterogia"
                  value={values.name}
                  type="text"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2} md={1}>
                <TextField
                  id="color"
                  label="Cor"
                  type="color"
                  value={values.color}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="description"
                  label="Descrição"
                  type="textarea"
                  value={values.description}
                  onChange={handleChange}
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
    </Layout>
  )
}

export default Page;