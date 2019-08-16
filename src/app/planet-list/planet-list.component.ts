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
  public offline = false;

  private planets: any[];

  constructor(private readonly router: Router,
    private readonly http: HttpClient) { }

  ngOnInit() {
    if (this.offline) {
      this.loadGridOffline();
    } else {
      this.loadGrid('');
    }
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    const page = (event.skip / this.pageSize) + 1;

    if (this.offline) {
      this.loadGridOffline();
    } else {
     this.loadGrid('?page=' + page);
    }
  }

  public onSearchClick(): void {
    const search = this.fillSearchParameter();
    if (this.offline) {
      this.loadGridOffline();
    } else {
      this.loadGrid(search);
    }
  }

  public onChangeModeClick(): void {
    this.offline=!this.offline;

  }


  private fillSearchParameter(): string {
    let search = '';
    if (this.planetName && this.planetName.length > 0) {
      search = '?search=' + this.planetName;
    }
    return search;
  }

  private loadGrid(parameter: string): void {

    this.http.get('https://swapi.co/api/planets/' + parameter).subscribe((response: any) => {

      this.gridView = {
        data: response.results,
        total: response.count
      };
    });
  }

  private loadGridOffline(): void {

    this.http.get('../../assets/planets.json').subscribe((response: any) => {

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
