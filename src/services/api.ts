function getAll(prefix: string) {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/${prefix}`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllCategoriesWithVideos() {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/categories?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}


function create(prefix: string, body: any) {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/${prefix}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

function remove(prefix: string, id: number) {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/${prefix}/${id}`, {
    method: 'DELETE'
  })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }

      throw new Error('Não foi possível remover o item :(');
    });
}

export default {
  getAll,
  getAllCategoriesWithVideos,
  create,
  remove,
};