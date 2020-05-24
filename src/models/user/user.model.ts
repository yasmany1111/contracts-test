import { ObjectSchema } from 'yup';
import { BaseModel } from '../base-model';
import { AircrewType, FtlType, RoleType, MdsType } from '../../enums';
import { DataPartial } from '../../types';
import { userSchema } from './user.schema';
import { AircrewPosition } from '../aircrew-position';

export class User extends BaseModel {
  public readonly _id?: string;
  public role!: RoleType;
  public squadronId!: string;
  public fullName!: string;
  public email!: string;
  public aircrewPosition!: AircrewPosition;
  public joinedAt: Date;
  public phone?: number;
  public ftl?: FtlType;
  public mds?: MdsType;
  
  constructor(data?: DataPartial<User>, skipValidation?: boolean) {
    super(data, skipValidation);
    this.joinedAt = new Date();
    if (data?.role) {
      this.role = data.role;
    }
    if (data?.aircrewPosition) {
      this.aircrewPosition = new AircrewPosition(data.aircrewPosition);
    }
  }
  
  protected getDefaults(): DataPartial<BaseModel> {
    return {
      role: RoleType.AircrewMember,
      aircrewType: {
        type: AircrewType.External,
        dutyPositions: []
      }
    };
  }
  
  protected getSchema(): ObjectSchema {
    return userSchema;
  }
}
