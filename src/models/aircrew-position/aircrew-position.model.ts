import { BaseModel } from '../base-model/base-model.abstract';
import { AircrewType, DutyPositionType } from '../../enums';
import { DataPartial } from '../../types';
import { ObjectSchema } from 'yup';
import { aircrewPositionSchema } from './aircrew-position.schema';

export class AircrewPosition extends BaseModel {
  public type!: AircrewType;
  public dutyPositions?: DutyPositionType[];
  
  constructor(data?: DataPartial<AircrewPosition>, skipValidation?: boolean) {
    super(data, skipValidation);
    
    if (data?.dutyPositions && Array.isArray(data.dutyPositions)) {
      this.dutyPositions = data.dutyPositions;
    }
  }
  
  protected getDefaults(): DataPartial<BaseModel> {
    return {
      type: AircrewType.External,
      dutyPositions: []
    };
  }
  
  protected getSchema(): ObjectSchema {
    return aircrewPositionSchema;
  }
}
