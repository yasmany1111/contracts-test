/* tslint:disable */
import { DataPartial } from '../../types';
import { ObjectSchema, ValidateOptions, ValidationError } from 'yup';
import { IBaseValidationOptions } from '../../interfaces';

export abstract class BaseModel {
  protected constructor(data?: DataPartial<BaseModel>, skipValidation?: boolean) {
    // Select if we get the default data or the incoming data for the object
    const seedData = Object.assign({}, this.getDefaults(), data);
    
    if (skipValidation) {
      Object.assign(this, seedData);
    } else {
      const validData = this.validate({data: seedData});
      Object.assign(this, validData);
    }
  }
  
  public validate<T>(opts?: IBaseValidationOptions): T {
    const options: ValidateOptions = Object.assign({ strict: false }, opts ? opts.options : {});
    const data: any = opts && opts.data ? opts.data : this;
    
    try {
      return this.getSchema()
        .noUnknown()
        .validateSync(data, options) as any;
    } catch (e) {
      const originalError: ValidationError = e;
      // Copy, rename and re-throw the error in a more user-friendly way
      const error: ValidationError = new ValidationError(originalError.errors, originalError.value, originalError.path, originalError.type);
      error.name = `${this.constructor.name} ${originalError.name}`;
      error.inner = originalError.inner;
      error.message = originalError.message;
      error.params = originalError.params;
      
      throw error;
    }
  }
  
  protected abstract getSchema(): ObjectSchema;
  protected abstract getDefaults(): DataPartial<BaseModel>;
}
