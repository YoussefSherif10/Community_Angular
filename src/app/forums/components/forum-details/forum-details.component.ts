import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ForumsService} from "../../services/forums.service";
import {Forum, Thread} from "../../services/data";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.css']
})
export class ForumDetailsComponent implements OnInit, AfterViewInit {
  forum_alias!: string | null;
  forum!: Forum | undefined;
  displayedColumns: string[] = ['id', 'thread', 'user', 'last post', 'posts'];
  dataSource!: MatTableDataSource<Thread>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route: ActivatedRoute,
              private forumsService: ForumsService,
              private router: Router) {
  }

  ngOnInit() {
    this.forum_alias = this.route.snapshot.paramMap.get("forum_alias");
    console.log(this.forum_alias);
    if (this.forum_alias) {
      this.forum = this.forumsService.forum(this.forum_alias);
      this.dataSource = new MatTableDataSource(this.forum?.threads);
    } else
      this.router.navigate(['/not-found']);
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
