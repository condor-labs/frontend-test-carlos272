import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin-module/admin.service";
import { forkJoin } from "rxjs";
@Component({
  selector: "app-admin-module",
  templateUrl: "./admin-module.component.html",
  styleUrls: ["./admin-module.component.css"]
})
export class AdminModuleComponent implements OnInit {

  validationDataArrive: boolean;
  constructor(
    private adminService: AdminService
  ) {
  }
  ngOnInit() {
    this.loadList();
  }

  loadList(): void {
    this.validationDataArrive = false;
    forkJoin(this.adminService.headquartersService(),
      this.adminService.extendedForecastService(),
      this.adminService.citiesWorldService()
    ).subscribe(
      ([headquartersListResponse, extendedForecastListReponse, citiesWorldListResponse]) => {
        this.adminService.headquartersData(headquartersListResponse);
        this.adminService.extendedForecastsData(extendedForecastListReponse);
        this.adminService.citiesWorldData(citiesWorldListResponse);
        this.validationDataArrive = true;
      },
      (error) => {
        this.validationDataArrive = false;
      }
    );
  }

}
