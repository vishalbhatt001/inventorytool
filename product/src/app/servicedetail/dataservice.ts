import { Injectable } from '@angular/core';
import { stackproject } from './stackproject';
import { projects } from './projects';
import {projectdetails} from './projectdetails';


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

  getProjectDetails()
  {
    return [
      
      
      new projectdetails(1, 'Rest Service oath permission',1,'Oath security','10.20.113.19','http:/chalkurl/restservice','http:/uat/restservice','http:/devurl/restservice','http:/siturl/restservice' ),
      new projectdetails(2, 'Rest Service basic autentication',1,'Basic Autentication in Rest Service','10.20.114.20','http:/chalkurl/restservice/basic','http:/uat/restservice/basic','http:/devurl/restservice/basic','http:/siturl/restservice/basic' ),
      new projectdetails(3, 'Angular version 1',4,'Angular version 1 Oath security','10.20.115.21','http:/chalkurl/angular1','http:/uat/angular1','http:/devurl/angular1','http:/siturl/angular1' ),
      new projectdetails(4, 'Angular version 1 security',4,'Basic Autentication in angular 1','10.20.118.24','http:/chalkurl/basic/angular1','http:/uat/basic/angular1','http:/devurl/basic/angular1','http:/siturl/basic/angular1' ),
      
      
     ];
  }
}