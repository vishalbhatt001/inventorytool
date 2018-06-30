import { Injectable } from '@angular/core';
import { stackproject } from './stackproject';
import { projects } from './projects';


@Injectable()
export class DataService {
  getStackProjects() {
    return [
     new stackproject(1, 'Java' ),
     new stackproject(2, 'Angular' ),
     new stackproject(3, 'Database' )
    ];
  }
  
  getProjects() {
   return [
     new projects(1, 1, 'Rest Services' ),
     new projects(2, 1, 'Jdbc' ),
     new projects(3, 1, 'Java Hibernate'),
     new projects(4, 2, 'Angular Version 1'),
     new projects(5, 2, 'Angular Version 2' ),
     new projects(6, 2, 'Angular Version 3'),
     new projects(7, 3, 'Oracle' ),
     new projects(8, 3, 'MySql' ),
     new projects(9, 3, 'MariaDB' ),
     
    ];
  }
}