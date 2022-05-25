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

form.addEventListener('submit', (event) => {
  // handle the form data
  event.preventDefault()

  // formInfo is an object with the form data
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

  console.log(formInfo)

  Email.send({
    Host: '	smtp.sendgrid.net',
    Username: 'apikey',
    Password:
      '	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',
    To: 'techandy42@gmail.com',
    From: formInfo.email,
    Subject: formInfo.topic,
    Body: formInfo.message,
  }).then((message) => alert('mail sent successfully'))
})
