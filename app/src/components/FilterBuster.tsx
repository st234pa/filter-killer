import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import EmailEdit from './EmailEdit';
import EmailPreview from './EmailPreview';
import { addRandomizedCharacters } from '../App';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function FilterBuster() {
  let query = useQuery();
  // ex. <homepage>?to=<to>&bcc=<bcc>
  const templateSubject = query.get('subject');
  const [subject, setSubject] = React.useState<string>(
    templateSubject ? templateSubject : ''
  );
  const [randomizedSubject, setRandomizedSubject] = React.useState<string>('');
  const templateBody = query.get('body');
  const [body, setBody] = React.useState<string>(
    templateBody ? templateBody : ''
  );
  const [randomizedBody, setRandomizedBody] = React.useState<string>('');
  const [doneEditing, setDoneEditing] = React.useState<boolean>(false);

  function onDoneEditing() {
    window.scrollTo(0, 0);
    setDoneEditing(true);
    setRandomizedSubject(addRandomizedCharacters(subject));
    setRandomizedBody(addRandomizedCharacters(body));
  }
  function onBackToEdit() {
    window.scrollTo(0, 0);
    setDoneEditing(false);
  }

  function onOpenInMail() {
    let recipientsList: string | null = query.get('to');
    let ccList: string | null = query.get('cc');
    if (ccList) {
      ccList = `cc=`.concat(ccList);
    } else {
      ccList = '';
    }
    let bccList: string | null = query.get('bcc');
    if (bccList) {
      bccList = `&bcc=`.concat(bccList);
    } else {
      bccList = '';
    }
    let subjectString: string = '';
    if (randomizedSubject !== '') {
      subjectString = `&subject=${encodeURIComponent(randomizedSubject)}`;
    }
    let bodyString: string = `&body=${encodeURIComponent(randomizedBody)}`;
    window.open(
      `mailto:${
        recipientsList ? recipientsList : ''
      }?${ccList}${bccList}${subjectString}${bodyString}`
    );
  }

  return (
    <Container className="pt-3">
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <h1 className="text-center mb-3">Filter Buster</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-0">
        <Col lg={8}>
          <p className="text-center mb-0">
            Inspired by{' '}
            <a
              href="https://linktr.ee/justiceforelijahmcclain"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Justiceforelijahmcclain
            </a>
            , we've created a new tool to help make sure that your email isn't
            ignored by your intended recipients. After you finish editing the
            content of your email, Filter Buster inserts a randomized character
            into each word to bypass any filters.
          </p>
          <p className="text-center mb-3">
            <small>&mdash; Sarah and Stephanie Yoon</small>
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-3">
        <Col lg={8}>
          <Card>
            <Card.Body className="pb-2">
              <Row>
                <Col>
                  <h2 className="break-word">
                    {subject
                      ? !doneEditing
                        ? subject
                        : randomizedSubject
                      : '[No Subject]'}
                  </h2>
                  {(query.get('to') ||
                    query.get('cc') ||
                    query.get('bcc') ||
                    !doneEditing) && <br className="mb-4" />}
                </Col>
              </Row>
              <EmailEdit
                to={query.get('to')}
                cc={query.get('cc')}
                bcc={query.get('bcc')}
                subject={subject}
                body={body}
                setSubject={setSubject}
                setBody={setBody}
                doneEditing={doneEditing}
                onDoneEditing={onDoneEditing}
              />
              <EmailPreview
                to={query.get('to')}
                cc={query.get('cc')}
                bcc={query.get('bcc')}
                subject={randomizedSubject}
                body={randomizedBody}
                doneEditing={doneEditing}
                onBackToEdit={onBackToEdit}
                onOpenInMail={onOpenInMail}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FilterBuster;
