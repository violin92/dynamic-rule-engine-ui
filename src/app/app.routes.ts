import { Routes } from '@angular/router';
import {CreateRuleComponent} from "./create-rule/create-rule.component";
import {NgModule} from '@angular/core';
import {RetrieveRulesComponent} from "./retrieve-rules/retrieve-rules.component";
import {RetrieveRuleByIdComponent} from "./retrieve-rule-by-id/retrieve-rule-by-id.component";
import {UpdateRuleComponent} from "./update-rule/update-rule.component";
import {DeleteRuleComponent} from "./delete-rule/delete-rule.component";
import {ExecuteRuleComponent} from "./execute-rule/execute-rule.component";
import {AuthGuard} from "./auth.guard";


export const routes: Routes = [
    { path: 'create-rule', component: CreateRuleComponent },
    { path: 'retrieve-rules', component: RetrieveRulesComponent, canActivate: [AuthGuard],
        data: {
            roles: ['user'] // specify the roles required for this route
        } },
    { path: 'retrieve-rule-by-id', component: RetrieveRuleByIdComponent, canActivate: [AuthGuard],
        data: {
            roles: ['user'] // specify the roles required for this route
        } },
    { path: 'update-rule', component: UpdateRuleComponent, canActivate: [AuthGuard],
        data: {
            roles: ['user'] // specify the roles required for this route
        } },
    { path: 'delete-rule', component: DeleteRuleComponent, canActivate: [AuthGuard],
        data: {
            roles: ['user'] // specify the roles required for this route
        } },
    { path: 'execute-rule', component: ExecuteRuleComponent, canActivate: [AuthGuard],
        data: {
            roles: ['user'] // specify the roles required for this route
        } },
];
