import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty, trim, pullAt, findIndex } from 'lodash';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Layout from '../../components/layout';
import TextField from '../../components/TextField';
import Table from '../../components/Table';
import Backdrop from '../../components/Backdrop';

import useForm  from '../../services/useForm';
import API      from '../../services/api';

const INITIAL_VALUES = {
  name: '',
  color: '#581F6E',
  link: '',
  extraLink: {
    text: '',
    url: '',
    backgroundImgYouTubeID: ''
  }
};

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { values, handleChange, clearForm } = useForm(INITIAL_VALUES);

  useEffect(() => {
    API.getAll('categories')
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setValidated(true);

    if (event.target.checkValidity()) {
      onCreateCategory();
    }
  }

  const onCreateCategory = () => {
    setIsLoading(true);

    API.create('categories', values)
      .then((data) => {
        setIsLoading(false);
        setValidated(false);

         //@ts-ignore
        setCategories([
          ...categories,
          data
        ]);
        clearForm();
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  const onRemoveCategory = (categoryId: number) => {
    API.remove('categories', categoryId)
      .then((response) => {
        //@ts-ignore
        const index = findIndex(categories, { id: categoryId });
        pullAt(categories, [index]);
        setCategories([...categories]);
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
            <Typography gutterBottom align="center" variant="h2">Cadastro de Categoria</Typography>
          </Grid>
          <form noValidate onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={10} md={11}>
                <TextField
                  id="name"
                  label="Caterogia"
                  value={values.name}
                  type="text"
                  onChange={handleChange}
                  required
                  error={validated && isEmpty(trim(values.name))}
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
                  error={validated && isEmpty(trim(values.link))}
                />
              </Grid>
              <Grid item xs={12}>
                Configurações do Banner
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
                <Button component={Link} to="/register/video" variant="contained">
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
              onDelete={onRemoveCategory}
              prefix="category"
            />
          </Grid>
        </Grid>
      </Container>

      <Backdrop show={isLoading} />
    </Layout>
  )
}

export default Page;