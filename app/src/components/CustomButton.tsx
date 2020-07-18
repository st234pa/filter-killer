import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ButtonCallback } from '../App';

type CustomButtonProps = {
  label: string;
  onClick: ButtonCallback;
};

function CustomButton(props: CustomButtonProps) {
  return (
    <div>
      <Row className="justify-content-md-center m-3">
        <Col md={4}>
          <Button block onClick={props.onClick}>
            {props.label}
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CustomButton;
