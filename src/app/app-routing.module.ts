import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './pages/about-me/about-me.module#AboutMeModule'},
   {path: 'Kenntnisse', loadChildren: './pages/skills/skills.module#SkillsModule'},
  {path: 'Lebenslauf', loadChildren: './pages/cv/cv.module#CvModule'},
 
  // otherwise redirect to AboutMeModule
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
