import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { AccordionTableStyles } from "../Styles/AccordionTableStyles";

export default function AccordionTable() {

  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div style={AccordionTableStyles}>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            onClick={() =>setSelectedIndex(1)}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={AccordionTableStyles.header}>Week 1</span>
              <span>
                {selectedIndex === 1 ? <DownIcon /> : <RightIcon />}
              </span>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {[1, 2, 3, 4, 5].map(() => (
                <p style={AccordionTableStyles.list}>List item</p>
              ))}{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            onClick={() => setSelectedIndex(2)}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={AccordionTableStyles.header}>Week 2</span>
              <span>
                {selectedIndex === 2 ? <DownIcon /> : <RightIcon />}
              </span>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {[1, 2].map(() => (
                <p style={AccordionTableStyles.list}>List item</p>
              ))}{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="2"
            onClick={() => setSelectedIndex(3)}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={AccordionTableStyles.header}>Week 3</span>
              <span>
                {selectedIndex === 3 ? <DownIcon /> : <RightIcon />}
              </span>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {[1, 2, 3, 4, 5, 6].map(() => (
                <p style={AccordionTableStyles.list}>List item</p>
              ))}{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

function DownIcon() {
  return (
    <svg
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.06492 0.443495L10.0093 6.3361L16.9537 0.443496C17.1194 0.30289 17.3162 0.191357 17.5327 0.115262C17.7492 0.0391666 17.9812 -7.07468e-08 18.2155 -6.51537e-08C18.4499 -5.95607e-08 18.6819 0.0391666 18.8984 0.115262C19.1149 0.191357 19.3116 0.30289 19.4773 0.443496C19.643 0.584101 19.7745 0.751024 19.8642 0.934734C19.9538 1.11844 20 1.31534 20 1.51419C20 1.71303 19.9538 1.90993 19.8642 2.09364C19.7745 2.27735 19.643 2.44428 19.4773 2.58488L11.2622 9.55578C10.5642 10.1481 9.43659 10.1481 8.73857 9.55578L0.523414 2.58488C0.357494 2.44438 0.225859 2.27749 0.136045 2.09377C0.0462302 1.91004 -8.96474e-08 1.71309 -7.92386e-08 1.51419C-6.88299e-08 1.31528 0.0462303 1.11833 0.136045 0.93461C0.225859 0.750886 0.357494 0.583997 0.523415 0.443495C1.22144 -0.133616 2.3669 -0.148803 3.06492 0.443495Z"
        fill="#8E8E8E"
      />
    </svg>
  );
}

function RightIcon() {
  return (
    <svg
      width="10"
      height="20"
      viewBox="0 0 10 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.443496 16.9351L6.3361 9.99067L0.443496 3.04627C0.302891 2.88056 0.191357 2.68385 0.115262 2.46735C0.0391667 2.25085 3.48986e-08 2.0188 2.82285e-08 1.78446C2.15585e-08 1.55012 0.0391667 1.31808 0.115262 1.10158C0.191357 0.885077 0.30289 0.688359 0.443496 0.522657C0.584101 0.356954 0.751024 0.225511 0.934734 0.135834C1.11844 0.046156 1.31534 -3.49192e-09 1.51419 0C1.71303 3.49192e-09 1.90993 0.046156 2.09364 0.135834C2.27735 0.225511 2.44428 0.356954 2.58488 0.522657L9.55578 8.73782C10.1481 9.43584 10.1481 10.5634 9.55578 11.2614L2.58488 19.4766C2.44438 19.6425 2.27749 19.7741 2.09377 19.864C1.91004 19.9538 1.71309 20 1.51419 20C1.31529 20 1.11833 19.9538 0.934611 19.864C0.750887 19.7741 0.583998 19.6425 0.443496 19.4766C-0.133615 18.7786 -0.148802 17.6331 0.443496 16.9351Z"
        fill="#8E8E8E"
      />
    </svg>
  );
}
