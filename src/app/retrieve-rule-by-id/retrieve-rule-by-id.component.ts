import {Component} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, provideHttpClient} from "@angular/common/http";
import {MaterialModule} from "../material.module";
import {NgIf} from "@angular/common";
import {Rule} from "../models/rule.model";
import {KeycloakService} from "keycloak-angular";

@Component({
    selector: 'app-retrieve-rule-by-id',
    standalone: true,
    imports: [
        NgIf,
        MaterialModule
    ],
    templateUrl: './retrieve-rule-by-id.component.html',
    styleUrl: './retrieve-rule-by-id.component.css'
})
export class RetrieveRuleByIdComponent {

    ruleId: number | undefined;
    rule: Rule | undefined;
    message: string = '';

    constructor(private http: HttpClient, private keycloakService: KeycloakService) {
    }

    getRuleById(): void {
        const token = this.keycloakService.getKeycloakInstance().token;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        });

        if (this.ruleId !== undefined) {
            this.http.get<Rule>(`http://localhost:8080/api/rules/${this.ruleId}`, { headers }) // Replace with your API endpoint
                .subscribe(
                    rule => {
                        this.rule = rule;
                        this.message = 'Rule found.'
                    },
                    error => {
                        console.error('Error fetching rule:', error);
                        this.message = `Error: ${error.error}`;
                    }
                );
        }
    }

}
