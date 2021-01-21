const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const dateOfBirth = document.getElementById('dateOfBirth')
const tuitionFees = document.getElementById('tuitionFees')
const form = document.getElementById('studentForm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {

    let messages = []
    let dateOfBirthObject = new Date(dateOfBirth.value)
    let now = new Date();

    if (firstName.value === '' || firstName.value === null) {
        messages.push('First name is required')
    }

    if (lastName.value === '' || lastName.value === null) {
        messages.push('Last name is required')
    }

    if (dateOfBirth.value === '' || dateOfBirth.value === null) {
        messages.push('Please select a birth date')
    }

    if (dateOfBirthObject.getTime() > now.getTime()) {
        messages.push('Whoops! Looks like your student has not been born yet!')
    }

    if (tuitionFees.value === '' || tuitionFees.value === null) {
        messages.push('Tuition fees are required')
    }

    if (tuitionFees.value < 0) {
        messages.push('Tuition fees can not be a negative number')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(' - ')
    }

    else {

        alert('Successful Entry!')
    }
})
