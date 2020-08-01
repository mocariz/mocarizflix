import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Layout from '../../components/layout';
import TextField from '../../components/TextField';
import Table from '../../components/Table';

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    name: '',
    color: '#581F6E',
    link: '',
    extraLink: {
      text: '',
      url: '',
      backgroundImgYouTubeID: ''
    }
  });

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'https://mocarizflix.herokuapp.com/categories';
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
    if (field.includes('.')) {
      const fields = field.split('.');
      setValues({
        ...values,
        [fields[0]]: {
          ...values.extraLink,
          [fields[1]]: value
        }
      })
    } else {
      setValues({
        ...values,
        [field]: value
      })
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(values);
  }

  return (
    <Layout>
      <Container>
        <Grid container>
          <Grid item xs={12} style={{ padding: '50px 0'}}>
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
                  required
                />
              </Grid>
              <Grid item xs={2} md={1}>
                <TextField
                  id="color"
                  label="Cor"
                  type="color"
                  value={values.color}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="link"
                  label="Url"
                  type="text"
                  required
                  value={values.link}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                Extra Link
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="extraLink.text"
                  label="Titulo"
                  type="text"
                  value={values.extraLink.text}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="extraLink.url"
                  label="Video Url"
                  type="text"
                  value={values.extraLink.url}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="extraLink.backgroundImgYouTubeID"
                  label="Id do video do Youtube que será a capa"
                  type="text"
                  value={values.extraLink.backgroundImgYouTubeID}
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

          <Grid item xs={12} style={{ padding: '50px 0'}}>
            <Table
              headers={["Nome"]}
              data={categories}
              prefix="category"
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Page;