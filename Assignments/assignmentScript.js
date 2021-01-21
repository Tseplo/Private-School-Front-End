const title = document.getElementById('title')
const description = document.getElementById('description')
const submission = document.getElementById('submission')
const oralMark = document.getElementById('oralMark')
const totalMark = document.getElementById('totalMark')
const form = document.getElementById('courseForm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {

    let messages = []
    let submissionObject = new Date(submission.value)
    let now = new Date();

    if (title.value === '' || title.value === null) {
        messages.push('Title is required')
    }

    if (description.value === '' || description.value === null) {
        messages.push('Please give a brief description of the assignment')
    }


    if (submission.value === '' || submission.value === null) {
        messages.push('Please select a submission date')
    }

    if (submissionObject.getTime() < now.getTime()) {
        messages.push('The assignment cannot be submitted in the past')
    }

    if (oralMark.value === '' || oralMark.value === null) {
        messages.push('Please select an oral mark')
    }

    if (totalMark.value === '' || totalMark.value === null) {
        messages.push('Please select an oral mark')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(' - ')
    }

    else {
        alert('Successful Entry!')
    }
})
