import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button, Card } from 'react-bootstrap';
import moment from 'moment';

export default function JobDetails({ details, onResetView }) {

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


  let string = company;
  let companyInitial;
  if (string) {
    companyInitial = string.substring(0, 1);
  }

  return (
    <div className="job-details-container col-10 offset-1">
        <header className="m-0 p-0 bg-white row col-12">
          {company_logo
            ? <img className="d-none d-md-block details-company-logo"
              height="150" width="150" src={company_logo} alt={company} />
            : <h1 className="m-0 p-0"><span
                    className="badge details-badge font-weight-bold
                      text-white details-company-logo d-flex justify-content-center
                      align-items-center m-0 p-0">
                        {companyInitial ? companyInitial : ''}
              </span></h1>}
          <div className="details-header-body col-10 offset-1 d-flex
            justify-content-between align-items-between p-0 m-0">
            <div className="d-flex flex-column justify-content-center ml-5">
              <h1 className="font-weight-bold mb-3">{company}</h1>
              <p className="text-muted mt-3">{company_url}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Button href={company_url} className="button-company-url purple font-weight-bold
                btn-outline-none">
                Company Site
              </Button>
            </div>
          </div>
        </header>
        <Card className="job-details-card d-flex justify-content-center border-0 pt-3">
            <Card.Header className="job-details-card-header bg-white d-flex justify-content-between align-items-between border-0 m-0 p-5">
              <div className="col-8">
                <Card.Subtitle className="job-details-date text-muted font-weight-bold">
                   {moment(new Date(created_at)).fromNow()} &#8226; {type}
                </Card.Subtitle>
                <Card.Title className="job-details-card-title">
                  <h1 className="font-weight-bold">{title}</h1>
                </Card.Title>
                <Card.Subtitle className="job-details-card-location font-weight-bold purple">
                  {location}
                </Card.Subtitle>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                <Button className="font-weight-bold button-job-details-card-apply">Apply Now</Button>
              </div>
            </Card.Header>
            <Card.Body className="m-0 px-5 py-0">
              <div className="job-details-description">
                <ReactMarkdown source={description} />
            </div>
            </Card.Body>
        </Card>
        <div>
          {type} / {location}
        </div>
        <div className="main-section">
          <div className="left-section">
            <div className="job-details-title">{title}</div>
            <hr/>

          </div>
          <div className="right-section">
            <div className="company-details">
              <h3>About company</h3>
              <img src={company_logo} alt={company} className="job-details-logo" />
              <div className="job-details-company-name">{company}</div>
              <a href={company_url} className="job-details-company-url">
                {company_url}
              </a>
            </div>
            <div className="job-details-how-to-apply">
              <h3>How to apply</h3>
              <ReactMarkdown source={how_to_apply} />
            </div>
          </div>
        </div>
    </div>
  );
};
