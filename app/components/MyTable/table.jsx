import React from "react";
import { 
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Table,
} from 'components';

import {
  HeaderDemo
} from "routes/components/HeaderDemo";

import {
  TrDefault
} from "./components/TrDefault";

import TableSlide from "./table-slide"

const MyTable = () => {
  return (
    <div>
      <Row>
        <Col lg={ 12 }>
          <Card className="mb-3">
            <CardBody>
              <CardTitle tag="h6">
                                Table Default
                <span className="small ml-1 text-muted">
                                    #1.01
                </span>
              </CardTitle>
              <p className="mb-0">
                                Using the most basic table markup, here’s how <code>.table-based</code> tables look in Bootstrap. 
                                All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the 
                                same manner as the parent.
              </p>
            </CardBody>
            { /* START Table */}
            <Table className="mb-0" responsive>
              <thead>
                <tr>
                  <th className="bt-0">Project</th>
                  <th className="bt-0">Deadline</th>
                  <th className="bt-0">Leader</th>
                  <th className="bt-0">Budget</th>
                  <th className="bt-0">Status</th>
                  <th className="text-right bt-0">
                                        Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <TrDefault />
              </tbody>
            </Table>
            { /* END Table */}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

MyTable.Slide = TableSlide

export default MyTable