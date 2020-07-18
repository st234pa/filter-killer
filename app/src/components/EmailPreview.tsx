import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ButtonCallback } from '../App';

type EmailPreviewProps = {
  to: string | null;
  cc: string | null;
  bcc: string | null;
  subject: string;
  body: string;
  doneEditing: boolean;
  onBackToEdit: ButtonCallback;
  onOpenInMail: ButtonCallback;
};

function EmailPreview(props: EmailPreviewProps) {
  if (!props.doneEditing) {
    return null;
  }
  return (
    <>
      <Row>
        <Col>
          {props.to && <p>To: {props.to.replace(/,/g, ', ')}</p>}
          {props.cc && <p>Cc: {props.cc.replace(/,/g, ', ')}</p>}
          {props.bcc && <p>Bcc: {props.bcc.replace(/,/g, ', ')}</p>}
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="preview-body">
            {props.body ? props.body : '[No body]'}
          </p>
          <hr />
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3 mb-3">
        <Col md={4} className="mb-2">
          <Button block onClick={props.onBackToEdit} variant="secondary">
            Back to Edit
          </Button>
        </Col>
        <Col md={4}>
          <Button block onClick={props.onOpenInMail} className="mb-2">
            Open in Mail
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default EmailPreview;
