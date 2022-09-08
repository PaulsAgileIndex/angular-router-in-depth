import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {CourseComponent} from './courses/course/course.component';
import {HomeComponent} from './courses/home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

// Lazy loading of subcomponent tree via:
// 1.) Dynamic import a file from the file system without extension (.ts) which will return a Promise:
//            import('./courses/courses.module')
// 2.) ...then load the module from the imported file with:
//            .then(m => m.CoursesModule)
const routes: Routes = [
  // First entry = "Home" route, must be the empty path with pathMatch: "full";
  // Without full match everything would be redirected to /courses because everything starts with an empty string
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full"
  },
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
  },
  // Last entry = "Page not found" route, must be put at the end of the routes array! Otherwise, it would match also for e.g. "courses"
  {
    path: "**",
    component: PageNotFoundComponent
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
