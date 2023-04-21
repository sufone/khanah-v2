export default function tahsin(inputText) {

    if (inputText) {
        let processedText = inputText
            // <li>حذف الفتحة قبل تاء مربوطة: (قطَة) إلى (قطة)</li>
            .replace(/اً/g, 'ًا')

            // <li>حذف الألف قبل ألف مد: (بَاب) إلى (باب)</li>
            .replace(/َا/g, 'ا')

            // <li>نقل تنوين فتحة من الألف إلى قبلها: (باباً) إلى (بابًا)</li>
            .replace(/َة/g, 'ة')

            // <li>حذف سكون الواو المدية: (طُوْل) إلى (طُول)</li>
            .replace(/ُوْ/g, 'ُو')

            // <li>حذف سكون الياء المدية: (قِيْل) إلى (قِيل)</li>
            .replace(/ِيْ/g, 'ِي')

        // template: .replace(//g, '')

        return processedText
    }

}