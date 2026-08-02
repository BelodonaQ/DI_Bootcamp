function validateUnionType(value: any, allowedtypes: string[]): boolean {
  const valueType = typeof value;

  for(const allowedType of allowedtypes){
    if (valueType === allowedType){
      return true;
    }
  }
  return false;
}


const username = "Alice";
const yo = 25;
const isStudent = true;

console.log(validateUnionType(username, ["string", "number"])); 
// true

console.log(validateUnionType(yo, ["string", "number"]));      
// true

console.log(validateUnionType(isStudent, ["string", "number"]));
// false


