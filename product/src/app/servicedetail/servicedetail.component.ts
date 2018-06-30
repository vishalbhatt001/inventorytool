import { Component, OnInit } from '@angular/core';
import { DataService } from './dataservice';
import { stackproject } from './stackproject';
import { projects } from './projects';
@Component({
  selector: 'app-servicedetail',
  templateUrl: './servicedetail.component.html',
  providers: [DataService]
})
export class ServicedetailComponent implements OnInit {
  selectedstack:stackproject = new stackproject(0,'stack project');
  stackprojects :stackproject[];
  projectsdetails:projects[];
  constructor(private _dataService: DataService) {
    this.stackprojects = this._dataService.getStackProjects();
  }
  
  onSelect(stackprojectid) {
    console.log(stackprojectid);
    this.projectsdetails = this._dataService.getProjects().filter((item)=> item.stackprojectid == stackprojectid);
  }
  ngOnInit() {
  }

}
