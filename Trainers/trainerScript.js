const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const subject = document.getElementById('subject')
const form = document.getElementById('studentForm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {

    let messages = []

    if (firstName.value === '' || firstName.value === null) {
        messages.push('First name is required')
    }

    if (lastName.value === '' || lastName.value === null) {
        messages.push('Last name is required')
    }

    if (subject.value === '' || subject.value === null) {
        messages.push('Subject is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(' - ')
    }

    else {

        alert('Successful Entry!')
    }
})
