import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.less']
})
export class PlanetListComponent implements OnInit {

  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  public planetName: string;

  private planets: any[];

  constructor(private readonly router: Router,
    private readonly http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://swapi.co/api/planets/').subscribe((response: any) => {


      this.gridView = {
        data: response.results,
        total: response.count
      };
    });


  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    const page = (event.skip / this.pageSize) + 1;

    this.http.get('https://swapi.co/api/planets/?page=' + page).subscribe((response: any) => {

      this.gridView = {
        data: response.results,
        total: response.count
      };
    });
  }

  public onSearchClick(): void {

    let search = '';
    if (this.planetName && this.planetName.length > 0)
      search = '?search=' + this.planetName;

    this.http.get('https://swapi.co/api/planets/' + search).subscribe((response: any) => {


      this.gridView = {
        data: response.results,
        total: response.count
      };
    });
  }

  public redirectToDetails(dataItem: any): void {
    this.router.navigate([dataItem.name + '/' +
      dataItem.rotation_period + '/' +
      dataItem.orbital_period + '/' +
      dataItem.diameter + '/' +
      dataItem.climate + '/' +
      dataItem.gravity + '/' +
      dataItem.terrain + '/' +
      dataItem.surface_water + '/' +
      dataItem.population +
      '/planet-details']);
  }

}
