const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString.trim())

//-----------

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString.length)

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString.trim().length)

//-----
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhasStringMelhor = minhaString.replaceAll("_","sticioso")
console.log(minhasStringMelhor)

const minhaString = "Eu não sou supersticioso, mas sou um pouco ____.      ";
console.log(minhaString. replace(/____./g, "sticioso"))