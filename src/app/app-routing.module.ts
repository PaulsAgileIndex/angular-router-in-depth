import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {CourseComponent} from './courses/course/course.component';
import {HomeComponent} from './courses/home/home.component';

// Lazy loading of subcomponent tree via:
// 1.) Dynamic import a file from the file system without extension (.ts) which will return a Promise:
//            import('./courses/courses.module')
// 2.) ...then load the module from the imported file with:
//            .then(m => m.CoursesModule)
const routes: Routes = [
  {
    path: "courses",
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule {


}
