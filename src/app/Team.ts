export class TeamMember {
  constructor(
    public ID: number,
    public Name: string,
    public Status: string
  ) { }
}

export class Team {
  constructor(
    public Name: string,
    public Members: TeamMember[]) { }
}

export class TeamSummary{
  constructor(
public Region: string,
public MemberCount: number,
public UnavailableCount: number
  ){}
}
