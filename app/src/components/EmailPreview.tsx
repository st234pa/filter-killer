import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export type EmailPreviewProps = {
  to: string | null;
  cc: string | null;
  bcc: string | null;
  subject: string | null;
  body: string | null;
};

function EmailPreview(props: EmailPreviewProps) {

  return (
    <div>
    <Container>
      <Row>
        <Col>
          <p>To: {props.to}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Cc: {props.cc}</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default EmailPreview;