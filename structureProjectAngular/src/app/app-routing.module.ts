import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
// tslint:disable-next-line: max-line-length
import { AdminModuleComponent } from '../../src/app/domain/admin-module/admin-module.component';

const routes: Routes = [{
  path: 'weather',
  loadChildren: () => import('./domain/admin-module/admin.module')
    .then(mod => mod.AdminModule),
  data: { preload: true },
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full',
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
