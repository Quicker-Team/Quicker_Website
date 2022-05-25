// topics enum
const topics = Object.freeze({
  1: 'Questions',
  2: 'Suggestions',
  3: 'Business Inquiries',
  4: 'Success Stories',
})

$('#myCarousel').carousel({
  interval: false,
})

const form = document.getElementById('contact')

function getTopic(topic) {
  switch (topic) {
    case '1':
      return topics['1']
      break
    case '2':
      return topics['2']
      break
    case '3':
      return topics['3']
      break
    case '4':
      return topics['4']
      break
    default:
      return 'Questions'
  }
}

function formatPhone(phone) {
  return phone.slice(0, 3) + '-' + phone.slice(3, 6) + '-' + phone.slice(6, 10)
}
function sendMail(formInfo) {
  const tempParams = {
    from_name: formInfo.name + ' ' + formInfo.surname,
    to_name: 'Quicker Team',
    message: formInfo.message,
  }

  emailjs
    .send('service_0b6dskg', 'template_okvvac8', tempParams)
    .then(function (res) {
      console.log('success', res.status)
    })
}

function getFormInfo() {
  const formInfo = {
    topic: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  }

  // get form information
  formInfo.topic = getTopic(form.elements['choose-topic'].value)
  formInfo.name = form.elements['name'].value
  formInfo.surname = form.elements['surname'].value
  formInfo.email = form.elements['email-address'].value
  formInfo.phone = formatPhone(form.elements['phone-number'].value)
  formInfo.message = form.elements['your-message'].value

  return formInfo
}

form.addEventListener('submit', (event) => {
  // handle the form data
  event.preventDefault()

  // formInfo is an object with the form data
  const formInfo = getFormInfo()

  console.log('formInfo', formInfo)

  sendMail(formInfo)
})
