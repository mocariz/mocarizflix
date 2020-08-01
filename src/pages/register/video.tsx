import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/layout';


const Page = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Cadastro de Video</h1>

        <Link to="/register/category">
          Cadastrar Categoria
        </Link>
      </div>
    </Layout>
  )
}

export default Page;