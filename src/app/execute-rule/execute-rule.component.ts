import { Component } from '@angular/core';
import { MaterialModule } from "../material.module";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommonModule, NgIf } from "@angular/common";
import { KeycloakService } from "keycloak-angular";

@Component({
  selector: 'app-execute-rule',
  standalone: true,
  imports: [MaterialModule, CommonModule, NgIf],
  templateUrl: './execute-rule.component.html',
  styleUrls: ['./execute-rule.component.css']
})
export class ExecuteRuleComponent {

  inputParameters: { key: string, value: string }[] = [];
  result: string = '';
  message: string = '';

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.addParameter(); // Initialize with one empty parameter field
  }

  // Method to add a new parameter
  addParameter(): void {
    this.inputParameters.push({ key: '', value: '' });
  }

  // Method to remove a parameter
  removeParameter(index: number): void {
    this.inputParameters.splice(index, 1);
  }

  // Method to execute the rule
  executeRule(): void {
    const token = this.keycloakService.getKeycloakInstance().token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    const params: { [key: string]: string } = {};
    for (const param of this.inputParameters) {
      if (param.key && param.value) {
        params[param.key] = param.value;
      }
    }

    this.http.post<any>('http://localhost:8080/api/rules/execute', params, { headers }) // Replace with your API endpoint
        .subscribe(
            res => {
              this.result = res.result;
              this.message = '';
            },
            error => {
              console.error('Error executing rule:', error);
              this.result = '';
              this.message = `Error executing rule: ${error.error}`;
            }
        );
  }
}
