import React from 'react';
import { ContentCallback } from '../App';
import Form from 'react-bootstrap/Form';

type ContentProps = {
  label: string;
  placeholder: string;
  action: ContentCallback;
  isLongText: boolean;
  value: string;
  isHidden?: boolean;
  helperText?: string;
  errorMessage?: string;
};

export default function Content(props: ContentProps) {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.action(evt.target.value);
  };
  if (props.isHidden) {
    return;
  }
  let formControl: any;
  if (props.isLongText) {
    formControl = (
      <Form.Control
        as="textarea"
        rows={10}
        placeholder={props.placeholder}
        onChange={handleChange}
        value={props.value}
      />
    );
  } else {
    formControl = (
      <Form.Control
        className={'input ' + (props.errorMessage && ' is-invalid')}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}
      />
    );
  }
  let formText: any;
  if (props.helperText) {
    formText = <Form.Text className="text-muted">{props.helperText}</Form.Text>;
  } else {
    formText = null;
  }
  let formFeedback: any;
  if (props.errorMessage) {
    formFeedback = (
      <Form.Control.Feedback type="invalid">
        {props.errorMessage}
      </Form.Control.Feedback>
    );
  } else {
    formFeedback = null;
  }
  return (
    <Form.Group>
      <Form.Label className="input-label">{props.label}</Form.Label>&nbsp;
      {formControl}
      {formText}
      {formFeedback}
    </Form.Group>
  );
}
