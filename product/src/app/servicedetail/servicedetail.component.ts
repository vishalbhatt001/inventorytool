import { Component, OnInit,ViewChild  } from '@angular/core';
import { DataService } from './dataservice';
import { stackproject } from './stackproject';
import { projects } from './projects';
import {projectdetails} from './projectdetails';
import { MatTableDataSource, MatSort } from '@angular/material';
 import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-servicedetail',
  templateUrl: './servicedetail.component.html',
  providers: [DataService]
})
export class ServicedetailComponent implements OnInit {
  selectedstack:stackproject = new stackproject(0,'stack project');
  selectedproject:projects = new projects(0,0,'project description');
  stackprojects :stackproject[];
  projectsdetails:projects[];
  projectdescriptions:projectdetails[];
  dataSource;
  displayedColumns = [];

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: "No",
    value: "No"

  }, {
    id: "Name",
    value: "Name"
  },
  {
    id: "Description",
    value: "Description"
  },
  {
    id: "Server",
    value: "Server"
  }];
  constructor(private _dataService: DataService) {
    this.stackprojects = this._dataService.getStackProjects();
    
  }
  
  onSelect(stackprojectid) {
    //console.log(stackprojectid);
    this.projectsdetails = this._dataService.getProjects().filter((item)=> item.stackprojectid == stackprojectid);
    
  }
  onSelectProject(projectid)
  {
    
     this.projectdescriptions =this._dataService.getProjectDetails().filter((item)=>item.projectid == projectid);
    //  this.dataSource = this.projectdescriptions;
    this.displayedColumns = this.columnNames.map(x => x.id);
      this.dataSource = new MatTableDataSource(this.projectdescriptions);
      this.dataSource.sort = this.sort;
      console.log(this.displayedColumns);
  }
  ngOnInit() {
   
  }

}
