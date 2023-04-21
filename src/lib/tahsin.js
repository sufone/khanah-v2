export default function tahsin(inputText) {

    if (inputText) {
        let processedText = inputText.replace(/اً/g, 'ًا')


        return processedText
    }

}