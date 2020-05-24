import { User } from './user.model';
import { DataPartial, StripMethods } from '../../types';
import { AircrewType, FtlType, MdsType, RoleType } from '../../enums';
import { AircrewPosition } from '../aircrew-position';

export class UserMock extends User {
  constructor(data?: DataPartial<User>) {
    const seedData: StripMethods<User> = {
      _id: '^&STEVC*SCU',
      squadronId: 'sdcscercwrvwr',
      fullName: 'Jessie Valladares',
      email: 'shajessie@hotmail.com',
      role: RoleType.AircrewMember,
      aircrewPosition: new AircrewPosition({
        type: AircrewType.External
      }),
      joinedAt: new Date(),
      phone: 5555555555,
      ftl: FtlType.A,
      mds: MdsType.C17,
      ...data
    };
    super(seedData);
  }
}
