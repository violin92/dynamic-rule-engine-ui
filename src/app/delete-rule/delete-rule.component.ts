import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MaterialModule} from "../material.module";
import {NgIf} from "@angular/common";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-delete-rule',
  standalone: true,
  imports: [MaterialModule, NgIf],
  templateUrl: './delete-rule.component.html',
  styleUrl: './delete-rule.component.css'
})
export class DeleteRuleComponent {

  ruleId: number | undefined;
  message: string | undefined;

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {}

  deleteRule(): void {
      const token = this.keycloakService.getKeycloakInstance().token;
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
      });

    if (this.ruleId !== undefined) {
      this.http.delete(`http://localhost:8080/api/rules/${this.ruleId}`, { headers }) // Replace with your API endpoint
          .subscribe(
              () => this.message = 'Rule deleted successfully',
              error => {
                console.error('Error deleting rule:', error);
                this.message = `Error: ${error.error}`;
              }
          );
    }
  }

}
