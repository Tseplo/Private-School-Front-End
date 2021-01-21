const title = document.getElementById('courseTitle')
const stream = document.getElementById('courseStream')
const type = document.getElementById('courseType')
const startDate = document.getElementById('courseStart')
const endDate = document.getElementById('courseEnd')
const form = document.getElementById('courseForm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {

    let messages = []
    let startDateObject = new Date(startDate.value)
    let endDateObject = new Date(endDate.value)
    let now = new Date();

    if (title.value === '' || title.value === null) {
        messages.push('Course title is required')
    }

    if (stream.value === '' || stream.value === null) {
        messages.push('Please specify the stream of this course')
    }

    if (type.value === '' || type.value === null) {
        messages.push('Please specify the type of this course')
    }

    if (startDate.value === '' || startDate.value === null) {
        messages.push('Please select a start date')
    }

    if (startDateObject.getTime() < now.getTime()) {
        messages.push('The course cannot start in the past or today')
    }

    if (endDate.value === '' || endDate.value === null) {
        messages.push('Please select an end date')
    }

    if (endDateObject.getTime() < now.getTime() || endDateObject.getTime() < startDateObject.getTime()) {
        messages.push('The course cannot end before it starts!')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(' - ')
    }

    else {
        alert('Successful Entry!')
    }
})
