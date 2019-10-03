import React, { useState, useEffect } from "react";
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

const TableSection = ({...props}) => {
  return (
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
        <TrDefault {...props}/>
      </tbody>
    </Table>
  )
}

const MyTableSlide = () => {
  const [current, setCurrent] = useState(0)
  const [breadcrums, setBreadcrumbs] = useState({})

  useEffect(() => {
    console.log(breadcrums)
  }, [current, breadcrums])

  const handleSlide = value => {
    setCurrent(value[Object.keys(value)[0]].idSlide + 1)
    setBreadcrumbs({...breadcrums, ...value})
  }

  const switchComp = current => {
    switch (current) {
    case 1: {
      return (
        <div>
          <TableSection
            handleSlide={handleSlide}
            metaData={{id: 1, title: "Kelas"}}/>
        </div>
      )
    }
    case 2: {
      return (
        <div>
          <TableSection
            metaData={{id: 2, title: "Kelas"}}/>
        </div>
      )
    }
    default:
      return (
        <div>
          <TableSection
            handleSlide={handleSlide}
            metaData={{id: 0, title: "Mata Pelajaran"}}/>
        </div>
      )

    }
  }

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
              <ul>
                {
                  Object.keys(breadcrums).map(key => (
                    <li key={key}>
                      <a onClick={e => {
                        e.preventDefault()
                        setCurrent(breadcrums[key].idSlide - 1)
                        delete breadcrums[key + 1]
                        delete breadcrums[key]
                      }}>{breadcrums[key].title}</a>
                    </li>
                  ))
                }
              </ul>
              <p className="mb-0">
                                Using the most basic table markup, here’s how <code>.table-based</code> tables look in Bootstrap. 
                                All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the 
                                same manner as the parent.
              </p>
            </CardBody>
            { /* START Table */}
            {switchComp(current)}
            {/* <div>
              <TableSection
                handleSlide={handleSlide}
                metaData={{id: 0, title: "Mata Pelajaran"}}/>
            </div>
            <div>
              <TableSection
                handleSlide={handleSlide}
                metaData={{id: 1, title: "Kelas"}}/>
            </div>
            <div>
              <TableSection
                metaData={{id: 2, title: "Kelas"}}/>
            </div> */}
            { /* END Table */}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default MyTableSlide