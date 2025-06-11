import { SqlVehicleMatcher } from "../../core/replaceType/SqlVehicleMatcher";
import { NewVehicleQuery } from '../../core/replaceType/NewVehicleQuery';

describe('The SQL Vehicle Matcher', ()=>{
  it('finds vehicle', ()=>{
    const matcher: SqlVehicleMatcher = new SqlVehicleMatcher();
    const query: NewVehicleQuery = new NewVehicleQuery();
    query.brandDescription = "VW Polo";

    expect(matcher.countVehicles(query)).toBe(1);
  })
})