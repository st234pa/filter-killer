import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Content from './Content';
import { ContentCallback, ButtonCallback } from '../App';

type EmailEditProps = {
  to: string | null;
  cc: string | null;
  bcc: string | null;
  subject: string;
  body: string;
  doneEditing: boolean;
  setSubject: ContentCallback;
  setBody: ContentCallback;
  onDoneEditing: ButtonCallback;
};

function EmailEdit(props: EmailEditProps) {
  if (props.doneEditing) {
    return null;
  }
  return (
    <div>
      {props.to && (
        <Row>
          <Col>
            <p>To: {props.to.replace(/,/g, ', ')}</p>
          </Col>
        </Row>
      )}
      {props.cc && (
        <Row>
          <Col>
            <p>Cc: {props.cc.replace(/,/g, ', ')}</p>
          </Col>
        </Row>
      )}
      {props.bcc && (
        <Row>
          <Col>
            <p>Cc: {props.bcc.replace(/,/g, ', ')}</p>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          {Content({
            label: 'Subject:',
            placeholder: 'No Subject',
            action: props.setSubject,
            value: props.subject,
            helperText: 'For security reasons, content needs to be plain text',
            errorMessage: '',
            isLongText: false,
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          {Content({
            label: 'Body:',
            placeholder: 'No Body',
            action: props.setBody,
            value: props.body,
            helperText: 'For security reasons, content needs to be plain text',
            errorMessage: '',
            isLongText: true,
          })}
        </Col>
      </Row>
      <Row className="justify-content-md-center m-3">
        <Col md={4}>
          <Button block onClick={props.onDoneEditing}>
            Done Editing
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default EmailEdit;
