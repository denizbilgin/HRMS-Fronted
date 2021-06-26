import React from "react";
import { Grid } from "semantic-ui-react";
import CandidateList from "../components/CandidateList";
import EmployerList from "../components/EmployerList";
import AddJobPosting from "../pages/AddJobPosting";
import JobPosting from "../pages/JobPosting";
import { Route } from "react-router-dom";
import Home from "../pages/Home"
import FilteredJobPostings from "../pages/FilteredJobPostings";
import JobPostingDetail from "../pages/JobPostingDetail";

export default function Dashboard() {
  return (
    <div style={{minHeight:"480px"}}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/" component={Home}/>
            <Route path="/candidatelist" component={CandidateList}/>
            <Route path="/employerlist" component={EmployerList}/>
            <Route exact path="/jobpostings" component={JobPosting}/>
            <Route exact path="/addjobposting" component={AddJobPosting}/>
            <Route exact path="/jobpostings/cityId/:cityId/positionId/:positionId" component={FilteredJobPostings}/>
            <Route exact path="/jobpostings/cityId/:cityId/workingTimeId/:workingTimeId" component={FilteredJobPostings}/>
            <Route exact path="/jobpostings/cityId/:cityId" component={FilteredJobPostings}/>
            <Route exact path="/jobpostings/workingTimeId/:workingTimeId" component={FilteredJobPostings}/>
            <Route exact path="/jobpostings/getallbypage/pageNo/:pageNo/pageSize/:pageSize" component={FilteredJobPostings}/>
            <Route exact path="/jobposting/:id" component={JobPostingDetail}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
