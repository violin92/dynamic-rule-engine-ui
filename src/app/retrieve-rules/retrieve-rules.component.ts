import {Component} from '@angular/core';
import {NgFor} from "@angular/common";
import {MaterialModule} from "../material.module";
import {Rule} from "../models/rule.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { KeycloakService } from 'keycloak-angular';

@Component({
    selector: 'app-retrieve-all-rules',
    standalone: true,
    imports: [NgFor, MaterialModule],
    templateUrl: './retrieve-rules.component.html',
    styleUrl: './retrieve-rules.component.css'
})
export class RetrieveRulesComponent {
    displayedColumns: string[] = ['name', 'condition', 'action'];
    rules: Rule[] = []; // Declare rules property as an array of Rule objects

    constructor(private http: HttpClient, private keycloakService: KeycloakService) {
    }

    ngOnInit(): void {
        const token = this.keycloakService.getKeycloakInstance().token;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        });

        this.http.get<Rule[]>('http://localhost:8080/api/rules', { headers }).subscribe({
            next: (data) => {
                this.rules = data;
                console.log(this.rules);
            },
            error: (err) => {
                console.error('Failed to retrieve rules:', err);
            }
        });
    }
}
