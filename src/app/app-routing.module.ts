import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServerDetailComponent } from './pages/server/server-detail/server-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'server', component: ServerDetailComponent },
    { path: '**', redirectTo: '/dashboard' } // component: PageNotFoundComponent
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModul {}
