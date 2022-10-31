import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CourseComponent} from './course/course.component';
import {CourseResolver} from './services/course-resolver';
import {LessonDetailComponent} from './lesson/lesson-detail.component';
import {LessonsListComponent} from './lessons-list/lessons-list.component';





const routes: Routes = [
  {
    // Example URL: http://localhost:4200/courses/
    path: "",
    component: HomeComponent
  },
  {
    // ATTENTION (ERROR PRONE):
    // It is ":courseUrl" and not "courseUrl" resp ":urlSegmentOfACourseProvidedByViewButton" and not "urlSegmentOfACourseProvidedByViewButton"
    // Without the colon the target page will be PageNotFound 404 instead of the courses page. The colon depicts that it is a variable path.
    // the name "urlSegmentOfACourseProvidedByViewButton" must match the parameter in CourseResolver
    // @See code in CourseResolver: route.paramMap.get('urlSegmentOfACourseProvidedByViewButton');
    // Example URL: http://localhost:4200/courses/angular-router-course
    path: ":urlSegmentOfACourseProvidedByViewButton",
    component: CourseComponent,
    children: [
      {
        // Example URL: http://localhost:4200/courses/angular-router-course
        path: "",
        component: LessonsListComponent
      },
      {
        // Example URL: http://localhost:4200/courses/angular-router-course/lessons/17
        path: "lessons/:lessonSeqNo",
        component: LessonDetailComponent
      }
    ],
    resolve: {
      // the name "retrievedCourseData" is freely defined but must match the retrieval parameter in CourseComponent
      // A Course object must be extracted from an ActivatedRoute object in CourseComponent. ActivatedRoute is provided via the constructor in CourseComponent
      // @See code in CourseComponent: this.route.snapshot.data["retrievedCourseData"];
      retrievedCourseData: CourseResolver
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
