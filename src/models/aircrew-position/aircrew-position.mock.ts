import { User } from '../user';
import { DataPartial, StripMethods } from '../../types';
import { AircrewType } from '../../enums';
import { AircrewPosition } from './aircrew-position.model';

export class AircrewPositionMock extends AircrewPosition {
  constructor(data?: DataPartial<AircrewPosition>) {
    const seedData: StripMethods<AircrewPosition> = {
      type: AircrewType.External,
      dutyPositions: [],
      ...data
    };
    super(seedData);
  }
}
