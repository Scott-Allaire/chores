import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ChoreService } from './shared/chore.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChoresComponent } from './chores/chores.component';
import { ChoreDetailComponent } from './chore-detail/chore-detail.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'chores', component: ChoresComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ChoresComponent,
    ChoreDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CollapseModule,
  ],
  providers: [
    ChoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
