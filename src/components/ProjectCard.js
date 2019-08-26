import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const ProjectCard = props => (
  <Card body {...props}>
    <CardImg top width="100%" src="images/120x120.png" alt="Card image cap" />
    <CardBody>
      <CardTitle style={{ color: "black" }}>Onyx Admin</CardTitle>
      <CardText style={{ color: "black" }}>Onyx Admin Paragraph</CardText>
    </CardBody>
  </Card>
);

export default ProjectCard;
