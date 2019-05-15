import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle,
} from 'reactstrap';

class ProjectCard extends Component {

    render() {

        return <Card body>
                <CardImg top width="100%" src="images/120x120.png" alt="Card image cap" />
                <CardBody>
                <CardTitle>Onyx Admin</CardTitle>
                <CardText>Onyx Admin Paragraph</CardText>
                </CardBody>
            </Card>
        
    }
}

export default ProjectCard;