export default function tahsin(inputText) {

    if (inputText) {
        let processedText = inputText

            //// CLEANING SPACES AND TASHKIL
            // <li>حذف الفتحة قبل تاء مربوطة: (قطَة) إلى (قطة)</li>
            .replace(/اً/g, 'ًا')

            // <li>حذف الألف قبل ألف مد: (بَاب) إلى (باب)</li>
            .replace(/َا/g, 'ا')
            // <li>نقل تنوين فتحة من الألف إلى قبلها: (باباً) إلى (بابًا)</li>
            .replace(/َة/g, 'ة')

            // <li>حذف سكون الألف المدية: (باْبٌ) إلى (بابٌ)</li>
            .replace(/اْ/g, 'ا')
            // <li>حذف سكون الواو المدية: (طُوْل) إلى (طُول)</li>
            .replace(/ُوْ/g, 'ُو')
            // <li>حذف سكون الياء المدية: (قِيْل) إلى (قِيل)</li>
            .replace(/ِيْ/g, 'ِي')

            // <li>نقل الشدة قبل الحركة على نفس الحرف</li>
            .replace(/ُّ/g, 'ُّ')
            .replace(/َّ/g, 'َّ')
            .replace(/ِّ/g, 'ِّ')

            // <li>حذف المسافة الزائدة قبل علىمات الترقيم (، ؛ : .)</li>
            .replace(/ ،/g, '،')
            .replace(/ ؛/g, '؛')
            .replace(/ :/g, ':')
            .replace(/ \. /g, '. ')

            // <li>حذف المسافة في أول وآخر القوس والتنصيص: (« باب ») إلى («باب»)</li>
            .replace(/\( /g, '(')
            .replace(/ \)/g, ')')
            .replace(/« /g, '«')
            .replace(/ »/g, '»')

            //// CONVERTING SYMBOLS
            // <li>تحويل القوس المعوج إلى قوس قرآني: ({'{'}{'}'}) إلى (﴿﴾)</li>
            .replace(/{/g, '﴿')
            .replace(/}/g, '﴾')

            // <li>تحويل الشرطة إلى الكشيدة: (باب - باب - باب) إلى (باب ـ باب ـ باب)</li>
            .replace(/ - /g, ' ـ ')

            // <li>تحويل التنصيص الإنجليزي إلى العربي: (باب "باب".) إلى (باب «باب».)</li>
            .replace(/ "/g, ' «')
            .replace(/" /g, '» ')
            .replace(/"./g, '».')
            .replace(/"،/g, '»،')
            .replace(/"؛/g, '»؛')
            .replace(/":/g, '»:')

            // <li>تحويل القوس العادي إلى قوسين التنصيص: (باب (باب).) إلى (باب «باب».) </li>
            .replace(/\)/g, '»')
            .replace(/\(/g, '«')


        // template: .replace(//g, '')

        return processedText
    }

}