import { NewVehicleQuery } from './NewVehicleQuery';

export interface VehicleMatcher {
  countVehicles(query: NewVehicleQuery): number;
}