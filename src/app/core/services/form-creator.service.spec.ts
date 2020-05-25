import { FormCreatorService } from './form-creator.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

describe('form creator service', () => {
  let service: FormCreatorService;
  let fb: FormBuilder;

  beforeEach(() => {
    fb = new FormBuilder();
    service = new FormCreatorService(fb);
  });

  const formField = { name: '123' };

  it('should generate a form', () => {
    const expectedResult = {
      name: new FormControl('123', Validators.required),
    };
    const form = service.createForm(formField);
    console.log(expectedResult, form);
    expect(form.name.value).toEqual(expectedResult.name.value);
  });
});
