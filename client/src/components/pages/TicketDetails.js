import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";

const moment = require('moment');

function TicketDetails(props) {
  const [tickets, setTickets] = useState({})
  


  // When this component mounts, grab the ticket with the _id of props.match.params.id
  // e.g. localhost:3000/Tickets/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getTicket(id)
      .then(res => setTickets(res.data))
      .catch(err => console.log(err));
  }, [id])

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
            <strong>
              Ticket # - {tickets.ticketNum}                      
            </strong>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Ticket Details</h1>
            <p>
              <strong>
                 <br></br>               
                <p>
                  {moment(tickets.ticketDate).format("MM-DD-YYYY")}
                    <br></br>
                  Ticket # {tickets.ticketNum}
                    <br></br>
                    <br></br>
                  Customer: &nbsp; {tickets.ticketCust}
                    <br></br>
                  Material: &nbsp;&nbsp;&nbsp; {tickets.ticketMaterial}
                </p>                 
                 <p>
                 Tare Weight  &nbsp;&nbsp;&nbsp; -- &nbsp; {tickets.ticketTareWeight}
                 <br></br>
                 Gross Weight &nbsp; -- &nbsp; {tickets.ticketGrossWeight}
                 <br></br>
                 Net Weight  &nbsp;&nbsp;&nbsp;&nbsp; -- &nbsp; {tickets.ticketNetWeight}
                 </p>
                <br></br>
               {tickets._id}
               </strong>  
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/Tickets">← Back to Tickets</Link>
        </Col>
      </Row>
    </Container>
  );
}
export default TicketDetails