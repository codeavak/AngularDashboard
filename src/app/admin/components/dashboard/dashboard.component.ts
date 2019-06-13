import { TeamMember, TeamSummary, Team } from '../../models/Team';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})



export class DashboardComponent implements OnInit {



  Position: string;
  Username: string;
  NumberOfTeamMembers: number;
  TotalCostOfProjects: number;
  PendingTasks: number;
  UpcomingProjects: number;
  ProjectCost: number;

  CurrentExpenditure: number;
  AvailableFunds: number;

  Clients: string[];
  Projects: string[];
  Years: number[];

  Teams: Team[];
  TeamSummary: TeamSummary[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    // left section
    this.Position = 'Team Leader 1';
    this.Username = 'John Smith';
    this.NumberOfTeamMembers = 67;
    this.TotalCostOfProjects = 240000;
    this.PendingTasks = 15;
    this.UpcomingProjects = 2;

    // middle section
    this.ProjectCost = 21131507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52538;

    this.Clients = ['Team Smart Co.', 'Global lizard Inc.', 'Jeff and Don Inc.', 'Fantastic 7 Corp.']
    this.Projects = ['ProjectA', 'ProjectB', 'ProjectC', 'ProjectD', 'ProjectE', 'ProjectF', 'ProjectG'];
    this.Years = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006];

    this.Teams = this.dashboardService.getTeams();
    this.TeamSummary = this.dashboardService.getTeamSummaries();


  }

}
