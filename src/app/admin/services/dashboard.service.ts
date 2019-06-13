import { Injectable } from '@angular/core';
import { TeamMember, Team, TeamSummary } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {



  getTeams() {
    let Teams = [];
    let teammembers = [];
    let teammember = new TeamMember(1, 'Tim', 'Available');
    teammembers.push(teammember);
    teammember = new TeamMember(2, 'Tom', 'Busy');
    teammembers.push(teammember);
    teammember = new TeamMember(3, 'Sonia', 'Busy');
    teammembers.push(teammember);
    teammember = new TeamMember(4, 'Tara', 'Available');
    teammembers.push(teammember);
    teammember = new TeamMember(5, 'Jacob', 'Available');
    let newteam = new Team('North', teammembers);
    Teams.push(newteam);

    teammembers = [];
    let member = new TeamMember(1, 'Samantha', 'Available');
    teammembers.push(member);
    member = new TeamMember(2, 'Hooman', 'Busy');
    teammembers.push(member);
    member = new TeamMember(3, 'Angus', 'Busy');
    teammembers.push(member);
    member = new TeamMember(4, 'Saber', 'Available');
    teammembers.push(member);
    member = new TeamMember(5, 'Aghavni', 'Available');
    newteam = new Team('East', teammembers);
    Teams.push(newteam);


    teammembers = [];
    member = new TeamMember(1, 'Ashanti', 'Available');
    teammembers.push(member);
    member = new TeamMember(2, 'Hassam', 'Busy');
    teammembers.push(member);
    member = new TeamMember(3, 'Susan', 'Busy');
    teammembers.push(member);
    member = new TeamMember(4, 'Keith', 'Available');
    teammembers.push(member);
    member = new TeamMember(5, 'Julian', 'Available');
    newteam = new Team('South', teammembers);
    Teams.push(newteam);

    teammembers = [];
    member = new TeamMember(1, 'Drew', 'Available');
    teammembers.push(member);
    member = new TeamMember(2, 'Bill', 'Busy');
    teammembers.push(member);
    member = new TeamMember(3, 'Kyle', 'Busy');
    teammembers.push(member);
    member = new TeamMember(4, 'Nick', 'Available');
    teammembers.push(member);
    member = new TeamMember(5, 'Grace', 'Available');
    newteam = new Team('West', teammembers);
    Teams.push(newteam);
    return Teams;
  }

  getTeamSummaries() {
    let result = [];
    let teamSummary = new TeamSummary("North", 20, 2)
    result.push(teamSummary)
    teamSummary = new TeamSummary("East", 10, 8)
    result.push(teamSummary)
    teamSummary = new TeamSummary("South", 15, 5)
    result.push(teamSummary)
    teamSummary = new TeamSummary("West", 8, 2)
    return result;
  }

}
