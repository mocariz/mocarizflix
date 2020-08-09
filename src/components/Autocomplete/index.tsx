import React, { useState, useEffect } from 'react';
import { find } from 'lodash';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import API from '../../services/api';
import * as S from './styled';

export interface ComponentProps {
  id: string;
  value: number;
  onChange: (field: any, value: any) => void;
  error?: boolean;
}

const Component = (props: ComponentProps) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState({ name: '', id: 0 });

  useEffect(() => {
    API.getAll('categories')
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
        getValueOption();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])

  const getValueOption = () => {
    const option = find(categories, { id: props.value });
    if (option)
      //@ts-ignore
      setValue(option);
  }

  const onChange = (event: any, value: any) => {
    if (value && value.id) {
      setValue(value);
      props.onChange(props.id, value.id);
    } else {
      setValue({ name: '', id: 0 });
      props.onChange(props.id, null);
    }
  }

  return (
    <S.Field
      id={props.id}
      options={categories}
      getOptionLabel={(option: any) => option.name}
      value={value}
      loading={isLoading}
      fullWidth
      onChange={onChange}
      renderInput={(params: any) => (
        <TextField
          {...params}
          label="Categoria"
          variant="filled"
          fullWidth
          required
          error={props.error}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
}

export default Component;