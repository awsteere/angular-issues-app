import { Component, OnInit } from '@angular/core';

import { IssueService } from '../services/issue.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: Issue[];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void {
    this.issueService.getIssues()
        .subscribe(issues => this.issues = issues);
  }

}
