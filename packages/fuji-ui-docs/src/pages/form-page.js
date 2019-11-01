import React from 'react';
import DocPage from '../components/doc-page';
import {
  Typography as T,
  Form,
  TextInput,
  Datepicker,
  Box,
  Button,
} from '@fuji-ui/core';

const FormPage = props => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements);
  };
  return (
    <DocPage>
      <T.H1>Form</T.H1>
      <T.P>
        The form element used to collect fields of data that required validation
      </T.P>
      <Box mt="l" p="m" border="light">
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            <TextInput placeholder="Name" />
          </Form.Item>
          <Form.Item>
            <TextInput placeholder="Occupation" />
          </Form.Item>
          <Form.Item>
            <TextInput placeholder="e.g. Senior, Manager" />
          </Form.Item>
        </Form>
      </Box>
      <Box mt="l" p="m" border="light">
        <Form onSubmit={handleSubmit}>
          <Form.Item label="Name" name="form2.name">
            <TextInput />
          </Form.Item>
          <Form.Item label="Occupation" name="form2.occupation">
            <TextInput placeholder="e.g. Retail, Finance" />
          </Form.Item>
          <Form.Item label="Job Title" name="form2.job_title">
            <TextInput placeholder="e.g. Senior, Manager" />
          </Form.Item>
          <Button mt="m" type="submit">
            Submit
          </Button>
        </Form>
      </Box>
    </DocPage>
  );
};

export default FormPage;
