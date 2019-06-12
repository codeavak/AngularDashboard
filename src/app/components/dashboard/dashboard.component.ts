import { TeamMember, TeamSummary } from './../../Team';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/Team';

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

  Teams:Team[];
  TeamSummary: TeamSummary[];
  constructor() { }

  ngOnInit() {
    // left section
    this.Position= 'Team Leader 1';
    this.Username= 'John Smith';
    this.NumberOfTeamMembers= 67;
    this.TotalCostOfProjects= 240000;
    this.PendingTasks= 15;
    this.UpcomingProjects= 2;

    // middle section
    this.ProjectCost= 21131507;
    this.CurrentExpenditure= 96788;
    this.AvailableFunds= 52538;

    this.Clients=['Team Smart Co.','Global lizard Inc.','Jeff and Don Inc.','Fantastic 7 Corp.']
    this.Projects=['ProjectA','ProjectB','ProjectC','ProjectD','ProjectE','ProjectF','ProjectG'];
    this.Years=[2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006];
this.Teams=[];
    let teammembers=[];
    let teammember=new TeamMember(1, 'Tim', 'Available');
    teammembers.push(teammember);
    teammember=new TeamMember(2, 'Tom', 'Busy');
    teammembers.push(teammember);
    teammember=new TeamMember(3, 'Sonia', 'Busy');
    teammembers.push(teammember);
    teammember=new TeamMember(4, 'Tara', 'Available');
    teammembers.push(teammember);
    teammember=new TeamMember(5, 'Jacob', 'Available');
    let newteam = new Team('North', teammembers);
    this.Teams.push(newteam);

    teammembers=[];
    let member=new TeamMember(1, 'Samantha', 'Available');
    teammembers.push(member);
    member=new TeamMember(2, 'Hooman', 'Busy');
    teammembers.push(member);
    member=new TeamMember(3, 'Angus', 'Busy');
    teammembers.push(member);
    member=new TeamMember(4, 'Saber', 'Available');
    teammembers.push(member);
    member=new TeamMember(5, 'Aghavni', 'Available');
    newteam = new Team('East', teammembers);
    this.Teams.push(newteam);


    teammembers=[];
    member=new TeamMember(1, 'Ashanti', 'Available');
    teammembers.push(member);
    member=new TeamMember(2, 'Hassam', 'Busy');
    teammembers.push(member);
    member=new TeamMember(3, 'Susan', 'Busy');
    teammembers.push(member);
    member=new TeamMember(4, 'Keith', 'Available');
    teammembers.push(member);
    member=new TeamMember(5, 'Julian', 'Available');
    newteam = new Team('South', teammembers);
    this.Teams.push(newteam);

    teammembers=[];
    member=new TeamMember(1, 'Drew', 'Available');
    teammembers.push(member);
    member=new TeamMember(2, 'Bill', 'Busy');
    teammembers.push(member);
    member=new TeamMember(3, 'Kyle', 'Busy');
    teammembers.push(member);
    member=new TeamMember(4, 'Nick', 'Available');
    teammembers.push(member);
    member=new TeamMember(5, 'Grace', 'Available');
    newteam = new Team('West', teammembers);
    this.Teams.push(newteam);
    this.TeamSummary=[];
let teamSummary=new TeamSummary("North",20,2)
this.TeamSummary.push(teamSummary)
teamSummary=new TeamSummary("East",10,8)
this.TeamSummary.push(teamSummary)
teamSummary=new TeamSummary("South",15,5)
this.TeamSummary.push(teamSummary)
teamSummary=new TeamSummary("West",8,2)

  }

}
