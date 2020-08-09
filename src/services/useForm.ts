import React, { useState } from 'react';

const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);

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

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;