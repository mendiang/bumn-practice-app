const grammarQuestions = [
    {
        id: 'g1',
        type: 'grammar',
        question: "She ___ interested in the project since the beginning.",
        options: ["is", "has been", "was", "have been"],
        answer: "has been",
        explanation: "Gunakan Present Perfect (has/have + V3/been) untuk menyatakan keadaan atau tindakan yang dimulai di masa lalu dan masih relevan atau berlanjut hingga sekarang. 'Since the beginning' menandakan titik waktu dimulainya di masa lalu."
    },
    {
        id: 'g2',
        type: 'grammar',
        question: "If I ___ you, I would study harder for the BUMN test.",
        options: ["am", "was", "were", "be"],
        answer: "were",
        explanation: "Ini adalah kalimat pengandaian tipe 2 (Second Conditional: If + Simple Past, Would + V1). Untuk subjek 'I' dalam conditional tipe 2, kita menggunakan 'were' (subjunctive mood), bukan 'was'."
    },
    {
        id: 'g3',
        type: 'grammar',
        question: "He is looking forward ___ you soon.",
        options: ["to seeing", "to see", "seeing", "see"],
        answer: "to seeing",
        explanation: "Frasa 'look forward to' selalu membutuhkan gerund (bentuk kata kerja -ing) setelahnya, karena kata 'to' dalam frasa ini berfungsi sebagai preposisi. Oleh karena itu, kalimat 'He is looking forward to seeing you soon' adalah kalimat yang benar secara tata bahasa."
    },
    {
        id: 'g4',
        type: 'grammar',
        question: "This book is ___ than the other one.",
        options: ["more interesting", "interesting", "most interesting", "interestinger"],
        answer: "more interesting",
        explanation: "Karena kalimat tersebut membandingkan dua buku menggunakan kata 'than;, kita memerlukan bentuk comparative dari kata sifat 'interesting'. Mengingat 'interesting' adalah kata sifat panjang, bentuk comparative-nya adalah 'more interesting'."
    },
    {
        id: 'g5',
        type: 'grammar',
        question: "Neither the manager nor the employees ___ responsible for the mistake.",
        options: ["is", "are", "was", "has been"],
        answer: "are",
        explanation: "Dalam 'Neither...nor', kata kerja mengikuti subjek terdekat (employees → jamak) → pakai are."
    },
    {
        id: 'g6',
        type: 'grammar',
        question: "The quarterly financial report ___ submitted to the board members before the end of this week.",
        options: ["must be", "has", "should", "will"],
        answer: "must be",
        explanation: "DKalimat ini menyatakan keharusan atau kewajiban. Struktur pasif (passive voice) diperlukan karena 'report' adalah objek yang menerima tindakan 'submit'. Modal 'must' + 'be' + Past Participle (V3) 'submitted' membentuk Simple Present Passive untuk menyatakan kewajiban."
    },
    {
        id: 'g7',
        type: 'grammar',
        question: "By the time the new software was fully implemented, the IT team ___ numerous challenges.",
        options: ["overcomes", "had overcome", "has overcome", "was overcoming"],
        answer: "had overcome",
        explanation: "Gunakan Past Perfect Tense (had + V3) untuk menyatakan suatu tindakan ('overcome challenges') yang telah selesai terjadi *sebelum* tindakan lain di masa lalu ('software was fully implemented'). Frasa 'By the time...' sering menjadi penanda Past Perfect."
    },
    {
        id: 'g8',
        type: 'grammar',
        question: "If the marketing department had launched the campaign earlier, they ___ a wider audience.",
        options: ["would reach", "will reach", "could have reached", "reached"],
        answer: "could have reached",
        explanation: "Ini adalah kalimat pengandaian tipe 3 (Third Conditional: If + Past Perfect, ... Would/Could/Might + Have + V3). Kalimat ini membicarakan situasi hipotetis di masa lalu yang tidak terjadi. 'could have reached' menunjukkan kemungkinan hasil yang berbeda di masa lalu."
    },
    {
        id: 'g9',
        type: 'grammar',
        question: "Neither the project manager nor the team members ___ satisfied with the initial project timeline.",
        options: ["was", "were", "is", "are"],
        answer: "were",
        explanation: "Dalam struktur 'Neither...nor...', kata kerja (verb) harus setuju (agree) dengan subjek yang paling dekat dengannya. Dalam kasus ini, subjek terdekat adalah 'team members' (plural/jamak), sehingga memerlukan kata kerja lampau jamak 'were'."
    },
    {
        id: 'g10',
        type: 'grammar',
        question: "All employees are expected ___ the mandatory safety training session next Monday.",
        options: ["attending", "to attend", "attend", "attended"],
        answer: "to attend",
        explanation: "Setelah frasa pasif seperti 'are expected', 'are required', 'are advised', kita menggunakan infinitive (to + V1). Jadi, 'are expected to attend' adalah struktur yang benar."
    },
    {
        id: 'g11',
        type: 'grammar',
        question: "The new CEO, ___ innovative vision transformed the company's strategy, received an award for leadership.",
        options: ["who", "which", "whose", "whom"],
        answer: "whose",
        explanation: "'Whose' adalah relative pronoun yang digunakan untuk menunjukkan kepemilikan (possessive). Visi ('innovative vision') adalah milik CEO, sehingga 'whose' adalah pilihan yang tepat untuk menghubungkan klausa."
    },
    {
        id: 'g12',
        type: 'grammar',
        question: "Despite ___ initial difficulties, the research team successfully completed the experiment.",
        options: ["it's", "its", "they're", "their"],
        answer: "its",
        explanation: "'Despite' adalah preposisi yang harus diikuti oleh noun atau noun phrase. 'Its' adalah kata ganti kepemilikan (possessive determiner) untuk benda tunggal atau konsep ('the research team' dianggap sebagai satu unit dalam konteks kesulitan awal ini). 'It's' adalah singkatan dari 'it is'."
    },
    {
        id: 'g13',
        type: 'grammar',
        question: "The company is committed to ___ sustainable practices across all its operations.",
        options: ["implement", "implementing", "implemented", "implementation"],
        answer: "implementing",
        explanation: "Setelah frasa 'committed to', 'dedicated to', 'look forward to', preposisi 'to' diikuti oleh Gerund (bentuk -ing). Di sini, 'implementing' berfungsi sebagai gerund setelah 'committed to'."
    },
    {
        id: 'g14',
        type: 'grammar',
        question: "___ providing excellent customer service, the company also focuses on employee welfare.",
        options: ["Besides", "Beside", "Except", "Apart"],
        answer: "Besides",
        explanation: "'Besides' (dengan 's') berarti 'selain' atau 'di samping itu', digunakan untuk menambahkan informasi. 'Beside' (tanpa 's') berarti 'di sebelah'. 'Except' berarti 'kecuali'. 'Apart' biasanya digunakan dalam frasa 'apart from'."
    },
    {
        id: 'g15',
        type: 'grammar',
        question: "Had the management known about the potential risks, they ___ differently.",
        options: ["acted", "would act", "would have acted", "will act"],
        answer: "would have acted",
        explanation: "Ini adalah bentuk inversi dari Conditional Type 3 ('If the management had known...'). Ketika 'If' dihilangkan dan 'Had' dipindahkan ke depan, struktur main clause tetap sama (...Would/Could/Might + Have + V3). Ini membicarakan tindakan hipotetis yang berbeda di masa lalu."
    },


    // Tambahkan lebih banyak soal di sini
];

const readingQuestions = [
    {
        id: 'r1q1',
        type: 'reading',
        passage: "The rapid advancement of technology has significantly transformed various aspects of human life. Communication has become instantaneous through smartphones and social media platforms. Automation is changing industries, requiring new skills from the workforce. While these changes bring convenience and efficiency, they also raise concerns about job displacement and digital privacy.",
        question: "What is the main topic of the passage?",
        options: ["The history of communication", "Concerns about digital privacy only", "The impact of technology on human life", "The importance of smartphones"],
        answer: "The impact of technology on human life",
        explanation: "Paragraf secara keseluruhan membahas bagaimana teknologi mengubah berbagai aspek kehidupan (komunikasi, industri) serta dampak positif (efisiensi) dan negatifnya (job displacement, privasi)."
    },
    {
        id: 'r1q2', // Pertanyaan lain dari bacaan yang sama
        type: 'reading',
        passage: "The rapid advancement of technology has significantly transformed various aspects of human life. Communication has become instantaneous through smartphones and social media platforms. Automation is changing industries, requiring new skills from the workforce. While these changes bring convenience and efficiency, they also raise concerns about job displacement and digital privacy.",
        question: "According to the passage, what is one concern raised by technological advancement?",
        options: ["Increased job opportunities", "Enhanced digital privacy", "Job displacement", "Slower communication"],
        answer: "Job displacement",
        explanation: "Kalimat terakhir paragraf secara eksplisit menyebutkan '...they also raise concerns about job displacement and digital privacy.'"
    },
    {
        id: 'r2q1',
        type: 'reading',
        passage: "Time management is crucial for success in any competitive examination. The BUMN recruitment test often includes multiple sections with strict time limits. Candidates who can allocate their time effectively across sections, answer questions accurately within the allotted time per question, and avoid getting stuck on difficult problems tend to perform better. Practicing timed simulations is an excellent way to improve this skill.",
        question: "Why is time management important for the BUMN test according to the passage?",
        options: ["It guarantees a high score.", "It helps candidates answer accurately under pressure.", "It eliminates difficult questions.", "It allows more time for reading passages."],
        answer: "It helps candidates answer accurately under pressure.",
        explanation: "Paragraf menyatakan bahwa kandidat yang bisa 'allocate their time effectively', 'answer questions accurately within the allotted time', dan 'avoid getting stuck' cenderung lebih baik. Ini mengarah pada kemampuan menjawab akurat di bawah tekanan waktu."
    },
    {
        id: 'r3q1',
        type: 'reading',
        passage: `
            <p>The Indonesian government is strongly encouraging State-Owned Enterprises (BUMNs) to play a more significant role in the national economic recovery post-pandemic. Key focus areas include accelerating digital transformation, developing renewable energy sources, and strengthening the domestic supply chain. These initiatives are expected not only to boost economic growth but also to enhance the competitiveness of BUMNs in the global market.</p>
            <p>However, achieving these goals requires substantial investment and strategic human capital development. BUMNs need to attract and retain skilled professionals capable of navigating complex technological landscapes and managing large-scale projects efficiently. Collaboration between different BUMNs and with the private sector is also deemed crucial for optimizing resources and mitigating risks.</p>
        `,
        question: "What is the main topic discussed in the passage?",
        options: ["Challenges faced by BUMNs during the pandemic.", "The role of BUMNs in Indonesia's post-pandemic economic recovery.", "Collaboration between BUMNs and the private sector.", "Technological advancements in Indonesian companies."],
        answer: "The role of BUMNs in Indonesia's post-pandemic economic recovery.",
        explanation: "Paragraf pertama secara eksplisit menyatakan bahwa pemerintah mendorong BUMN untuk berperan lebih signifikan dalam pemulihan ekonomi nasional pasca-pandemi, yang menjadi fokus utama seluruh teks."
    },
    {
        id: 'r3q2',
        type: 'reading',
        passage: `
            <p>The Indonesian government is strongly encouraging State-Owned Enterprises (BUMNs) to play a more significant role in the national economic recovery post-pandemic. Key focus areas include accelerating digital transformation, developing renewable energy sources, and strengthening the domestic supply chain. These initiatives are expected not only to boost economic growth but also to enhance the competitiveness of BUMNs in the global market.</p>
            <p>However, achieving these goals requires substantial investment and strategic human capital development. BUMNs need to attract and retain skilled professionals capable of navigating complex technological landscapes and managing large-scale projects efficiently. Collaboration between different BUMNs and with the private sector is also deemed crucial for optimizing resources and mitigating risks.</p>
        `,
        question: "According to the passage, what is needed for BUMNs to achieve their goals in economic recovery?",
        options: ["Reducing collaboration with the private sector.", "Focusing solely on digital transformation.", "Substantial investment and human capital development.", "Decreasing global market competitiveness."],
        answer: "Substantial investment and human capital development.",
        explanation: "Paragraf kedua secara jelas menyatakan 'However, achieving these goals requires substantial investment and strategic human capital development.'"
    },
    {
        id: 'r3q3',
        type: 'reading',
        passage: `
            <p>The Indonesian government is strongly encouraging State-Owned Enterprises (BUMNs) to play a more significant role in the national economic recovery post-pandemic. Key focus areas include accelerating digital transformation, developing renewable energy sources, and strengthening the domestic supply chain. These initiatives are expected not only to boost economic growth but also to enhance the competitiveness of BUMNs in the global market.</p>
            <p>However, achieving these goals requires substantial investment and strategic human capital development. BUMNs need to attract and retain skilled professionals capable of navigating complex technological landscapes and managing large-scale projects efficiently. Collaboration between different BUMNs and with the private sector is also deemed crucial for optimizing resources and mitigating risks.</p>
        `,
        question: "The word 'mitigating' in the second paragraph is closest in meaning to...",
        options: ["Increasing", "Ignoring", "Reducing", "Analyzing"],
        answer: "Reducing",
        explanation: "alam konteks 'mitigating risks', kata 'mitigating' berarti mengurangi atau memperkecil dampak negatif dari risiko tersebut."
    },
    {
        id: 'r4q1',
        type: 'reading',
        passage: `
            <p>Corporate Social Responsibility (CSR) is increasingly becoming an integral part of BUMN operations in Indonesia. Beyond mere compliance, many state-owned companies are actively implementing programs that contribute to community development, environmental sustainability, and ethical governance. This shift reflects a growing understanding that long-term business success is intertwined with the well-being of society and the environment.</p>
            <p>Effective CSR initiatives can enhance a company's reputation, build stakeholder trust, and attract socially conscious investors and employees. Examples include providing educational scholarships, supporting local SMEs (Small and Medium Enterprises), and investing in waste management systems. Transparent reporting on CSR activities is also vital to demonstrate accountability and impact.</p>
        `,
        question: "What is the primary purpose of this passage?",
        options: [ "To criticize BUMNs for lack of CSR activities.", "To list specific BUMNs involved in CSR.", "To explain the growing importance and benefits of CSR for BUMNs.", "To detail the financial costs of implementing CSR programs."],
        answer: "To explain the growing importance and benefits of CSR for BUMNs.",
        explanation: "Keseluruhan teks membahas bagaimana CSR menjadi bagian penting operasi BUMN, alasan di baliknya (kesuksesan jangka panjang terkait masyarakat/lingkungan), dan manfaatnya (reputasi, kepercayaan, menarik investor/karyawan)."
    },
    {
        id: 'r4q2',
        type: 'reading',
        passage: `
            <p>Corporate Social Responsibility (CSR) is increasingly becoming an integral part of BUMN operations in Indonesia. Beyond mere compliance, many state-owned companies are actively implementing programs that contribute to community development, environmental sustainability, and ethical governance. This shift reflects a growing understanding that long-term business success is intertwined with the well-being of society and the environment.</p>
            <p>Effective CSR initiatives can enhance a company's reputation, build stakeholder trust, and attract socially conscious investors and employees. Examples include providing educational scholarships, supporting local SMEs (Small and Medium Enterprises), and investing in waste management systems. Transparent reporting on CSR activities is also vital to demonstrate accountability and impact.</p>
        `,
        question: "Which of the following is mentioned as a potential benefit of effective CSR initiatives?",
        options: ["Increased short-term profits.", "Reduced need for employees.", "Enhanced company reputation.", "Simplified government regulations."],
        answer: "Enhanced company reputation.",
        explanation: "Paragraf kedua secara eksplisit menyebutkan bahwa CSR yang efektif dapat 'enhance a company's reputation, build stakeholder trust, and attract socially conscious investors and employees'."
    },
    {
        id: 'r5q1',
        type: 'reading',
        passage: `
             <p>Artificial Intelligence (AI) is rapidly becoming ubiquitous, permeating various sectors from healthcare and finance to entertainment and transportation. Its ability to process vast amounts of data, identify complex patterns, and automate repetitive tasks offers unprecedented opportunities for efficiency and innovation. Businesses leverage AI for enhanced customer service through chatbots, optimized logistics via predictive analytics, and personalized marketing strategies. In scientific research, AI accelerates discovery by analyzing experimental data and simulating complex phenomena at speeds unattainable by humans.</p>
             <p>However, the widespread adoption of AI also presents significant challenges. Concerns about job displacement due to automation are prominent, necessitating proactive measures for workforce upskilling and reskilling. Ethical considerations, particularly regarding algorithmic bias and data privacy, demand careful attention and robust regulatory frameworks. Ensuring that AI systems are transparent, explainable, and fair is crucial for building public trust and preventing unintended negative consequences. The 'black box' nature of some complex AI models makes this task particularly difficult.</p>
             <p>Navigating the future shaped by AI requires a balanced approach. Maximizing its benefits while mitigating its risks involves continuous dialogue among technologists, policymakers, businesses, and the public. Investment in education to foster AI literacy across the population and the development of ethical guidelines are imperative steps towards harnessing AI for collective good, ensuring that technological progress aligns with human values and societal well-being.</p>
        `,
        question: "What is the primary focus of the passage?",
        options: ["The technical challenges of building complex AI models.", "A detailed history of Artificial Intelligence development.", "The benefits, challenges, and future considerations of AI adoption.", "The specific applications of AI in the healthcare sector only."],
        answer: "The benefits, challenges, and future considerations of AI adoption.",
        explanation: "Paragraf pertama membahas manfaat AI, paragraf kedua membahas tantangan dan kekhawatiran, dan paragraf ketiga membahas pendekatan seimbang untuk masa depan. Ini mencakup ketiga aspek tersebut."
    },
    {
        id: 'r5q2',
        type: 'reading',
        passage: `
             <p>Artificial Intelligence (AI) is rapidly becoming ubiquitous, permeating various sectors from healthcare and finance to entertainment and transportation. Its ability to process vast amounts of data, identify complex patterns, and automate repetitive tasks offers unprecedented opportunities for efficiency and innovation. Businesses leverage AI for enhanced customer service through chatbots, optimized logistics via predictive analytics, and personalized marketing strategies. In scientific research, AI accelerates discovery by analyzing experimental data and simulating complex phenomena at speeds unattainable by humans.</p>
             <p>However, the widespread adoption of AI also presents significant challenges. Concerns about job displacement due to automation are prominent, necessitating proactive measures for workforce upskilling and reskilling. Ethical considerations, particularly regarding algorithmic bias and data privacy, demand careful attention and robust regulatory frameworks. Ensuring that AI systems are transparent, explainable, and fair is crucial for building public trust and preventing unintended negative consequences. The 'black box' nature of some complex AI models makes this task particularly difficult.</p>
             <p>Navigating the future shaped by AI requires a balanced approach. Maximizing its benefits while mitigating its risks involves continuous dialogue among technologists, policymakers, businesses, and the public. Investment in education to foster AI literacy across the population and the development of ethical guidelines are imperative steps towards harnessing AI for collective good, ensuring that technological progress aligns with human values and societal well-being.</p>
        `,
        question: "According to the passage, why is ensuring AI systems are 'transparent, explainable, and fair' considered crucial?",
        options: ["To make AI models less complex.", "To accelerate scientific discovery.", "To build public trust and prevent negative consequences.", "To reduce the need for human oversight."],
        answer: "To build public trust and prevent negative consequences.",
        explanation: "Paragraf kedua menyatakan, 'Ensuring that AI systems are transparent, explainable, and fair is crucial for building public trust and preventing unintended negative consequences."
    },
    {
        id: 'r5q3',
        type: 'reading',
        passage:  `
        <p>Artificial Intelligence (AI) is rapidly becoming ubiquitous, permeating various sectors from healthcare and finance to entertainment and transportation. Its ability to process vast amounts of data, identify complex patterns, and automate repetitive tasks offers unprecedented opportunities for efficiency and innovation. Businesses leverage AI for enhanced customer service through chatbots, optimized logistics via predictive analytics, and personalized marketing strategies. In scientific research, AI accelerates discovery by analyzing experimental data and simulating complex phenomena at speeds unattainable by humans.</p>
        <p>However, the widespread adoption of AI also presents significant challenges. Concerns about job displacement due to automation are prominent, necessitating proactive measures for workforce upskilling and reskilling. Ethical considerations, particularly regarding algorithmic bias and data privacy, demand careful attention and robust regulatory frameworks. Ensuring that AI systems are transparent, explainable, and fair is crucial for building public trust and preventing unintended negative consequences. The 'black box' nature of some complex AI models makes this task particularly difficult.</p>
        <p>Navigating the future shaped by AI requires a balanced approach. Maximizing its benefits while mitigating its risks involves continuous dialogue among technologists, policymakers, businesses, and the public. Investment in education to foster AI literacy across the population and the development of ethical guidelines are imperative steps towards harnessing AI for collective good, ensuring that technological progress aligns with human values and societal well-being.</p>
   `,
        question: "The word 'imperative' in the third paragraph is closest in meaning to:",
        options: [ "Optional", "Suggested", "Temporary", "Essential"],
        answer: "Essential",
        explanation: "Dalam konteks 'imperative steps', kata 'imperative' berarti langkah-langkah yang sangat penting, mendesak, atau krusial (essential)."
    },
    {
        id: 'r6q1',
        type: 'reading',
        passage: `
            <p>The traditional linear economic model of 'take-make-dispose' is proving increasingly unsustainable in the face of finite resources and growing environmental concerns. As an alternative, the concept of a circular economy is gaining traction globally. This model emphasizes keeping resources in use for as long as possible, extracting the maximum value from them whilst in use, then recovering and regenerating products and materials at the end of each service life. It fundamentally shifts away from waste generation towards resource optimization and value retention.</p>
            <p>Implementing a circular economy involves redesigning products for durability, reusability, and recyclability. Business models are also transforming, moving towards leasing or service-based systems where manufacturers retain ownership and responsibility for products throughout their lifecycle. Key strategies include promoting repair cafes, enhancing material recycling infrastructure, utilizing renewable energy in production, and developing innovative ways to turn waste streams from one industry into resources for another (industrial symbiosis).</p>
            <p>While the transition presents challenges, such as requiring significant initial investment and changes in consumer behavior, the potential benefits are substantial. A circular economy can reduce pressure on natural resources, minimize pollution and carbon emissions, create new green jobs, and enhance economic resilience by reducing dependence on volatile global supply chains for raw materials. Governments, businesses, and consumers all have roles to play in accelerating this systemic shift.</p>
        `,
        question: "What is the fundamental difference between a linear and a circular economy described in the passage?",
        options: [ "Linear focuses on services, while circular focuses on products.",
            "Linear maximizes resource use, while circular minimizes it.",
            "Linear creates waste, while circular aims to eliminate it by keeping resources in use.",
            "Linear prioritizes recycling, while circular prioritizes disposal."],
        answer: "Linear creates waste, while circular aims to eliminate it by keeping resources in use.",
        explanation: "Paragraf pertama mendefinisikan model linear sebagai 'take-make-dispose' (menciptakan sampah) dan model circular sebagai 'keeping resources in use... recovering and regenerating' (mengeliminasi sampah)."
    },
    {
        id: 'r6q2',
        type: 'reading',
        passage: `
            <p>The traditional linear economic model of 'take-make-dispose' is proving increasingly unsustainable in the face of finite resources and growing environmental concerns. As an alternative, the concept of a circular economy is gaining traction globally. This model emphasizes keeping resources in use for as long as possible, extracting the maximum value from them whilst in use, then recovering and regenerating products and materials at the end of each service life. It fundamentally shifts away from waste generation towards resource optimization and value retention.</p>
            <p>Implementing a circular economy involves redesigning products for durability, reusability, and recyclability. Business models are also transforming, moving towards leasing or service-based systems where manufacturers retain ownership and responsibility for products throughout their lifecycle. Key strategies include promoting repair cafes, enhancing material recycling infrastructure, utilizing renewable energy in production, and developing innovative ways to turn waste streams from one industry into resources for another (industrial symbiosis).</p>
            <p>While the transition presents challenges, such as requiring significant initial investment and changes in consumer behavior, the potential benefits are substantial. A circular economy can reduce pressure on natural resources, minimize pollution and carbon emissions, create new green jobs, and enhance economic resilience by reducing dependence on volatile global supply chains for raw materials. Governments, businesses, and consumers all have roles to play in accelerating this systemic shift.</p>
        `,
        question: "Which of the following is mentioned as a strategy for implementing a circular economy?",
        options: [
            "Increasing the consumption of single-use products.",
            "Designing products for shorter lifespans.",
            "Promoting repair and enhancing recycling infrastructure.",
            "Relying more heavily on imported raw materials."
        ],
        answer: "Promoting repair and enhancing recycling infrastructure.",
        explanation: "Paragraf kedua secara eksplisit menyebutkan 'Key strategies include promoting repair cafes, enhancing material recycling infrastructure...'"
    },
    {
        id: 'r6q3',
        type: 'reading',
        passage: `
            <p>The traditional linear economic model of 'take-make-dispose' is proving increasingly unsustainable in the face of finite resources and growing environmental concerns. As an alternative, the concept of a circular economy is gaining traction globally. This model emphasizes keeping resources in use for as long as possible, extracting the maximum value from them whilst in use, then recovering and regenerating products and materials at the end of each service life. It fundamentally shifts away from waste generation towards resource optimization and value retention.</p>
            <p>Implementing a circular economy involves redesigning products for durability, reusability, and recyclability. Business models are also transforming, moving towards leasing or service-based systems where manufacturers retain ownership and responsibility for products throughout their lifecycle. Key strategies include promoting repair cafes, enhancing material recycling infrastructure, utilizing renewable energy in production, and developing innovative ways to turn waste streams from one industry into resources for another (industrial symbiosis).</p>
            <p>While the transition presents challenges, such as requiring significant initial investment and changes in consumer behavior, the potential benefits are substantial. A circular economy can reduce pressure on natural resources, minimize pollution and carbon emissions, create new green jobs, and enhance economic resilience by reducing dependence on volatile global supply chains for raw materials. Governments, businesses, and consumers all have roles to play in accelerating this systemic shift.</p>
        `,
        question: "What can be inferred from the passage about the transition to a circular economy?",
        options: [
            "It requires only technological advancements.",
            "It is a simple process with no significant obstacles.",
            "It involves changes from producers, consumers, and policymakers.",
            "It primarily benefits large corporations."
        ],
        answer: "It involves changes from producers, consumers, and policymakers.",
        explanation: "Paragraf ketiga menyebutkan tantangan ('changes in consumer behavior') dan diakhiri dengan menyatakan bahwa 'Governments, businesses, and consumers all have roles to play', menyiratkan keterlibatan berbagai pihak."
    },



    // Tambahkan lebih banyak soal reading di sini
];

// --- Array Baru untuk Soal Error Identification ---
const bumnErrorIdQuestions = [
    {
        id: 'bumn_err1',
        type: 'grammar', // Atau bisa 'error_identification' jika ingin lebih spesifik
        question: "The final presentation <u>includes</u> (A) graphs, <u>detailed</u> (B) analysis, and (C) <u>it's</u> (D) main conclusions.",
        options: ["A", "B", "C", "D"], // Pilihan adalah penanda bagian
        answer: "D", // Jawaban adalah huruf bagian yang salah
        explanation: "Kesalahan ada pada (D) 'it's'. Seharusnya menggunakan possessive pronoun 'its' (tanpa apostrof) untuk menunjukkan kepemilikan ('conclusions' milik 'presentation'). 'It's' adalah singkatan dari 'it is' atau 'it has'."
    },
    {
        id: 'bumn_err2',
        type: 'grammar',
        question: "<u>Effective communication</u> (A) <u>and good teamwork</u> (B) <u>is</u> (C) <u>essential for project</u> (D) success.",
        options: ["A", "B", "C", "D"],
        answer: "C",
        explanation: "Kesalahan ada pada (C) 'is'. Subjek kalimat adalah gabungan ('Effective communication and good teamwork'), yang bersifat jamak (plural). Oleh karena itu, kata kerja harus jamak, yaitu 'are'."
    },
    {
        id: 'bumn_err3',
        type: 'grammar',
        question: "The manager reviewed the performance <u>reports</u> (A) <u>careful</u> (B) <u>before</u> (C) making <u>any</u> (D) decisions.",
        options: ["A", "B", "C", "D"],
        answer: "B",
        explanation: "Kesalahan ada pada (B) 'careful'. Kata ini seharusnya menerangkan kata kerja 'reviewed', sehingga membutuhkan bentuk adverb 'carefully', bukan adjective 'careful'."
    },
    {
        id: 'bumn_err4',
        type: 'grammar',
        question: "Responsibilities <u>include</u> (A) <u>managing</u> budgets, (B) <u>leading</u> the team, and (C) <u>to prepare</u> (D) weekly reports.",
        options: ["A", "B", "C", "D"],
        answer: "D",
        explanation: "Kesalahan ada pada (D) 'to prepare'. Untuk menjaga struktur paralel dalam daftar (managing..., leading...), bentuk gerund 'preparing' harus digunakan agar setara dengan item lainnya, bukan infinitive 'to prepare'."
    },
    {
        id: 'bumn_err5',
        type: 'grammar',
        question: "When <u>the auditors</u> (A) <u>arrived</u>, the finance department (B) <u>already prepares</u> (C) all the necessary (D) documents.",
        options: ["A", "B", "C", "D"],
        answer: "C",
        explanation: "Kesalahan ada pada (C) 'already prepares'. Tindakan menyiapkan dokumen ('prepare') terjadi *sebelum* auditor tiba ('arrived', masa lalu). Gunakan Past Perfect Tense ('had already prepared') untuk menekankan bahwa satu tindakan di masa lalu selesai sebelum tindakan lain di masa lalu dimulai."
    },
    {
        id: 'bumn_err6',
        type: 'grammar',
        question: "<u>Neither</u> (A) the suppliers <u>nor</u> (B) the main distributor <u>were</u> (C) able to meet the tight <u>deadline</u> (D).",
        options: ["A", "B", "C", "D"],
        answer: "C",
        explanation: "Kesalahan ada pada (C) 'were'. Dalam struktur 'Neither...nor...', kata kerja harus setuju (agree) dengan subjek yang paling dekat dengannya. Subjek terdekat adalah 'the main distributor' (singular/tunggal), sehingga kata kerja seharusnya 'was'."
    },
     {
        id: 'bumn_err7',
        type: 'grammar',
        question: "The marketing team is looking forward to <u>launch</u> (A) the new campaign, <u>which</u> (B) they believe <u>will increase</u> (C) brand <u>awareness</u> (D).",
        options: ["A", "B", "C", "D"],
        answer: "A",
        explanation: "Kesalahan ada pada (A) 'launch'. Setelah frasa 'looking forward to', preposisi 'to' harus diikuti oleh Gerund (bentuk V-ing). Seharusnya 'launching'."
    },
    // Tambahkan lebih banyak soal error identification di sini
];
// Fungsi untuk mendapatkan SEMUA soal
function getQuizQuestions() {
     // Gabungkan kedua jenis soal
     const allQuestions = [...grammarQuestions, ...readingQuestions,...bumnErrorIdQuestions];
     // Acak urutan semua soal
     allQuestions.sort(() => Math.random() - 0.5);
     return allQuestions;
}

export { getQuizQuestions };