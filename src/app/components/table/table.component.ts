import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';


export interface PeriodicElement {
  name: string;
  position: number;
  lastname: string;
  email:string;
  symbol: string;

}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', lastname: "1.0079", email:"yousri@mail.com",symbol: 'H' },
//   {position: 2, name: 'Helium', lastname: "4.0026", email:"yousri@mail.com",symbol: 'He' },
//   {position: 3, name: 'Lithium', lastname: "6.941", email:"yousri@mail.com",symbol: 'Li' },
//   {position: 4, name: 'Beryllium', lastname: "9.0122", email:"yousri@mail.com",symbol: 'Be' },
//   {position: 5, name: 'Boron', lastname: "10.811", email:"yousri@mail.com",symbol: 'B' },
//   {position: 6, name: 'Carbon', lastname: "12.0107", email:"yousri@mail.com",symbol: 'C' },
//   {position: 7, name: 'Nitrogen', lastname:" 14.0067", email:"yousri@mail.com",symbol: 'N' },
//   {position: 8, name: 'Oxygen', lastname: "15.9994", email:"yousri@mail.com",symbol: 'O' },
//   {position: 9, name: 'Fluorine', lastname: "18.9984", email:"yousri@mail.com",symbol: 'F' },
//   {position: 10, name: 'Neon', lastname: "20.1797", email:"yousri@mail.com",symbol: 'Ne' },
// ];
export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',

];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,MatCardModule],
})
export class TableComponent {
  // displayedColumns: string[] = ['position', 'name', 'lastname','email', 'symbol'];
  // dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}



