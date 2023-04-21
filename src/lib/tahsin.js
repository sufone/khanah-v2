export default function tahsin(inputText) {

    if (inputText) {
        let processedText = inputText
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

            // <li>تحويل القوس المعوج إلى قوس قرآني: ({'{'}{'}'}) إلى (﴿﴾)</li>
            .replace(/{/g, '﴿')
            .replace(/}/g, '﴾')

            
        // template: .replace(//g, '')

        return processedText
    }

}