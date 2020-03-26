import React from "react";
import "./style.css";
import { Card, CardTitle, CardBody, CardHeader } from "reactstrap"

function SideCard() {

  return (
      <div>
    <Card id="card">
    <CardBody className="nopadding bg-secondary">
        <CardHeader className="text-warning bg-dark" >
            Step 1:
        </CardHeader>
        <CardTitle className="text-white">
            Type in start and end destinations
        </CardTitle>
    </CardBody>
</Card>
 <Card id="card">
 <CardBody className="nopadding bg-secondary">
     <CardHeader className="text-warning bg-dark">
         Step 2:
     </CardHeader>
     <CardTitle className="text-white">
         Click on the highlighted route to show weather data on route
     </CardTitle>
 </CardBody>
</Card>
<Card id="card">
 <CardBody className="nopadding bg-secondary">
     <CardHeader className="text-warning bg-dark">
         Optional:
     </CardHeader>
     <CardTitle className="text-white">
        Once you're logged in, click on "Search History" for old routes
     </CardTitle>
 </CardBody>
</Card>

      </div>
  );
}

export default SideCard;