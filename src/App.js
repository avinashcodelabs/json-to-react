import React, { useState } from 'react';

const Form = () => {
  const [formState, setFromState] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('formState', formState);
  };

  const handleOnChange = (field) => (event) => {
    setFromState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormRenderer
        config={getJsonForm({
          state: formState,
          onChange: handleOnChange,
        })}
      />
    </form>
  );
};

const getJsonForm = ({ state, onChange }) => {
  return [
    {
      name: 'email',
      id: 'email',
      type: 'text',
      component: 'input',
      label: 'Email',
      placeholder: 'Enter email here',
      value: state['email'],
      onChange: onChange('email'),
    },
    {
      name: 'password',
      id: 'password',
      type: 'password',
      component: 'input',
      label: 'Password',
      placeholder: 'Password here',
      value: state['password'],
      onChange: onChange('password'),
    },
    {
      component: 'button',
      children: 'Login',
    },
  ];
};

const FormRenderer = ({ config }) => {
  return config.map((item) => {
    const { component: Component, ...props } = item;
    return (
      <div key={props.id}>
        <label>{props.label}</label>
        <div>
          <Component {...props} />
        </div>
      </div>
    );
  });
};

export { Form };
