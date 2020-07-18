import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Content from './Content';
import { ContentCallback, ButtonCallback } from '../App';
import CustomButton from './CustomButton';

type EmailPreviewProps = {
  to: string | null;
  cc: string | null;
  bcc: string | null;
  subject: string;
  randomizedSubject: string;
  body: string;
  randomizedBody: string;
  doneEditing: boolean;
  setSubject: ContentCallback;
  setBody: ContentCallback;
  onDoneEditing: ButtonCallback;
  backToEdit: ButtonCallback;
};

function EmailPreview(props: EmailPreviewProps) {
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
          {props.doneEditing
            ? props.subject && <p>Subject: {props.randomizedSubject}</p>
            : Content({
                label: 'Subject:',
                placeholder: 'No Subject',
                action: props.setSubject,
                value: props.subject,
                helperText:
                  'For security reasons, content needs to be plain text',
                errorMessage: '',
                isLongText: false,
              })}
        </Col>
      </Row>
      <Row>
        <Col>
          {props.doneEditing
            ? props.body && <p>Body: {props.randomizedBody}</p>
            : Content({
                label: 'Body:',
                placeholder: 'No Body',
                action: props.setBody,
                value: props.body,
                helperText:
                  'For security reasons, content needs to be plain text',
                errorMessage: '',
                isLongText: true,
              })}
        </Col>
      </Row>
      {props.doneEditing ? (
        <CustomButton label="Back to Edit" onClick={props.backToEdit} />
      ) : (
        <CustomButton label="Done Editing" onClick={props.onDoneEditing} />
      )}
    </div>
  );
}

export default EmailPreview;
