import { Component } from '@angular/core';
import {MaterialModule} from "../material.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-create-rule',
  standalone: true,
  imports: [MaterialModule, NgIf],
  templateUrl: './create-rule.component.html',
  styleUrl: './create-rule.component.css'
})
export class CreateRuleComponent {

  formData = {
    name: '',
    condition: '',
    action: ''
  };
  message: string = '';

    constructor(private http: HttpClient, private keycloakService: KeycloakService) {
    }

  createRule(): void {
      const token = this.keycloakService.getKeycloakInstance().token;
      const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
      });
    // Assuming you want to send formData to the backend via HTTP POST
    this.http.post<any>('http://localhost:8080/api/rules', this.formData, { headers }) // Replace with your API endpoint
        .subscribe(
            res => {
              console.log('Rule created successfully:', res);
              // Optionally reset the form or show a success message
              this.resetForm();
              this.message = 'Rule created successfully.';
            },
            error => {
              console.error('Error creating rule:', error);
              this.message = `Error creating rule: ${error.error}`;
            }
        );
  }

  resetForm(): void {
    this.formData = {
      name: '',
      condition: '',
      action: ''
    };
  }

}
