export default function tahsin(inputText) {

    if (inputText) {
        let processedText = inputText
            .replace(/اً/g, 'ًا')
            .replace(/َا/g, 'ا')
            .replace(/َة/g, 'ة')

            // template: .replace(//g, '')

        return processedText
    }

}