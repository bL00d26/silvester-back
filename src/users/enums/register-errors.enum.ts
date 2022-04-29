export enum RegisterError {
  PASSWORD_LENGTH = 'La contraseña es menor a 6 carácteres',
  EMPTY_FIRST_NAME = 'Ingrese un nombre',
  FIRST_NAME = 'Ingrese un nombre correcto',
  EMPTY_LAST_NAME = 'Ingrese un apellido',
  LAST_NAME = 'Ingrese un apellido correcto',
  EMPTY_EMAIL = 'Ingrese un email',
  EMAIL = 'Ingrese un email válido',
  EMPTY_ADDRESS = 'Ingrese una dirección',
  ADDRESS = 'Ingrese una dirección correcta',
  EMPTY_DISTRICT = 'Ingrese un distrito',
  DISTRICT = 'Ingrese un distrito correcto',
  EMPTY_DEPARTMENT = 'Ingrese un departamento',
  DEPARTMENT = 'Ingrese un departamento correcto',
  EMPTY_CELLPHONE = 'Ingrese un celular',
  CELLPHONE = 'Ingrese un celular correcto',
}

export const passwordMinLength = 6;
export const dniMinLength = 7;
