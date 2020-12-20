import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

export default function Job({ job }) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} - <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Posted {moment(new Date(job.created_at)).fromNow()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">{job.type}</Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
