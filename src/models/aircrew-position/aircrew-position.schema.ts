import * as yup from 'yup';
import { ObjectSchema } from 'yup';
import { getEnumValues } from '../../utilities';
import { AircrewType, DutyPositionType } from '../../enums';

export const aircrewPositionSchema: ObjectSchema = yup.object().shape({
  type: yup.string().oneOf(getEnumValues(AircrewType)).required(),
  dutyPositions: yup.array().of(yup.string().oneOf(getEnumValues(DutyPositionType)).notRequired())
});
