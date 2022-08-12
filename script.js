const button = document.querySelector('.form__btn')
const input = document.querySelector('.password__input')
const toggle = document.querySelector('.password__toggle')

toggle.addEventListener('click', () => {
  if (toggle.className.includes('hide')) {
    input.type = 'text'
    toggle.classList.remove('hide')
    toggle.classList.add('visible')
  } else {
    input.type = 'password'
    toggle.classList.remove('visible')
    toggle.classList.add('hide')
  }
})

const lowerCase = document.querySelector('.lowerCase');
const upperCase = document.querySelector('.upperCase');
const oneDigit = document.querySelector('.oneDigit');
const length = document.querySelector('.length');

const validation = () => {
  const value = input.value

  const res = {}

  if (value.length >= 8) {
    res.length = 1;
  }

  value.split('').forEach(symbol => {
    const uniCode = symbol.charCodeAt();
    if (uniCode >= 48 && uniCode <= 57) {
      res.oneDigit = 1;
    } else if (uniCode >=65 && uniCode <=90) {
      res.upperCase = 1;
    } else if (uniCode >= 97 && uniCode <= 122) {
      res.lowerCase = 1;
    }
  });
  return res
}

input.addEventListener('keyup', () => {
  const result = validation()

  if (result.lowerCase === 1) {
    lowerCase.classList.remove('not-valid')
    lowerCase.classList.add('valid')
  } else {
    lowerCase.classList.remove('valid')
    lowerCase.classList.add('not-valid')
  }

  if (result.upperCase === 1) {
    upperCase.classList.remove('not-valid')
    upperCase.classList.add('valid')
  } else {
    upperCase.classList.remove('valid')
    upperCase.classList.add('not-valid')
    }

  if (result.oneDigit === 1) {
    oneDigit.classList.remove('not-valid')
    oneDigit.classList.add('valid')
  } else {
    oneDigit.classList.remove('valid')
    oneDigit.classList.add('not-valid')
    }

  if (result.length === 1) {
    length.classList.remove('not-valid')
    length.classList.add('valid')
  } else {
    length.classList.remove('valid')
    length.classList.add('not-valid')
    }
  if (Object.keys(result).length === 4) {
    button.disabled = false
    } else {
      button.disabled = true
    }
  }
)
