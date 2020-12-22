import React from 'react';
import { Button } from 'react-bootstrap';

export default function Footer({ details }) {
  return (
    <footer className="footer col-12 bg-white py-3">
      <div className="col-10 offset-1 row d-flex align-items-center">
        <div className="col-8">
          <h3 className="font-weight-bold">
            {details.title}
          </h3>
          <p className="text-muted m-0">
            {details.company}
          </p>
        </div>
        <div className="col-4 d-flex justify-content-end">
          <Button href={details.company_url}
            className="font-weight-bold button-job-details-card-apply">Apply Now</Button>
        </div>
      </div>
    </footer>
  );
}
