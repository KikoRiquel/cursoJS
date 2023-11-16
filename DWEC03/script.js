
const textInput = document.querySelector('#toEncriptDecript'),
    resultP = document.querySelector('.result'),
    transformButton = document.querySelector('button');
    regex = /[^A-Za-z]+/g;

const dictionary = {
    l: 1,
    e: 3,
    o: 0,
    s: 5
}

const numbersToEncode = {
    1: 'l',
    3: 'e',
    0: 'o',
    5: 's'
}

const validate = (textInput) => {
    if (regex.test(textInput)) {
        alert('Texto no valido')
        return;
    }

    const text = transformText(textInput.toLowerCase(), dictionary, true);
    resultP.innerText = text;
    return text;
};

const transformText = (validateString, dictionary, bool) => {
    if (bool) {
        return validateString.replace(/[leos]/g, function (match) {
            return dictionary.hasOwnProperty(match) ? dictionary[match] : match;
        });
    }

    if (!bool) {
        alert('Testing')
    }

}

const isEncodeOrDecode = (palabra) => {
    const regex = /[A-Za-z]/g;
    const regexNum = /[1305]/g;

    if ( !regexNum.test(palabra) && !regex.test(palabra)) {
        alert('Introduce un texto valido')
        return;
    }

    if (regexNum.test(palabra)) {
        return true;
    }

    if (regex.test(palabra)) {
        return false
    }
}

// const encodeText = (validateString, dictionary) => {
//     return validateString.replace(/[leos]/g, function (match) {
//         return dictionary.hasOwnProperty(match) ? dictionary[match] : match;
//     });
// }

// const decodeText = (validateString, dictionary) => {
//     return validateString.replace(/[1305]/g, function (match) {
//         return dictionary.hasOwnProperty(match) ? dictionary[match] : match;
//     })
// }

transformButton.addEventListener('click', () => { validate(textInput.value) });