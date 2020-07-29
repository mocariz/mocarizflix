import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/layout';


const Page = () => {
  return (
    <Layout>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Ir para home
      </Link>
    </Layout>
  )
}

export default Page;