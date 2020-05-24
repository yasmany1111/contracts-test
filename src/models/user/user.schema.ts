import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import { aircrewPositionSchema } from '../aircrew-position';
import { getEnumValues } from '../../utilities';
import { FtlType, MdsType } from '../../enums';

export const userSchema: ObjectSchema = yup.object().shape({
  _id: yup.string(),
  fullName: yup.string().notRequired(),
  email: yup.string().email().required(),
  password: yup.string().notRequired(),
  joinedAt: yup.date().required(),
  aircrewPosition: aircrewPositionSchema,
  phone: yup.number().positive().integer().notRequired(),
  ftl: yup.string().oneOf(getEnumValues(FtlType)).notRequired(),
  mds: yup.string().oneOf(getEnumValues(MdsType)).notRequired(),
});
