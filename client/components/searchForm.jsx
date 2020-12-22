import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function SearchForm({ params, onParamChange }) {
  return (
    <div>
      <Form className="mb-4 col-10 offset-1">
        <Form.Row className="align-items-end">
          <Form.Group as={Col} className="m-0 p-2">
            <div className="d-flex flex-column">
              <div>
                <i className="fas fa-search purple fa-2x"></i>
              </div>
              <Form.Control className="border-top-0 border-bottom-0 border-left-0 border-right pl-5 input" onChange={onParamChange} value={params.description} placeholder="Filter by title, companies, expertise..." name="description" type="text" />
            </div>
          </Form.Group>
          <Form.Group as={Col} className="m-0 p-2">
            <div className="d-flex flex-column">
              <div>
                <i className="fas fa-map-marker-alt purple fa-2x"></i>
              </div>
              <Form.Control className="border-top-0 border-bottom-0 border-left-0 border-right pl-5 input" onChange={onParamChange} value={params.location} placeholder="Filter by location..." name="location" type="text" />
            </div>
          </Form.Group>
          <Form.Group as={Col} xs="auto" className="checkbox my-0 mr-0 ml-2 p-2">
            <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full_time" className="checkbox font-weight-bold mb-2" label="Only Full Time" type="checkbox" />
          </Form.Group>
          <Form.Group as={Col} xs="auto" className="checkbox m-0 ml-2 p-2">
            <Form.Check onChange={onParamChange} value={params.geolocation} name="geolocation" id="geolocation" className="checkbox font-weight-bold mb-2" label="Use Geolocation" type="checkbox" />
            { params.geolocation ? `Location: ${params.location}` : '' }
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}
