import { Routes } from '@angular/router';
import {CreateProjectComponent} from "./create-project/create-project.component"
import {DAODashboardComponent} from "./daodashboard/daodashboard.component"
import {SyncKaliDaoComponent} from "./sync-kali-dao/sync-kali-dao.component"


export const routes: Routes = [
    { path: '', redirectTo: '/create', pathMatch: 'full' }, // Redirect to '/home'

    { path: 'create', component:CreateProjectComponent},
    { path: 'daodashboard', component:DAODashboardComponent},
    { path: 'synckali', component:SyncKaliDaoComponent}
];
