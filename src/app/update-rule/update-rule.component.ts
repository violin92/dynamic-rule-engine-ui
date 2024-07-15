import { Component } from '@angular/core';
import {MaterialModule} from "../material.module";
import {Rule} from "../models/rule.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-update-rule',
  standalone: true,
  imports: [MaterialModule, NgIf],
  templateUrl: './update-rule.component.html',
  styleUrl: './update-rule.component.css'
})
export class UpdateRuleComponent {

  ruleId: number | undefined;
  rule: Rule | undefined;
  message: string = '';
  token: string | undefined;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {
      this.token = this.keycloakService.getKeycloakInstance().token;
      this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
      });
  }

  fetchRule(): void {
    if (this.ruleId !== undefined) {
      this.http.get<Rule>(`http://localhost:8080/api/rules/${this.ruleId}`, {headers: this.headers}) // Replace with your API endpoint
          .subscribe(
              rule => {
                  this.rule = rule;
                  this.message = 'Rule found.';
              },
              error => {
                  console.error('Error fetching rule:', error);
                  this.message = `Error: ${error.error}`;
              }
          );
    }
  }

  updateRule(): void {
    if (this.rule && this.ruleId !== undefined) {
      this.http.put<Rule>(`http://localhost:8080/api/rules/${this.ruleId}`, this.rule, { headers: this.headers }) // Replace with your API endpoint
          .subscribe(
              updatedRule => {
                this.rule = updatedRule;
                console.log('Rule updated successfully');
                this.message = 'Rule updated successfully.';
              },
              error => {
                  console.error('Error updating rule:', error);
                  this.message = `Error updating rule: ${error.error}`;
              }
          );
    }
  }

}
