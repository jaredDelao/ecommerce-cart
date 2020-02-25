import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
    { path: '', component: PagesComponent },
    { path: 'config', component: ConfigComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}