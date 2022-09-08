import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseComponent} from './course/course.component';
import {CourseResolver} from './services/course-resolver';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  // ATTENTION THIS IS ERROR PRONE:
  // It is ":courseUrl" and not "courseUrl".
  // Without the colon the target page will be PageNotFound 404 instead of the courses page.
  {
    path: ":courseUrl",
    component: CourseComponent,
    resolve: {
      course: CourseResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolver
  ]
})
export class CoursesRoutingModule {

}
