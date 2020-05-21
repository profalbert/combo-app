export type FieldValidatorType = (...args: any[]) => string | boolean | undefined


export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value: string) => {
  if (value && value.length > maxLength) {
    return `Max length is ${maxLength} symbols`;
  } else {
    return undefined;    
  }
}


export const validateString: FieldValidatorType = (title: string, limit: number) => {
  let checkArray: string[] = title.split(' ')
  let isTheWordLonger: boolean = false

  for(let i: number = 0; i < checkArray.length; i++) {  
    if (checkArray[i].length < 18) {
      isTheWordLonger = true
    }
  }
  if ((isTheWordLonger) && (title.replace(/\s+/g, ' ').trim() !== '') && (title.length < limit)) {
    return title.replace(/\s+/g, ' ').trim()
  } else {
    return undefined
  }  
}


export const chatValidatorForm: FieldValidatorType = (room: string, firstName: string, lastName: string) => {
  let firstSpace = firstName.split('').includes(' ')
  let lastSpace = lastName.split('').includes(' ')
  if (firstSpace || lastSpace || !room || !firstName || !lastName || (firstName.length > 15) || (lastName.length > 15)) {
    return false
  } else {
    return true;    
  }
}


