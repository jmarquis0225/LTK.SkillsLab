import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { addTodo } from '../../store/TodoStore';

const BasicForm = () => (
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values) => {
        addTodo(values);
      }}
    >
      <Form>
        <label htmlFor="todo">Add ToDo </label>
        <Field id="todo" name="Add_ToDo" placeholder="TextHere" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default BasicForm
