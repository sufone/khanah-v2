export default function tahsin(inputText) {

    if (inputText) {
        let processedText = inputText

            //// GENERAL INFO
            // template: .replace(//g, '')
            // ignoring tashkil with an optional group that matches any one or more of the tashkil: ([ًٌٍَُِّْ]+)?
            // each replacement is explained using <li> tags to make it easy to update the explanation html at the same time

            //// CLEANING SPACES AND TASHKIL
            // <li>حذف الفواصل غير المرئية (ZWNJ) لمنع تقطع الحروف والضمائر المتصلة: (أفعال‌ه) إلى (أفعاله)</li>
            .replace(/\u200C/g, '')

            // <li>حذف التشكيل الزائد والشدة نهائياً من (الله) مع الإبقاء على حركة الإعراب فقط على الهاء</li>
            .replace(/ا[ًٌٍَُِّْٰ]*ل[ًٌٍَُِّْٰ]*ل[ًٌٍَُِّْٰ]*ه([ًٌٍَُِّْٰ]*)/g, (match, haaTashkil) => {
                let finalVowel = '';
                if (haaTashkil.includes('َ')) finalVowel = 'َ';
                else if (haaTashkil.includes('ُ')) finalVowel = 'ُ';
                else if (haaTashkil.includes('ِ')) finalVowel = 'ِ';
                return 'الله' + finalVowel;
            })

            // <li>حذف التشكيل الزائد والشدة من (لله) مع الإبقاء على حركة الإعراب وتجنب الكلمات المشابهة (مثل: يحلله)</li>
            .replace(/(^|[^أ-ي])([وف][ًٌٍَُِّْٰ]*)?ل[ًٌٍَُِّْٰ]*ل[ًٌٍَُِّْٰ]*ه([ًٌٍَُِّْٰ]*)/g, (match, boundary, prefix, haaTashkil) => {
                let finalVowel = '';
                if (haaTashkil.includes('َ')) finalVowel = 'َ';
                else if (haaTashkil.includes('ُ')) finalVowel = 'ُ';
                else if (haaTashkil.includes('ِ')) finalVowel = 'ِ';
                return boundary + (prefix || '') + 'لله' + finalVowel;
            })

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

            // <li>حذف الكشيدة أي التطويل في أثناء الكلمات: (مـن) إلى (من)</li>
            .replace(/(?<! )ـ/g, '')

            // <li>حذف سكون لام التعريف: (الْكتاب) إلى (الكتاب)</li>
            .replace(/الْ/g, 'ال')

            //// CONVERTING SYMBOLS
            // <li>تحويل القوس المعوج إلى قوس قرآني: ({'{'}{'}'}) إلى (﴿﴾)</li>
            .replace(/{/g, '﴿')
            .replace(/}/g, '﴾')

            // <li>تحويل الشرطة إلى الكشيدة: (باب - باب - باب) إلى (باب ـ باب ـ باب)</li>
            .replace(/ - /g, ' ـ ')

            // <li>تحويل التنصيص الإنجليزي إلى العربي: (باب "باب".) إلى (باب «باب».)</li>
            .replace(/"([^"]*)"/g, '«$1»')

            // <li>تحويل القوس العادي إلى قوس التنصيص: (باب ((باب)).) إلى (باب «باب».) </li>
            .replace(/\)\)/g, '»')
            .replace(/\(\(/g, '«')

            // <li>تحويل القوس الحاد إلى قوس التنصيص: ({"<"}باب{">"}) إلى («باب»)</li>
            .replace(/</g, '«')
            .replace(/>/g, '»')            

            //// DUA & HONORIFICS
            // <li>تحويل الدعاء (صلى الله عليه وسلم) ـ بغض النظر عن تشكيله ـ إلى رمزه (ﷺ)، حسب الخط «أضواء السلف»</li>
            .replace(/ص[ًٌٍَُِّْ]*ل[ًٌٍَُِّْ]*ى[ًٌٍَُِّْ]* ا[ًٌٍَُِّْ]*ل[ًٌٍَُِّْ]*ل[ًٌٍَُِّْ]*ه[ًٌٍَُِّْ]* ع[ًٌٍَُِّْ]*ل[ًٌٍَُِّْ]*ي[ًٌٍَُِّْ]*ه[ًٌٍَُِّْ]* و[ًٌٍَُِّْ]*س[ًٌٍَُِّْ]*ل[ًٌٍَُِّْ]*م[ًٌٍَُِّْ]*/g, 'ﷺ')

        return processedText
    }

}