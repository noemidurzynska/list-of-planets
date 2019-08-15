import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.less']
})
export class PlanetDetailsComponent implements OnInit {

  public name: string;
  public rotation_period: string;
  public orbital_period: string;
  public diameter: string;
  public climate: string;
  public gravity: string;
  public terrain: string;
  public surface_water: string;
  public population: string;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    if (this.activatedRoute.snapshot.params.name) {
      this.name = this.activatedRoute.snapshot.params.name;
    }
    if (this.activatedRoute.snapshot.params.rotation_period) {
      this.rotation_period = this.activatedRoute.snapshot.params.rotation_period;
    }
    if (this.activatedRoute.snapshot.params.orbital_period) {
      this.orbital_period = this.activatedRoute.snapshot.params.orbital_period;
    }
    if (this.activatedRoute.snapshot.params.diameter) {
      this.diameter = this.activatedRoute.snapshot.params.diameter;
    }
    if (this.activatedRoute.snapshot.params.climate) {
      this.climate = this.activatedRoute.snapshot.params.climate;
    }
    if (this.activatedRoute.snapshot.params.gravity) {
      this.gravity = this.activatedRoute.snapshot.params.gravity;
    }
    if (this.activatedRoute.snapshot.params.terrain) {
      this.terrain = this.activatedRoute.snapshot.params.terrain;
    }
    if (this.activatedRoute.snapshot.params.surface_water) {
      this.surface_water = this.activatedRoute.snapshot.params.surface_water;
    }
    if (this.activatedRoute.snapshot.params.population) {
      this.population = this.activatedRoute.snapshot.params.population;
    }
  }

  ngOnInit() {
  }

  public redirectToHome(): void {
    this.router.navigate(['planet-list']);
  }

}
