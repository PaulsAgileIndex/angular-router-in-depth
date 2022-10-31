import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Course} from '../model/course';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CoursesService} from './courses.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {

  /**
   *
   * @param coursesService
   */
  constructor(private coursesService: CoursesService) {
  }

  /**
   * Example of a url localhost:4200/courses/angular-router-course
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    const courseUrl = route.paramMap.get('urlSegmentOfACourseProvidedByViewButton');
    return this.coursesService.loadCourseByUrl(courseUrl);
  }

}
