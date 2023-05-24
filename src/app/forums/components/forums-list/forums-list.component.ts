import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Forum} from "../../services/data";
import {ForumsService} from "../../services/forums.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-forums-list',
  templateUrl: './forums-list.component.html',
  styleUrls: ['./forums-list.component.css']
})
export class ForumsListComponent implements OnInit, AfterViewInit {
  forums!: Forum[];
  displayedColumns: string[] = ['id', 'forum topic', 'last post', 'threads'];
  dataSource!: MatTableDataSource<Forum>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private forumsService: ForumsService) {
  }

  ngOnInit() {
    this.forums = this.forumsService.forums;
    this.dataSource = new MatTableDataSource(this.forums);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
