/* eslint-disable camelcase */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button, Card } from 'react-bootstrap';
import moment from 'moment';

export default function JobDetails({ details, onResetView }) {
// eslint-disable-camelcase
  const {
    type,
    title,
    description,
    location,
    company,
    company_url,
    company_logo,
    how_to_apply,
    created_at
  } = details;

  const string = company;
  let companyInitial;
  if (string) {
    companyInitial = string.substring(0, 1);
  }

  return (
    <>
      <div className="job-details-container col-12">
        <header className="m-0 p-0 job-card-background row col-12 d-flex justify-content-center">
          {company_logo
            ? <img className="d-none d-lg-block details-company-logo"
              height="150" width="150" src={company_logo} alt={company} />
            : <h1 className="m-0 p-0"><span
              className="badge details-badge font-weight-bold
                      text-white details-company-logo d-flex justify-content-center
                      align-items-center m-0 p-0">
              {companyInitial || ''}
            </span></h1>}
          <div className="details-header-body col-12 col-lg-10 offset-lg-1 d-flex
            justify-content-between align-items-between p-0 m-0 row">
            <div className="d-flex flex-column justify-content-center ml-5">
              <h1 className="font-weight-bold mb-3">{company}</h1>
              <p className="text-muted mt-3">{company_url}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center pr-5">
              <Button href={company_url} className="button-company-url purple font-weight-bold
                btn-outline-none">
                Company Site
              </Button>
            </div>
          </div>
        </header>
        <Card className="job-details-card job-card-background d-flex justify-content-center border-0 pt-3 mb-4">
          <Card.Header className="job-details-card-header d-flex justify-content-between align-items-between border-0 m-0 p-2 p-md-3 p-lg-4 p-xl-5">
            <div className="col-8 p-0">
              <Card.Subtitle className="job-details-date text-muted font-weight-bold mb-1">
                {moment(new Date(created_at)).fromNow()} &#8226; {type}
              </Card.Subtitle>
              <Card.Title className="job-details-card-title my-4">
                <h1 className="font-weight-bold">{title}</h1>
              </Card.Title>
              <Card.Subtitle className="job-details-card-location font-weight-bold purple">
                {location}
              </Card.Subtitle>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <Button href={company_url} className="font-weight-bold button-job-details-card-apply">Apply Now</Button>
            </div>
          </Card.Header>
          <Card.Body className="m-0 px-2 px-md-3 px-lg-4 px-xl-5 py-0">
            <div className="job-details-description job-card-background">
              <ReactMarkdown source={description} />
            </div>
          </Card.Body>
        </Card>
        <Card className="job-details-how-to-apply-card col-12 border-0 mb-4">
          <Card.Body>
            <h3 className="font-weight-bold text-white">How to apply</h3>
            <ReactMarkdown className="mt-4 text-white" source={how_to_apply} />
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
