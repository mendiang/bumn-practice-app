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
    {
        id: 'g16',
        type: 'grammar',
        question: "I have two pens. One is blue, and ___ is red.",
        options: ["other", "the other", "others", "another"],
        answer: "the other",
        explanation: "'The other' digunakan untuk menyatakan satu yang tersisa dari dua benda atau orang. Karena ada dua pena, dan satu sudah disebut, maka yang satu lagi disebut 'the other'."
    },
    {
        id: 'g17',
        type: 'grammar',
        question: "Some students passed the exam, but ___ failed.",
        options: ["other", "the other", "others", "another"],
        answer: "others",
        explanation: "'Others' digunakan untuk menyatakan lebih dari satu yang tersisa dari kelompok. Karena yang gagal lebih dari satu, maka 'others' yang tepat."
    },
    {
        id: 'g18',
        type: 'grammar',
        question: "He took one apple, and I took ___.",
        options: ["other", "the other", "others", "another"],
        answer: "the other",
        explanation: "'The other' digunakan untuk menyatakan satu yang tersisa dari dua benda. Karena hanya ada dua apel, dan satu sudah diambil, maka yang satu lagi adalah 'the other'."
    },
    {
        id: 'g19',
        type: 'grammar',
        question: "I like this book, but the ___ are boring.",
        options: ["other", "the other", "others", "another"],
        answer: "others",
        explanation: "'Others' digunakan untuk menyatakan benda jamak yang tersisa. Karena buku yang lain lebih dari satu, maka 'others' yang tepat."
    },
    {
        id: "g20",
        type: "grammar",
        question: "No sooner _____ the new security protocol than several vulnerabilities were identified.",
        options: ["did we implement", "we implemented", "had we implemented", "we had implemented"],
        answer: "had we implemented",
        explanation: "With 'no sooner' at the beginning of a clause, inversion is required. The past perfect 'had we implemented' is used because this action was completed before another past action (vulnerabilities being identified)."
    },
    {
        id: "g21",
        type: "grammar",
        question: "The CEO, together with her executive team, _____ to arrive at the conference by noon tomorrow.",
        options: ["are scheduled", "is scheduled", "were scheduled", "have scheduled"],
        answer: "is scheduled",
        explanation: "When a singular subject is followed by phrases like 'together with,' 'as well as,' or 'along with,' the verb agrees with the singular subject ('The CEO'), not with the plural phrase that follows. These phrases are parenthetical and do not affect subject-verb agreement."
    },
    {
        id: "g22",
        type: "grammar",
        question: "_____ the quarterly report been submitted on time, the company would have avoided the compliance penalty.",
        options: ["If", "Should", "Would", "Had"],
        answer: "Had",
        explanation: "This is an inverted conditional structure for past unreal conditions. 'Had the quarterly report been submitted' is the inverted form of 'If the quarterly report had been submitted' (third conditional), indicating a hypothetical past situation."
    },
    {
        id: "g23",
        type: "grammar",
        question: "The director insisted that the marketing team _____ a completely new approach for the upcoming campaign.",
        options: ["develops", "develop", "developed", "would develop"],
        answer: "develop",
        explanation: "After verbs like 'insist,' 'demand,' 'require,' etc. in formal contexts, the subjunctive mood is used. The subjunctive takes the base form of the verb without -s for third person singular, thus 'develop' is correct despite 'the marketing team' being third person singular."
    },
    {
        id: "g24",
        type: "grammar",
        question: "Not only _____ the deadline, but they also exceeded the quality expectations.",
        options: ["they met", "did they meet", "had they met", "they had met"],
        answer: "did they meet",
        explanation: "When 'not only' begins a clause, inversion occurs. With simple past tense, auxiliary 'did' is needed for the inversion, resulting in 'did they meet' rather than the normal word order 'they met'."
    },
    {
        id: "g25",
        type: "grammar",
        question: "The number of applicants for the position _____, while the number of available positions _____.",
        options: ["increase, decrease", "increases, decreases", "have increased, have decreased", "has increased, has decreased"],
        answer: "has increased, has decreased",
        explanation: "In the phrases 'the number of applicants' and 'the number of positions,' the subject is 'number' (singular), not 'applicants' or 'positions.' Therefore, singular verbs are required. Present perfect tense is appropriate to indicate a change that began in the past and continues to the present."
    },
    {
        id: "g26",
        type: "grammar",
        question: "_____ for the intervention of the legal team, the contract would have contained several problematic clauses.",
        options: ["Unless", "Except", "But", "Had it not been"],
        answer: "Had it not been",
        explanation: "This is an inverted conditional structure expressing a negative condition in the past. 'Had it not been for' is the inverted form of 'If it had not been for,' which correctly introduces a hypothetical past situation that didn't occur."
    },
    {
        id: "g27",
        type: "grammar",
        question: "The committee has requested that each department _____ a representative to the cross-functional task force.",
        options: ["appoints", "appoint", "appointed", "to appoint"],
        answer: "appoint",
        explanation: "Following expressions like 'request that,' 'suggest that,' or 'recommend that,' the subjunctive mood is used in formal English. The subjunctive form is the base form of the verb without -s in the third person singular, thus 'appoint' is correct."
    },
    {
        id: "g28",
        type: "grammar",
        question: "Seldom _____ such innovative approaches to longstanding industry challenges.",
        options: ["we have seen", "have we seen", "we had seen", "had we seen"],
        answer: "have we seen",
        explanation: "When adverbs with negative meaning like 'seldom,' 'rarely,' or 'never' begin a sentence, inversion occurs. Present perfect 'have we seen' is appropriate because it connects past experiences to the present situation."
    },
    {
        id: "g29",
        type: "grammar",
        question: "The strategic plan, _____ draft was circulated last week, will be finalized after incorporating stakeholder feedback.",
        options: ["whose", "which", "that", "its"],
        answer: "whose",
        explanation: "The possessive relative pronoun 'whose' is used to show possession for both people and things in a relative clause. Here, 'whose draft' correctly indicates that the draft belongs to the strategic plan, connecting the relative clause to the main clause."
    },
    {
        id: "g30",
        type: "grammar",
        question: "_____ the provisions of the new regulation, companies must submit compliance reports quarterly.",
        options: ["According to", "As per", "Under", "All of the above"],
        answer: "All of the above",
        explanation: "All three phrases—'According to,' 'As per,' and 'Under'—can be correctly used to introduce the provisions of regulations that establish requirements. They all indicate that the requirement derives its authority from the mentioned regulation."
    },
    {
        id: "g31",
        type: "grammar",
        question: "The data collected from the survey _____ a significant shift in consumer preferences.",
        options: ["indicate", "indicates", "is indicating", "are indicating"],
        answer: "indicate",
        explanation: "In formal scientific and academic writing, 'data' is traditionally treated as a plural noun (singular: datum), taking plural verbs. Therefore, 'indicate' is correct rather than the singular 'indicates'."
    },
    {
        id: "g32",
        type: "grammar",
        question: "Were the company _____ the acquisition, it would significantly strengthen its market position.",
        options: ["completing", "to complete", "completes", "completed"],
        answer: "to complete",
        explanation: "This is a subjunctive conditional using 'were' + infinitive to express a hypothetical future situation. 'Were the company to complete' is equivalent to 'If the company were to complete' and is a formal way to express this hypothetical condition."
    },
    {
        id: "g33",
        type: "grammar",
        question: "On no account _____ the confidential information to unauthorized personnel.",
        options: ["should be disclosed", "should disclose", "you should disclose", "should you disclose"],
        answer: "should you disclose",
        explanation: "When negative expressions like 'on no account,' 'under no circumstances,' etc. begin a sentence, inversion is required. The correct form is 'should you disclose' with auxiliary 'should' before the subject 'you'."
    },
    {
        id: "g34",
        type: "grammar",
        question: "The board members, each of whom _____ significant experience in the industry, unanimously approved the proposal.",
        options: ["has", "have", "had", "having"],
        answer: "has",
        explanation: "In the relative clause 'each of whom,' the subject is 'each' (singular), not 'board members' or 'whom.' Therefore, the singular verb 'has' is required to match with 'each,' despite 'board members' being plural."
    },
    {
        id: "g35",
        type: "grammar",
        question: "It is essential that every employee _____ with the updated security protocols immediately.",
        options: ["complies", "comply", "complied", "will comply"],
        answer: "comply",
        explanation: "After expressions like 'it is essential that,' 'it is necessary that,' or 'it is crucial that,' the subjunctive mood is used in formal contexts. The subjunctive form is the base form of the verb, so 'comply' is correct despite 'every employee' being third person singular."
    },
    {
        id: "g36",
        type: "grammar",
        question: "_____ awareness of the potential risks, the management implemented comprehensive preventive measures.",
        options: ["Having", "With", "Being", "Due to"],
        answer: "Having",
        explanation: "This sentence requires a present participle ('Having') to form a participial phrase that indicates the reason for the main clause action. 'Having awareness' correctly expresses that the awareness existed before and caused the implementation of measures."
    },
    {
        id: "g37",
        type: "grammar",
        question: "The extent to which employees engage with the corporate values _____ their commitment to the organization's mission.",
        options: ["reflect", "reflects", "are reflecting", "is reflecting"],
        answer: "reflects",
        explanation: "The subject of this sentence is 'The extent' (singular), not 'employees' or 'values.' The clause 'to which employees engage with the corporate values' modifies 'extent,' but doesn't change the fact that 'extent' is the subject requiring a singular verb 'reflects'."
    },
    {
        id: "g38",
        type: "grammar",
        question: "So substantial _____ the improvements in efficiency that the company exceeded its annual targets within six months.",
        options: ["was", "were", "are", "have been"],
        answer: "were",
        explanation: "When an adjective phrase beginning with 'so' + adjective starts a sentence, inversion occurs. Since 'improvements' is plural, the plural verb 'were' is required, despite appearing before the subject in this inverted structure."
    },
    {
        id: "g39",
        type: "grammar",
        question: "Neither the financial projections nor the market analysis _____ adequately addressed in the initial proposal.",
        options: ["was", "were", "has been", "have been"],
        answer: "was",
        explanation: "With 'neither...nor' construction, the verb agrees with the noun closest to it. Since 'market analysis' is singular and directly precedes the verb, the correct form is the singular 'was'."
    }
      


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
    {
        id: 'r7q1',
        type: 'reading',
        passage: `
            <p>The concept of organizational resilience has evolved significantly over the past decade. Traditional perspectives on resilience focused primarily on risk management and business continuity planning—structured approaches to identifying potential threats and implementing safeguards. However, contemporary understanding has expanded to encompass a more dynamic and multifaceted framework. Modern organizational resilience is characterized by adaptive capacity: the ability to adjust, reconfigure, and transform in response to changing circumstances without compromising essential functions.</p>
            <p>This shift reflects growing recognition that the business environment is increasingly characterized by what scholars term "VUCA" conditions—volatility, uncertainty, complexity, and ambiguity. Under such conditions, static defense mechanisms prove insufficient. Organizations must instead develop capabilities for sensing environmental changes, interpreting their implications, and reconfiguring resources accordingly. This requires not only robust systems and processes but also cultural elements such as psychological safety, which enables individuals to voice concerns and suggest novel approaches without fear of repercussion.</p>
            <p>Empirical studies across diverse sectors suggest that resilient organizations share several key attributes: redundancy in critical systems, diversity in thought and capability, loose coupling between operational units, and strong organizational learning mechanisms. These features enable what organizational theorists call "requisite variety"—internal complexity sufficient to match external complexity. When properly calibrated, this variety allows organizations to maintain stability in core functions while simultaneously exploring new possibilities and configurations.</p>
            <p>Recent research has also highlighted the paradoxical nature of resilience. The very qualities that promote stability under normal conditions may undermine adaptability during radical change. For instance, standardized procedures that enhance efficiency during routine operations can become liabilities when unprecedented challenges emerge. Consequently, truly resilient organizations must balance contradictory capabilities—exploitation versus exploration, centralization versus decentralization, and planning versus improvisation. This delicate equilibrium requires sophisticated governance mechanisms and leadership approaches that accommodate seemingly incompatible organizational logics.</p>
            <p>Critics argue that the concept of resilience has become problematically elastic, potentially serving as a rhetorical device that transfers responsibility for managing systemic risks from institutions to individuals. From this perspective, exhortations to develop resilience may inadvertently normalize precarity rather than addressing its structural causes. This critique has particular relevance in contexts where resource constraints limit organizational capacity to implement comprehensive resilience programs. Nevertheless, proponents maintain that when properly conceptualized and implemented, resilience initiatives can generate substantial value, not only in crisis situations but also in everyday operations.</p>
        `,
        question: "According to the passage, the contemporary understanding of organizational resilience primarily emphasizes:",
        options: [
            "Risk management protocols",
            "Business continuity planning",
            "Adaptive capacity",
            "Psychological safety",
            "Requisite variety"
        ],
        answer: "Adaptive capacity",
        explanation: "Paragraph 1 explicitly states 'Modern organizational resilience is characterized by adaptive capacity: the ability to adjust, reconfigure, and transform in response to changing circumstances without compromising essential functions.' While other options like risk management and business continuity planning are mentioned, they are described as 'traditional perspectives' rather than the contemporary understanding."
    },
    {
        id: 'r7q2',
        type: 'reading',
        passage: `
            <p>The concept of organizational resilience has evolved significantly over the past decade. Traditional perspectives on resilience focused primarily on risk management and business continuity planning—structured approaches to identifying potential threats and implementing safeguards. However, contemporary understanding has expanded to encompass a more dynamic and multifaceted framework. Modern organizational resilience is characterized by adaptive capacity: the ability to adjust, reconfigure, and transform in response to changing circumstances without compromising essential functions.</p>
            <p>This shift reflects growing recognition that the business environment is increasingly characterized by what scholars term "VUCA" conditions—volatility, uncertainty, complexity, and ambiguity. Under such conditions, static defense mechanisms prove insufficient. Organizations must instead develop capabilities for sensing environmental changes, interpreting their implications, and reconfiguring resources accordingly. This requires not only robust systems and processes but also cultural elements such as psychological safety, which enables individuals to voice concerns and suggest novel approaches without fear of repercussion.</p>
            <p>Empirical studies across diverse sectors suggest that resilient organizations share several key attributes: redundancy in critical systems, diversity in thought and capability, loose coupling between operational units, and strong organizational learning mechanisms. These features enable what organizational theorists call "requisite variety"—internal complexity sufficient to match external complexity. When properly calibrated, this variety allows organizations to maintain stability in core functions while simultaneously exploring new possibilities and configurations.</p>
            <p>Recent research has also highlighted the paradoxical nature of resilience. The very qualities that promote stability under normal conditions may undermine adaptability during radical change. For instance, standardized procedures that enhance efficiency during routine operations can become liabilities when unprecedented challenges emerge. Consequently, truly resilient organizations must balance contradictory capabilities—exploitation versus exploration, centralization versus decentralization, and planning versus improvisation. This delicate equilibrium requires sophisticated governance mechanisms and leadership approaches that accommodate seemingly incompatible organizational logics.</p>
            <p>Critics argue that the concept of resilience has become problematically elastic, potentially serving as a rhetorical device that transfers responsibility for managing systemic risks from institutions to individuals. From this perspective, exhortations to develop resilience may inadvertently normalize precarity rather than addressing its structural causes. This critique has particular relevance in contexts where resource constraints limit organizational capacity to implement comprehensive resilience programs. Nevertheless, proponents maintain that when properly conceptualized and implemented, resilience initiatives can generate substantial value, not only in crisis situations but also in everyday operations.</p>
        `,
        question: "The text suggests that 'VUCA' conditions require organizations to",
        options: [
            "Implement more stringent control mechanisms",
            "Develop capabilities for environmental sensing and resource reconfiguration",
            "Focus exclusively on core operational efficiency",
            "Prioritize standardized procedures across all functional areas",
            "Minimize redundancy in critical systems"
        ],
        answer: "Develop capabilities for environmental sensing and resource reconfiguration",
        explanation: "The passage states that under VUCA conditions, 'Organizations must instead develop capabilities for sensing environmental changes, interpreting their implications, and reconfiguring resources accordingly.' This directly corresponds to option B, while other options either contradict the passage or represent incomplete aspects of the response to VUCA conditions."
    },
    {
        id: 'r7q3',
        type: 'reading',
        passage: `
            <p>The concept of organizational resilience has evolved significantly over the past decade. Traditional perspectives on resilience focused primarily on risk management and business continuity planning—structured approaches to identifying potential threats and implementing safeguards. However, contemporary understanding has expanded to encompass a more dynamic and multifaceted framework. Modern organizational resilience is characterized by adaptive capacity: the ability to adjust, reconfigure, and transform in response to changing circumstances without compromising essential functions.</p>
            <p>This shift reflects growing recognition that the business environment is increasingly characterized by what scholars term "VUCA" conditions—volatility, uncertainty, complexity, and ambiguity. Under such conditions, static defense mechanisms prove insufficient. Organizations must instead develop capabilities for sensing environmental changes, interpreting their implications, and reconfiguring resources accordingly. This requires not only robust systems and processes but also cultural elements such as psychological safety, which enables individuals to voice concerns and suggest novel approaches without fear of repercussion.</p>
            <p>Empirical studies across diverse sectors suggest that resilient organizations share several key attributes: redundancy in critical systems, diversity in thought and capability, loose coupling between operational units, and strong organizational learning mechanisms. These features enable what organizational theorists call "requisite variety"—internal complexity sufficient to match external complexity. When properly calibrated, this variety allows organizations to maintain stability in core functions while simultaneously exploring new possibilities and configurations.</p>
            <p>Recent research has also highlighted the paradoxical nature of resilience. The very qualities that promote stability under normal conditions may undermine adaptability during radical change. For instance, standardized procedures that enhance efficiency during routine operations can become liabilities when unprecedented challenges emerge. Consequently, truly resilient organizations must balance contradictory capabilities—exploitation versus exploration, centralization versus decentralization, and planning versus improvisation. This delicate equilibrium requires sophisticated governance mechanisms and leadership approaches that accommodate seemingly incompatible organizational logics.</p>
            <p>Critics argue that the concept of resilience has become problematically elastic, potentially serving as a rhetorical device that transfers responsibility for managing systemic risks from institutions to individuals. From this perspective, exhortations to develop resilience may inadvertently normalize precarity rather than addressing its structural causes. This critique has particular relevance in contexts where resource constraints limit organizational capacity to implement comprehensive resilience programs. Nevertheless, proponents maintain that when properly conceptualized and implemented, resilience initiatives can generate substantial value, not only in crisis situations but also in everyday operations.</p>
        `,
        question: "The phrase 'loose coupling between operational units' in the third paragraph most likely refers to",
        options: [
            "Minimal communication between departments",
            "Independence that prevents cascade failures across systems",
            "Weak organizational structure",
            "Poor integration of business functions",
            "Decentralized leadership without coordination"
        ],
        answer: "Independence that prevents cascade failures across systems",
        explanation: "While the term 'loose coupling' isn't explicitly defined, contextual clues in paragraph 3 suggest it's one of several 'key attributes' that enable resilience. In organizational theory, loose coupling refers to components that are connected but retain independence, preventing failures from cascading throughout the entire system. This aligns with the passage's emphasis on maintaining stability while adapting."
    },
    {
        id: 'r7q4',
        type: 'reading',
        passage: `
            <p>The concept of organizational resilience has evolved significantly over the past decade. Traditional perspectives on resilience focused primarily on risk management and business continuity planning—structured approaches to identifying potential threats and implementing safeguards. However, contemporary understanding has expanded to encompass a more dynamic and multifaceted framework. Modern organizational resilience is characterized by adaptive capacity: the ability to adjust, reconfigure, and transform in response to changing circumstances without compromising essential functions.</p>
            <p>This shift reflects growing recognition that the business environment is increasingly characterized by what scholars term "VUCA" conditions—volatility, uncertainty, complexity, and ambiguity. Under such conditions, static defense mechanisms prove insufficient. Organizations must instead develop capabilities for sensing environmental changes, interpreting their implications, and reconfiguring resources accordingly. This requires not only robust systems and processes but also cultural elements such as psychological safety, which enables individuals to voice concerns and suggest novel approaches without fear of repercussion.</p>
            <p>Empirical studies across diverse sectors suggest that resilient organizations share several key attributes: redundancy in critical systems, diversity in thought and capability, loose coupling between operational units, and strong organizational learning mechanisms. These features enable what organizational theorists call "requisite variety"—internal complexity sufficient to match external complexity. When properly calibrated, this variety allows organizations to maintain stability in core functions while simultaneously exploring new possibilities and configurations.</p>
            <p>Recent research has also highlighted the paradoxical nature of resilience. The very qualities that promote stability under normal conditions may undermine adaptability during radical change. For instance, standardized procedures that enhance efficiency during routine operations can become liabilities when unprecedented challenges emerge. Consequently, truly resilient organizations must balance contradictory capabilities—exploitation versus exploration, centralization versus decentralization, and planning versus improvisation. This delicate equilibrium requires sophisticated governance mechanisms and leadership approaches that accommodate seemingly incompatible organizational logics.</p>
            <p>Critics argue that the concept of resilience has become problematically elastic, potentially serving as a rhetorical device that transfers responsibility for managing systemic risks from institutions to individuals. From this perspective, exhortations to develop resilience may inadvertently normalize precarity rather than addressing its structural causes. This critique has particular relevance in contexts where resource constraints limit organizational capacity to implement comprehensive resilience programs. Nevertheless, proponents maintain that when properly conceptualized and implemented, resilience initiatives can generate substantial value, not only in crisis situations but also in everyday operations.</p>
        `,
        question: "Which of the following best characterizes the 'paradoxical nature of resilience' as described in the passage?",
        options: [
            "Resilience concepts are inherently contradictory and logically flawed",
            "Resilience requires balancing opposing organizational capabilities",
            "Organizations cannot simultaneously achieve stability and adaptability",
            "Resilience initiatives typically fail despite theoretical soundness",
            "Standardized procedures universally undermine organizational adaptability"
        ],
        answer: "Resilience requires balancing opposing organizational capabilities",
        explanation: "Paragraph 4 specifically discusses the 'paradoxical nature of resilience' and states that 'truly resilient organizations must balance contradictory capabilities—exploitation versus exploration, centralization versus decentralization, and planning versus improvisation.' This directly supports option B."
    },
    {
        id: 'r7q5',
        type: 'reading',
        passage: `
            <p>The concept of organizational resilience has evolved significantly over the past decade. Traditional perspectives on resilience focused primarily on risk management and business continuity planning—structured approaches to identifying potential threats and implementing safeguards. However, contemporary understanding has expanded to encompass a more dynamic and multifaceted framework. Modern organizational resilience is characterized by adaptive capacity: the ability to adjust, reconfigure, and transform in response to changing circumstances without compromising essential functions.</p>
            <p>This shift reflects growing recognition that the business environment is increasingly characterized by what scholars term "VUCA" conditions—volatility, uncertainty, complexity, and ambiguity. Under such conditions, static defense mechanisms prove insufficient. Organizations must instead develop capabilities for sensing environmental changes, interpreting their implications, and reconfiguring resources accordingly. This requires not only robust systems and processes but also cultural elements such as psychological safety, which enables individuals to voice concerns and suggest novel approaches without fear of repercussion.</p>
            <p>Empirical studies across diverse sectors suggest that resilient organizations share several key attributes: redundancy in critical systems, diversity in thought and capability, loose coupling between operational units, and strong organizational learning mechanisms. These features enable what organizational theorists call "requisite variety"—internal complexity sufficient to match external complexity. When properly calibrated, this variety allows organizations to maintain stability in core functions while simultaneously exploring new possibilities and configurations.</p>
            <p>Recent research has also highlighted the paradoxical nature of resilience. The very qualities that promote stability under normal conditions may undermine adaptability during radical change. For instance, standardized procedures that enhance efficiency during routine operations can become liabilities when unprecedented challenges emerge. Consequently, truly resilient organizations must balance contradictory capabilities—exploitation versus exploration, centralization versus decentralization, and planning versus improvisation. This delicate equilibrium requires sophisticated governance mechanisms and leadership approaches that accommodate seemingly incompatible organizational logics.</p>
            <p>Critics argue that the concept of resilience has become problematically elastic, potentially serving as a rhetorical device that transfers responsibility for managing systemic risks from institutions to individuals. From this perspective, exhortations to develop resilience may inadvertently normalize precarity rather than addressing its structural causes. This critique has particular relevance in contexts where resource constraints limit organizational capacity to implement comprehensive resilience programs. Nevertheless, proponents maintain that when properly conceptualized and implemented, resilience initiatives can generate substantial value, not only in crisis situations but also in everyday operations.</p>
        `,
        question: "Critics of resilience concepts argue that they can",
        options: [
            "Cost too much to implement effectively",
            "Create excessive organizational complexity",
            "Shift responsibility for systemic risks inappropriately",
            "Overlook the importance of leadership development",
            "Overemphasize environmental sensing mechanisms"
        ],
        answer: "Shift responsibility for systemic risks inappropriately",
        explanation: "The passage states that critics argue resilience concepts can become 'a rhetorical device that transfers responsibility for managing systemic risks from institutions to individuals.' This directly aligns with option C."
    },
    {
        id: 'r8q1',
        type: 'reading',
        passage: `
            <p>The evolution of cryptocurrency from a niche technological curiosity to a significant element of the global financial landscape represents one of the most remarkable economic developments of the early twenty-first century. When Bitcoin emerged in 2009 in the wake of the global financial crisis, few anticipated its trajectory. The technology underlying Bitcoin—blockchain—introduced a novel approach to establishing trust and facilitating transactions without reliance on traditional intermediaries such as banks or payment processors. This technological innovation coincided with growing skepticism toward conventional financial institutions, creating fertile conditions for alternative monetary systems.</p>
            <p>As the cryptocurrency ecosystem has matured, it has fragmented into distinct segments with varying objectives. Bitcoin has increasingly been positioned as "digital gold"—a store of value rather than primarily a medium of exchange. Meanwhile, alternative cryptocurrencies have proliferated, many claiming technical advantages over Bitcoin in transaction throughput, energy efficiency, or programmability. Perhaps most significantly, blockchain technology has expanded beyond simple value transfer to enable "smart contracts"—self-executing agreements with terms directly written into code. This capability has facilitated the development of decentralized finance (DeFi) applications that replicate traditional financial services such as lending, borrowing, and trading without centralized control.</p>
            <p>The integration of cryptocurrencies into the broader financial system has progressed unevenly across jurisdictions, reflecting divergent regulatory approaches. Some nations have embraced cryptocurrencies, establishing comprehensive frameworks designed to foster innovation while mitigating risks. Others have adopted restrictive or prohibitive stances, citing concerns about financial stability, consumer protection, monetary sovereignty, and illicit finance. This regulatory heterogeneity has created a complex global landscape where cryptocurrency operations increasingly gravitate toward accommodating jurisdictions—a phenomenon some observers characterize as regulatory arbitrage.</p>
            <p>Institutional participation in cryptocurrency markets has accelerated substantially since 2020, catalyzed by several factors. Macroeconomic conditions—particularly unprecedented monetary expansion by central banks—intensified interest in purportedly inflation-resistant assets. Simultaneously, improved market infrastructure, including regulated custody solutions and derivatives markets, reduced barriers to institutional involvement. Major financial institutions that previously dismissed cryptocurrencies began offering related services, while publicly traded corporations added Bitcoin to their treasury reserves. This institutional adoption has contributed to greater market liquidity and reduced volatility relative to historical patterns, though cryptocurrency markets remain significantly more volatile than traditional asset classes.</p>
            <p>Environmental concerns have emerged as a substantial challenge to cryptocurrency adoption, particularly for networks utilizing proof-of-work consensus mechanisms that require enormous computational resources. Bitcoin's energy consumption has attracted especial scrutiny, with critics arguing that its electricity usage is disproportionate to its social utility. Proponents counter that assessments should consider the energy sources powering cryptocurrency mining and compare Bitcoin's energy profile to that of the conventional financial system it potentially replaces. This debate has accelerated industry transition toward alternative consensus mechanisms with reduced environmental impact, most notably proof-of-stake systems that secure network operations through economic incentives rather than computational work.</p>
        `,
        question: "The passage suggests that Bitcoin's emergence was facilitated by",
        options: [
            "Government monetary policies",
            "Institutional investment strategies",
            "Distrust of traditional financial institutions following the global financial crisis",
            "Early regulatory support from major economies",
            "Advanced blockchain technologies"
        ],
        answer: "Distrust of traditional financial institutions following the global financial crisis",
        explanation: "The passage explicitly states that Bitcoin 'emerged in 2009 in the wake of the global financial crisis' and that the technology 'coincided with growing skepticism toward conventional financial institutions, creating fertile conditions for alternative monetary systems'."
    },
    {
        id: 'r8q2',
        type: 'reading',
        passage: `
            <p>The evolution of cryptocurrency from a niche technological curiosity to a significant element of the global financial landscape represents one of the most remarkable economic developments of the early twenty-first century. When Bitcoin emerged in 2009 in the wake of the global financial crisis, few anticipated its trajectory. The technology underlying Bitcoin—blockchain—introduced a novel approach to establishing trust and facilitating transactions without reliance on traditional intermediaries such as banks or payment processors. This technological innovation coincided with growing skepticism toward conventional financial institutions, creating fertile conditions for alternative monetary systems.</p>
            <p>As the cryptocurrency ecosystem has matured, it has fragmented into distinct segments with varying objectives. Bitcoin has increasingly been positioned as "digital gold"—a store of value rather than primarily a medium of exchange. Meanwhile, alternative cryptocurrencies have proliferated, many claiming technical advantages over Bitcoin in transaction throughput, energy efficiency, or programmability. Perhaps most significantly, blockchain technology has expanded beyond simple value transfer to enable "smart contracts"—self-executing agreements with terms directly written into code. This capability has facilitated the development of decentralized finance (DeFi) applications that replicate traditional financial services such as lending, borrowing, and trading without centralized control.</p>
            <p>The integration of cryptocurrencies into the broader financial system has progressed unevenly across jurisdictions, reflecting divergent regulatory approaches. Some nations have embraced cryptocurrencies, establishing comprehensive frameworks designed to foster innovation while mitigating risks. Others have adopted restrictive or prohibitive stances, citing concerns about financial stability, consumer protection, monetary sovereignty, and illicit finance. This regulatory heterogeneity has created a complex global landscape where cryptocurrency operations increasingly gravitate toward accommodating jurisdictions—a phenomenon some observers characterize as regulatory arbitrage.</p>
            <p>Institutional participation in cryptocurrency markets has accelerated substantially since 2020, catalyzed by several factors. Macroeconomic conditions—particularly unprecedented monetary expansion by central banks—intensified interest in purportedly inflation-resistant assets. Simultaneously, improved market infrastructure, including regulated custody solutions and derivatives markets, reduced barriers to institutional involvement. Major financial institutions that previously dismissed cryptocurrencies began offering related services, while publicly traded corporations added Bitcoin to their treasury reserves. This institutional adoption has contributed to greater market liquidity and reduced volatility relative to historical patterns, though cryptocurrency markets remain significantly more volatile than traditional asset classes.</p>
            <p>Environmental concerns have emerged as a substantial challenge to cryptocurrency adoption, particularly for networks utilizing proof-of-work consensus mechanisms that require enormous computational resources. Bitcoin's energy consumption has attracted especial scrutiny, with critics arguing that its electricity usage is disproportionate to its social utility. Proponents counter that assessments should consider the energy sources powering cryptocurrency mining and compare Bitcoin's energy profile to that of the conventional financial system it potentially replaces. This debate has accelerated industry transition toward alternative consensus mechanisms with reduced environmental impact, most notably proof-of-stake systems that secure network operations through economic incentives rather than computational work.</p>
        `,
        question: "According to the passage, what distinguishes 'smart contracts' from basic cryptocurrency transactions?",
        options: [
            "They operate with governmental oversight",
            "They execute agreement terms automatically through code",
            "They require traditional financial intermediaries",
            "They utilize proof-of-stake consensus mechanisms",
            "They focus primarily on store-of-value functions"
        ],
        answer: "They execute agreement terms automatically through code",
        explanation: "The text defines smart contracts as 'self-executing agreements with terms directly written into code,' which precisely matches option B."
    },
    {
        id: 'r8q3',
        type: 'reading',
        passage: `
            <p>The evolution of cryptocurrency from a niche technological curiosity to a significant element of the global financial landscape represents one of the most remarkable economic developments of the early twenty-first century. When Bitcoin emerged in 2009 in the wake of the global financial crisis, few anticipated its trajectory. The technology underlying Bitcoin—blockchain—introduced a novel approach to establishing trust and facilitating transactions without reliance on traditional intermediaries such as banks or payment processors. This technological innovation coincided with growing skepticism toward conventional financial institutions, creating fertile conditions for alternative monetary systems.</p>
            <p>As the cryptocurrency ecosystem has matured, it has fragmented into distinct segments with varying objectives. Bitcoin has increasingly been positioned as "digital gold"—a store of value rather than primarily a medium of exchange. Meanwhile, alternative cryptocurrencies have proliferated, many claiming technical advantages over Bitcoin in transaction throughput, energy efficiency, or programmability. Perhaps most significantly, blockchain technology has expanded beyond simple value transfer to enable "smart contracts"—self-executing agreements with terms directly written into code. This capability has facilitated the development of decentralized finance (DeFi) applications that replicate traditional financial services such as lending, borrowing, and trading without centralized control.</p>
            <p>The integration of cryptocurrencies into the broader financial system has progressed unevenly across jurisdictions, reflecting divergent regulatory approaches. Some nations have embraced cryptocurrencies, establishing comprehensive frameworks designed to foster innovation while mitigating risks. Others have adopted restrictive or prohibitive stances, citing concerns about financial stability, consumer protection, monetary sovereignty, and illicit finance. This regulatory heterogeneity has created a complex global landscape where cryptocurrency operations increasingly gravitate toward accommodating jurisdictions—a phenomenon some observers characterize as regulatory arbitrage.</p>
            <p>Institutional participation in cryptocurrency markets has accelerated substantially since 2020, catalyzed by several factors. Macroeconomic conditions—particularly unprecedented monetary expansion by central banks—intensified interest in purportedly inflation-resistant assets. Simultaneously, improved market infrastructure, including regulated custody solutions and derivatives markets, reduced barriers to institutional involvement. Major financial institutions that previously dismissed cryptocurrencies began offering related services, while publicly traded corporations added Bitcoin to their treasury reserves. This institutional adoption has contributed to greater market liquidity and reduced volatility relative to historical patterns, though cryptocurrency markets remain significantly more volatile than traditional asset classes.</p>
            <p>Environmental concerns have emerged as a substantial challenge to cryptocurrency adoption, particularly for networks utilizing proof-of-work consensus mechanisms that require enormous computational resources. Bitcoin's energy consumption has attracted especial scrutiny, with critics arguing that its electricity usage is disproportionate to its social utility. Proponents counter that assessments should consider the energy sources powering cryptocurrency mining and compare Bitcoin's energy profile to that of the conventional financial system it potentially replaces. This debate has accelerated industry transition toward alternative consensus mechanisms with reduced environmental impact, most notably proof-of-stake systems that secure network operations through economic incentives rather than computational work.</p>
        `,
        question: "The author uses the term 'regulatory arbitrage' to describe",
        options: [
            "The coordination of cryptocurrency regulations across different countries",
            "Legal disputes between cryptocurrency companies and regulators",
            "The tendency of cryptocurrency operations to relocate to jurisdictions with favorable regulations",
            "The process of applying traditional financial regulations to cryptocurrencies",
            "The arbitration mechanism used to resolve conflicts in smart contracts"
        ],
        answer: "The tendency of cryptocurrency operations to relocate to jurisdictions with favorable regulations",
        explanation: "The passage explains that 'regulatory heterogeneity has created a complex global landscape where cryptocurrency operations increasingly gravitate toward accommodating jurisdictions—a phenomenon some observers characterize as regulatory arbitrage'."
    },
    {
        id: 'r8q4',
        type: 'reading',
        passage: `
            <p>The evolution of cryptocurrency from a niche technological curiosity to a significant element of the global financial landscape represents one of the most remarkable economic developments of the early twenty-first century. When Bitcoin emerged in 2009 in the wake of the global financial crisis, few anticipated its trajectory. The technology underlying Bitcoin—blockchain—introduced a novel approach to establishing trust and facilitating transactions without reliance on traditional intermediaries such as banks or payment processors. This technological innovation coincided with growing skepticism toward conventional financial institutions, creating fertile conditions for alternative monetary systems.</p>
            <p>As the cryptocurrency ecosystem has matured, it has fragmented into distinct segments with varying objectives. Bitcoin has increasingly been positioned as "digital gold"—a store of value rather than primarily a medium of exchange. Meanwhile, alternative cryptocurrencies have proliferated, many claiming technical advantages over Bitcoin in transaction throughput, energy efficiency, or programmability. Perhaps most significantly, blockchain technology has expanded beyond simple value transfer to enable "smart contracts"—self-executing agreements with terms directly written into code. This capability has facilitated the development of decentralized finance (DeFi) applications that replicate traditional financial services such as lending, borrowing, and trading without centralized control.</p>
            <p>The integration of cryptocurrencies into the broader financial system has progressed unevenly across jurisdictions, reflecting divergent regulatory approaches. Some nations have embraced cryptocurrencies, establishing comprehensive frameworks designed to foster innovation while mitigating risks. Others have adopted restrictive or prohibitive stances, citing concerns about financial stability, consumer protection, monetary sovereignty, and illicit finance. This regulatory heterogeneity has created a complex global landscape where cryptocurrency operations increasingly gravitate toward accommodating jurisdictions—a phenomenon some observers characterize as regulatory arbitrage.</p>
            <p>Institutional participation in cryptocurrency markets has accelerated substantially since 2020, catalyzed by several factors. Macroeconomic conditions—particularly unprecedented monetary expansion by central banks—intensified interest in purportedly inflation-resistant assets. Simultaneously, improved market infrastructure, including regulated custody solutions and derivatives markets, reduced barriers to institutional involvement. Major financial institutions that previously dismissed cryptocurrencies began offering related services, while publicly traded corporations added Bitcoin to their treasury reserves. This institutional adoption has contributed to greater market liquidity and reduced volatility relative to historical patterns, though cryptocurrency markets remain significantly more volatile than traditional asset classes.</p>
            <p>Environmental concerns have emerged as a substantial challenge to cryptocurrency adoption, particularly for networks utilizing proof-of-work consensus mechanisms that require enormous computational resources. Bitcoin's energy consumption has attracted especial scrutiny, with critics arguing that its electricity usage is disproportionate to its social utility. Proponents counter that assessments should consider the energy sources powering cryptocurrency mining and compare Bitcoin's energy profile to that of the conventional financial system it potentially replaces. This debate has accelerated industry transition toward alternative consensus mechanisms with reduced environmental impact, most notably proof-of-stake systems that secure network operations through economic incentives rather than computational work.</p>
        `,
        question: "Which statement best reflects the passage's characterization of institutional participation in cryptocurrency markets since 2020",
        options: [
            "It has primarily occurred in nations with progressive regulatory frameworks",
            "It has been driven mainly by environmental considerations",
            "It has remained constrained by inadequate market infrastructure",
            "It has accelerated due to macroeconomic conditions and improved market infrastructure",
            "It has focused exclusively on Bitcoin rather than alternative cryptocurrencies"
        ],
        answer: "It has accelerated due to macroeconomic conditions and improved market infrastructure",
        explanation: "Paragraph 4 states that 'Institutional participation in cryptocurrency markets has accelerated substantially since 2020, catalyzed by several factors. Macroeconomic conditions—particularly unprecedented monetary expansion by central banks—intensified interest in purportedly inflation-resistant assets. Simultaneously, improved market infrastructure, including regulated custody solutions and derivatives markets, reduced barriers to institutional involvement.'"
    },
    {
        id: 'r8q5',
        type: 'reading',
        passage: `
            <p>The evolution of cryptocurrency from a niche technological curiosity to a significant element of the global financial landscape represents one of the most remarkable economic developments of the early twenty-first century. When Bitcoin emerged in 2009 in the wake of the global financial crisis, few anticipated its trajectory. The technology underlying Bitcoin—blockchain—introduced a novel approach to establishing trust and facilitating transactions without reliance on traditional intermediaries such as banks or payment processors. This technological innovation coincided with growing skepticism toward conventional financial institutions, creating fertile conditions for alternative monetary systems.</p>
            <p>As the cryptocurrency ecosystem has matured, it has fragmented into distinct segments with varying objectives. Bitcoin has increasingly been positioned as "digital gold"—a store of value rather than primarily a medium of exchange. Meanwhile, alternative cryptocurrencies have proliferated, many claiming technical advantages over Bitcoin in transaction throughput, energy efficiency, or programmability. Perhaps most significantly, blockchain technology has expanded beyond simple value transfer to enable "smart contracts"—self-executing agreements with terms directly written into code. This capability has facilitated the development of decentralized finance (DeFi) applications that replicate traditional financial services such as lending, borrowing, and trading without centralized control.</p>
            <p>The integration of cryptocurrencies into the broader financial system has progressed unevenly across jurisdictions, reflecting divergent regulatory approaches. Some nations have embraced cryptocurrencies, establishing comprehensive frameworks designed to foster innovation while mitigating risks. Others have adopted restrictive or prohibitive stances, citing concerns about financial stability, consumer protection, monetary sovereignty, and illicit finance. This regulatory heterogeneity has created a complex global landscape where cryptocurrency operations increasingly gravitate toward accommodating jurisdictions—a phenomenon some observers characterize as regulatory arbitrage.</p>
            <p>Institutional participation in cryptocurrency markets has accelerated substantially since 2020, catalyzed by several factors. Macroeconomic conditions—particularly unprecedented monetary expansion by central banks—intensified interest in purportedly inflation-resistant assets. Simultaneously, improved market infrastructure, including regulated custody solutions and derivatives markets, reduced barriers to institutional involvement. Major financial institutions that previously dismissed cryptocurrencies began offering related services, while publicly traded corporations added Bitcoin to their treasury reserves. This institutional adoption has contributed to greater market liquidity and reduced volatility relative to historical patterns, though cryptocurrency markets remain significantly more volatile than traditional asset classes.</p>
            <p>Environmental concerns have emerged as a substantial challenge to cryptocurrency adoption, particularly for networks utilizing proof-of-work consensus mechanisms that require enormous computational resources. Bitcoin's energy consumption has attracted especial scrutiny, with critics arguing that its electricity usage is disproportionate to its social utility. Proponents counter that assessments should consider the energy sources powering cryptocurrency mining and compare Bitcoin's energy profile to that of the conventional financial system it potentially replaces. This debate has accelerated industry transition toward alternative consensus mechanisms with reduced environmental impact, most notably proof-of-stake systems that secure network operations through economic incentives rather than computational work.</p>
        `,
        question: "The environmental debate surrounding cryptocurrencies primarily centers on",
        options: [
            "The carbon offset policies of major cryptocurrency companies",
            "The energy consumption of proof-of-work consensus mechanisms",
            "Regulatory approaches to sustainable mining operations",
            "Comparison between cryptocurrency and traditional banking data centers",
            "The environmental impact of manufacturing specialized mining hardware"
        ],
        answer: "The energy consumption of proof-of-work consensus mechanisms",
        explanation: "The final paragraph focuses on environmental concerns, specifically mentioning 'networks utilizing proof-of-work consensus mechanisms that require enormous computational resources' and notes that 'Bitcoin's energy consumption has attracted especial scrutiny.'"
    },
    {
        id: 'r9q1',
        type: 'reading',
        passage: `
            <p>The implementation of cognitive enhancements in educational contexts presents an intricate convergence of philosophical, ethical, and pragmatic challenges. Cognitive enhancement technologies—encompassing pharmacological interventions, neurostimulation techniques, and increasingly sophisticated brain-computer interfaces—offer unprecedented potential to augment human cognitive capabilities. Within educational settings, these technologies raise fundamental questions about the nature and objectives of education itself. If education aims primarily to transmit knowledge and develop intellectual capacities, cognitive enhancements might be viewed as legitimate accelerants to these processes. Conversely, if education is conceptualized as cultivation of holistic human development through effort and struggle, technological shortcuts may undermine its essential character.</p>
            <p>Contemporary discourse on cognitive enhancement in education frequently invokes principles of distributive justice. If enhancement technologies provide significant cognitive advantages, equitable access becomes paramount to prevent exacerbation of existing socioeconomic disparities in educational outcomes. Yet ensuring equitable distribution presents formidable challenges. Market-based allocation would inevitably favor privileged populations, while public provision would require substantial resource commitments amid competing priorities. Furthermore, the potential emergence of "cognitive arms races" could transform enhancements from optional advantages to de facto requirements for competitive success, fundamentally altering the educational landscape.</p>
            <p>Authenticity concerns figure prominently in philosophical analyses of cognitive enhancement. Critics argue that technologically facilitated cognitive performance compromises authentic achievement and potentially undermines the development of character virtues traditionally associated with intellectual accomplishment. When educators evaluate student performance, they typically assess both outcomes and the processes through which those outcomes were achieved. Enhancement technologies potentially disrupt this evaluative framework by altering the relationship between effort, ability, and achievement. The question of whether enhanced performance "belongs" to the individual becomes increasingly complex as the enhancement's contribution grows more substantial.</p>
            <p>Emerging empirical evidence suggests that existing cognitive enhancement methods deliver more modest benefits than popular discourse might suggest, with effects that vary significantly across individuals and cognitive domains. Pharmacological agents such as methylphenidate demonstrate modest effects on specific attention-related tasks but may simultaneously impair performance in other cognitive domains. Transcranial electrical stimulation techniques show promise for enhancing particular learning processes but produce inconsistent outcomes across different individuals and applications. These variable effects complicate utilitarian calculations regarding enhancement implementation, as benefits may be highly context-dependent and unpredictable at the individual level.</p>
            <p>The increasing sophistication of artificial intelligence systems raises additional questions about the relationship between human cognitive enhancement and technological augmentation. As AI systems increasingly perform cognitive tasks previously requiring human intelligence, the educational emphasis may shift from knowledge acquisition to uniquely human capabilities such as critical thinking, creative synthesis, and ethical judgment. This transition would necessitate reconceptualizing cognitive enhancement not as amplification of computational capacities but as augmentation of distinctively human cognitive strengths that complement rather than compete with artificial intelligence capabilities.</p>
        `,
        question: "The passage suggests that cognitive enhancement technologies in educational settings primarily raise questions about",
        options: [
            "Their cost-effectiveness compared to traditional educational methods",
            "The fundamental nature and objectives of education",
            "Their scientific validity and empirical support",
            "The technological literacy of educational administrators",
            "The legal liability associated with their implementation"
        ],
        answer: "The fundamental nature and objectives of education",
        explanation: "The first paragraph states that cognitive enhancement technologies 'raise fundamental questions about the nature and objectives of education itself' and then elaborates on different conceptualizations of education's purpose."
    },
    {
        id: 'r9q2',
        type: 'reading',
        passage: `
            <p>The implementation of cognitive enhancements in educational contexts presents an intricate convergence of philosophical, ethical, and pragmatic challenges. Cognitive enhancement technologies—encompassing pharmacological interventions, neurostimulation techniques, and increasingly sophisticated brain-computer interfaces—offer unprecedented potential to augment human cognitive capabilities. Within educational settings, these technologies raise fundamental questions about the nature and objectives of education itself. If education aims primarily to transmit knowledge and develop intellectual capacities, cognitive enhancements might be viewed as legitimate accelerants to these processes. Conversely, if education is conceptualized as cultivation of holistic human development through effort and struggle, technological shortcuts may undermine its essential character.</p>
            <p>Contemporary discourse on cognitive enhancement in education frequently invokes principles of distributive justice. If enhancement technologies provide significant cognitive advantages, equitable access becomes paramount to prevent exacerbation of existing socioeconomic disparities in educational outcomes. Yet ensuring equitable distribution presents formidable challenges. Market-based allocation would inevitably favor privileged populations, while public provision would require substantial resource commitments amid competing priorities. Furthermore, the potential emergence of "cognitive arms races" could transform enhancements from optional advantages to de facto requirements for competitive success, fundamentally altering the educational landscape.</p>
            <p>Authenticity concerns figure prominently in philosophical analyses of cognitive enhancement. Critics argue that technologically facilitated cognitive performance compromises authentic achievement and potentially undermines the development of character virtues traditionally associated with intellectual accomplishment. When educators evaluate student performance, they typically assess both outcomes and the processes through which those outcomes were achieved. Enhancement technologies potentially disrupt this evaluative framework by altering the relationship between effort, ability, and achievement. The question of whether enhanced performance "belongs" to the individual becomes increasingly complex as the enhancement's contribution grows more substantial.</p>
            <p>Emerging empirical evidence suggests that existing cognitive enhancement methods deliver more modest benefits than popular discourse might suggest, with effects that vary significantly across individuals and cognitive domains. Pharmacological agents such as methylphenidate demonstrate modest effects on specific attention-related tasks but may simultaneously impair performance in other cognitive domains. Transcranial electrical stimulation techniques show promise for enhancing particular learning processes but produce inconsistent outcomes across different individuals and applications. These variable effects complicate utilitarian calculations regarding enhancement implementation, as benefits may be highly context-dependent and unpredictable at the individual level.</p>
            <p>The increasing sophistication of artificial intelligence systems raises additional questions about the relationship between human cognitive enhancement and technological augmentation. As AI systems increasingly perform cognitive tasks previously requiring human intelligence, the educational emphasis may shift from knowledge acquisition to uniquely human capabilities such as critical thinking, creative synthesis, and ethical judgment. This transition would necessitate reconceptualizing cognitive enhancement not as amplification of computational capacities but as augmentation of distinctively human cognitive strengths that complement rather than compete with artificial intelligence capabilities.</p>
        `,
        question: "According to the passage, a 'cognitive arms race' in education would most likely result in",
        options: [
            "Greater collaboration among students from diverse backgrounds",
            "Enhanced cognitive technologies becoming necessities rather than options",
            "Reduced emphasis on standardized testing metrics",
            "Increased public funding for educational institutions",
            "More equitable educational outcomes across socioeconomic groups"
        ],
        answer: "Enhanced cognitive technologies becoming necessities rather than options",
        explanation: "The passage discusses how 'cognitive arms races' could 'transform enhancements from optional advantages to de facto requirements for competitive success,' which directly corresponds to option B."
    },
    {
        id: 'r9q3',
        type: 'reading',
        passage: `
            <p>The implementation of cognitive enhancements in educational contexts presents an intricate convergence of philosophical, ethical, and pragmatic challenges. Cognitive enhancement technologies—encompassing pharmacological interventions, neurostimulation techniques, and increasingly sophisticated brain-computer interfaces—offer unprecedented potential to augment human cognitive capabilities. Within educational settings, these technologies raise fundamental questions about the nature and objectives of education itself. If education aims primarily to transmit knowledge and develop intellectual capacities, cognitive enhancements might be viewed as legitimate accelerants to these processes. Conversely, if education is conceptualized as cultivation of holistic human development through effort and struggle, technological shortcuts may undermine its essential character.</p>
            <p>Contemporary discourse on cognitive enhancement in education frequently invokes principles of distributive justice. If enhancement technologies provide significant cognitive advantages, equitable access becomes paramount to prevent exacerbation of existing socioeconomic disparities in educational outcomes. Yet ensuring equitable distribution presents formidable challenges. Market-based allocation would inevitably favor privileged populations, while public provision would require substantial resource commitments amid competing priorities. Furthermore, the potential emergence of "cognitive arms races" could transform enhancements from optional advantages to de facto requirements for competitive success, fundamentally altering the educational landscape.</p>
            <p>Authenticity concerns figure prominently in philosophical analyses of cognitive enhancement. Critics argue that technologically facilitated cognitive performance compromises authentic achievement and potentially undermines the development of character virtues traditionally associated with intellectual accomplishment. When educators evaluate student performance, they typically assess both outcomes and the processes through which those outcomes were achieved. Enhancement technologies potentially disrupt this evaluative framework by altering the relationship between effort, ability, and achievement. The question of whether enhanced performance "belongs" to the individual becomes increasingly complex as the enhancement's contribution grows more substantial.</p>
            <p>Emerging empirical evidence suggests that existing cognitive enhancement methods deliver more modest benefits than popular discourse might suggest, with effects that vary significantly across individuals and cognitive domains. Pharmacological agents such as methylphenidate demonstrate modest effects on specific attention-related tasks but may simultaneously impair performance in other cognitive domains. Transcranial electrical stimulation techniques show promise for enhancing particular learning processes but produce inconsistent outcomes across different individuals and applications. These variable effects complicate utilitarian calculations regarding enhancement implementation, as benefits may be highly context-dependent and unpredictable at the individual level.</p>
            <p>The increasing sophistication of artificial intelligence systems raises additional questions about the relationship between human cognitive enhancement and technological augmentation. As AI systems increasingly perform cognitive tasks previously requiring human intelligence, the educational emphasis may shift from knowledge acquisition to uniquely human capabilities such as critical thinking, creative synthesis, and ethical judgment. This transition would necessitate reconceptualizing cognitive enhancement not as amplification of computational capacities but as augmentation of distinctively human cognitive strengths that complement rather than compete with artificial intelligence capabilities.</p>
        `,
        question: "The authenticity concerns described in the passage primarily relate to",
        options: [
            "Questions about whether enhanced performance truly belongs to the individual",
            "The potential for students to develop technological addiction",
            "Difficulties in verifying the identity of test-takers",
            "Ethical issues surrounding informed consent",
            "Problems with maintaining academic integrity in digital environments"
        ],
        answer: "Questions about whether enhanced performance truly belongs to the individual",
        explanation: "The passage states 'The question of whether enhanced performance 'belongs' to the individual becomes increasingly complex as the enhancement's contribution grows more substantial,' which directly aligns with option A."
    },
    {
        id: 'r9q4',
        type: 'reading',
        passage: `
            <p>The implementation of cognitive enhancements in educational contexts presents an intricate convergence of philosophical, ethical, and pragmatic challenges. Cognitive enhancement technologies—encompassing pharmacological interventions, neurostimulation techniques, and increasingly sophisticated brain-computer interfaces—offer unprecedented potential to augment human cognitive capabilities. Within educational settings, these technologies raise fundamental questions about the nature and objectives of education itself. If education aims primarily to transmit knowledge and develop intellectual capacities, cognitive enhancements might be viewed as legitimate accelerants to these processes. Conversely, if education is conceptualized as cultivation of holistic human development through effort and struggle, technological shortcuts may undermine its essential character.</p>
            <p>Contemporary discourse on cognitive enhancement in education frequently invokes principles of distributive justice. If enhancement technologies provide significant cognitive advantages, equitable access becomes paramount to prevent exacerbation of existing socioeconomic disparities in educational outcomes. Yet ensuring equitable distribution presents formidable challenges. Market-based allocation would inevitably favor privileged populations, while public provision would require substantial resource commitments amid competing priorities. Furthermore, the potential emergence of "cognitive arms races" could transform enhancements from optional advantages to de facto requirements for competitive success, fundamentally altering the educational landscape.</p>
            <p>Authenticity concerns figure prominently in philosophical analyses of cognitive enhancement. Critics argue that technologically facilitated cognitive performance compromises authentic achievement and potentially undermines the development of character virtues traditionally associated with intellectual accomplishment. When educators evaluate student performance, they typically assess both outcomes and the processes through which those outcomes were achieved. Enhancement technologies potentially disrupt this evaluative framework by altering the relationship between effort, ability, and achievement. The question of whether enhanced performance "belongs" to the individual becomes increasingly complex as the enhancement's contribution grows more substantial.</p>
            <p>Emerging empirical evidence suggests that existing cognitive enhancement methods deliver more modest benefits than popular discourse might suggest, with effects that vary significantly across individuals and cognitive domains. Pharmacological agents such as methylphenidate demonstrate modest effects on specific attention-related tasks but may simultaneously impair performance in other cognitive domains. Transcranial electrical stimulation techniques show promise for enhancing particular learning processes but produce inconsistent outcomes across different individuals and applications. These variable effects complicate utilitarian calculations regarding enhancement implementation, as benefits may be highly context-dependent and unpredictable at the individual level.</p>
            <p>The increasing sophistication of artificial intelligence systems raises additional questions about the relationship between human cognitive enhancement and technological augmentation. As AI systems increasingly perform cognitive tasks previously requiring human intelligence, the educational emphasis may shift from knowledge acquisition to uniquely human capabilities such as critical thinking, creative synthesis, and ethical judgment. This transition would necessitate reconceptualizing cognitive enhancement not as amplification of computational capacities but as augmentation of distinctively human cognitive strengths that complement rather than compete with artificial intelligence capabilities.</p>
        `,
        question: "Based on the passage, which statement most accurately reflects current empirical evidence regarding cognitive enhancement methods",
        options: [
            "They consistently produce significant benefits across all cognitive domains",
            "They deliver generally modest benefits that vary across individuals and cognitive domains",
            "They primarily benefit students with learning disabilities",
            "They are equally effective regardless of the specific technology employed",
            "They have been conclusively proven ineffective in educational settings"
        ],
        answer: "They deliver generally modest benefits that vary across individuals and cognitive domains",
        explanation: "The fourth paragraph begins by stating 'Emerging empirical evidence suggests that existing cognitive enhancement methods deliver more modest benefits than popular discourse might suggest, with effects that vary significantly across individuals and cognitive domains.'"
    },
    {
        id: 'r9q5',
        type: 'reading',
        passage: `
            <p>The implementation of cognitive enhancements in educational contexts presents an intricate convergence of philosophical, ethical, and pragmatic challenges. Cognitive enhancement technologies—encompassing pharmacological interventions, neurostimulation techniques, and increasingly sophisticated brain-computer interfaces—offer unprecedented potential to augment human cognitive capabilities. Within educational settings, these technologies raise fundamental questions about the nature and objectives of education itself. If education aims primarily to transmit knowledge and develop intellectual capacities, cognitive enhancements might be viewed as legitimate accelerants to these processes. Conversely, if education is conceptualized as cultivation of holistic human development through effort and struggle, technological shortcuts may undermine its essential character.</p>
            <p>Contemporary discourse on cognitive enhancement in education frequently invokes principles of distributive justice. If enhancement technologies provide significant cognitive advantages, equitable access becomes paramount to prevent exacerbation of existing socioeconomic disparities in educational outcomes. Yet ensuring equitable distribution presents formidable challenges. Market-based allocation would inevitably favor privileged populations, while public provision would require substantial resource commitments amid competing priorities. Furthermore, the potential emergence of "cognitive arms races" could transform enhancements from optional advantages to de facto requirements for competitive success, fundamentally altering the educational landscape.</p>
            <p>Authenticity concerns figure prominently in philosophical analyses of cognitive enhancement. Critics argue that technologically facilitated cognitive performance compromises authentic achievement and potentially undermines the development of character virtues traditionally associated with intellectual accomplishment. When educators evaluate student performance, they typically assess both outcomes and the processes through which those outcomes were achieved. Enhancement technologies potentially disrupt this evaluative framework by altering the relationship between effort, ability, and achievement. The question of whether enhanced performance "belongs" to the individual becomes increasingly complex as the enhancement's contribution grows more substantial.</p>
            <p>Emerging empirical evidence suggests that existing cognitive enhancement methods deliver more modest benefits than popular discourse might suggest, with effects that vary significantly across individuals and cognitive domains. Pharmacological agents such as methylphenidate demonstrate modest effects on specific attention-related tasks but may simultaneously impair performance in other cognitive domains. Transcranial electrical stimulation techniques show promise for enhancing particular learning processes but produce inconsistent outcomes across different individuals and applications. These variable effects complicate utilitarian calculations regarding enhancement implementation, as benefits may be highly context-dependent and unpredictable at the individual level.</p>
            <p>The increasing sophistication of artificial intelligence systems raises additional questions about the relationship between human cognitive enhancement and technological augmentation. As AI systems increasingly perform cognitive tasks previously requiring human intelligence, the educational emphasis may shift from knowledge acquisition to uniquely human capabilities such as critical thinking, creative synthesis, and ethical judgment. This transition would necessitate reconceptualizing cognitive enhancement not as amplification of computational capacities but as augmentation of distinctively human cognitive strengths that complement rather than compete with artificial intelligence capabilities.</p>
        `,
        question: "The passage suggests that the relationship between artificial intelligence and human cognitive enhancement might ultimately",
        options: [
            "Make human cognitive enhancement obsolete",
            "Shift educational emphasis toward uniquely human capabilities",
            "Eliminate the need for traditional educational institutions",
            "Create insurmountable privacy concerns",
            "Resolve issues of distributive justice in education"
        ],
        answer: "Shift educational emphasis toward uniquely human capabilities",
        explanation: "The final paragraph suggests that as AI systems increasingly perform cognitive tasks, 'the educational emphasis may shift from knowledge acquisition to uniquely human capabilities such as critical thinking, creative synthesis, and ethical judgment,' which directly corresponds to option B."
    },
    {
        id: 'r10q1',
        type: 'reading',
        passage: `
            <p>Eusociality—a social organization characterized by cooperative brood care, overlapping adult generations, and division of labor—represents one of evolution's most remarkable achievements. While relatively rare across the animal kingdom, this social system has evolved independently multiple times among insects, most prominently in the order Hymenoptera (ants, bees, and wasps) and in termites. The convergent evolution of eusociality in these distinct lineages provides a compelling natural experiment for understanding the selective pressures and genetic mechanisms that facilitate extreme sociality. Particularly intriguing is how such advanced social structures could evolve given apparent reproductive costs to individuals, prompting theoretical frameworks like kin selection to explain the evolutionary persistence of seemingly altruistic behaviors.</p>
            <p>Eusocial insect colonies function effectively as superorganisms, with individuals operating as specialized components of a unified whole. The reproductive division of labor typically features one or a few fertile individuals—queens and, in some species, males (kings)—while the majority function as sterile workers performing tasks essential for colony maintenance. This specialization extends to remarkable morphological differentiation, with some species developing distinct physical castes optimized for specific functions: soldiers with enlarged mandibles for colony defense, minor workers specialized for brood care, and media workers for foraging. In the most advanced eusocial insects, particularly certain ant species, this specialization has evolved to extraordinary levels of complexity, with dozens of distinct behavioral and morphological castes within a single colony.</p>
            <p>Communication systems in eusocial insects demonstrate sophisticated mechanisms for coordinating collective action. Chemical signaling predominates, with pheromones mediating everything from foraging trail formation to queen recognition. For instance, when honeybee foragers discover rich food sources, they convey both distance and directional information through their waggle dance—a remarkable symbolic communication system. Similarly, when leaf-cutter ants encounter territory marked by rival colonies, alarm pheromones rapidly mobilize defensive responses throughout their elaborate underground networks. These communication systems enable colonies to respond to environmental challenges with coordinated precision that individual insects could never achieve, effectively distributing cognitive processes across the collective.</p>
            <p>Recent genomic analyses have revealed surprising insights into the molecular underpinnings of eusociality. Contrary to earlier predictions that novel genes would drive social evolution, research increasingly suggests that the genetic toolkit for eusociality largely involves the regulation and repurposing of conserved genes. Comparative genomics across independently evolved eusocial lineages demonstrates significant overlap in regulatory pathways involved in divisions of labor, particularly those associated with metabolic regulation, reproductive physiology, and brain function. Epigenetic mechanisms, especially DNA methylation, appear crucial in mediating plastic phenotypic responses, allowing genetically similar individuals to develop into dramatically different castes depending on environmental and nutritional cues during development.</p>
            <p>The ecological dominance achieved by eusocial insects stems from their capacity to effectively exploit environmental resources through collective action and division of labor. Constituting only 2% of known insect species, eusocial insects nonetheless comprise over 50% of global insect biomass in many terrestrial ecosystems. Ants alone represent 15-20% of terrestrial animal biomass, with certain habitats supporting densities exceeding 800 individual ants per square meter. This ecological success derives partly from their ability to construct complex nests that regulate internal temperature, humidity, and protection from predators. Leaf-cutter ants cultivate sophisticated fungal gardens, effectively practicing agriculture millions of years before humans. Honeybees maintain precise thermal regulation in their hives, enabling them to survive in diverse climates. These engineering capabilities, coupled with efficient resource acquisition strategies, allow eusocial insects to inhabit virtually every terrestrial ecosystem except the polar extremes.</p>
            <p>Climate change presents novel challenges to eusocial insect populations worldwide, with potentially cascading effects through ecosystems given their keystone roles. Rising temperatures affect colony development, phenology, and geographic distribution. For thermally sensitive species like bumblebees, whose queens require specific temperature ranges for successful hibernation, warming climates may contract suitable habitats. Conversely, invasive eusocial species like the fire ant (Solenopsis invicta) may expand their ranges poleward as climate constraints recede. Altered precipitation patterns also significantly impact soil-nesting species, affecting nest architecture and foraging capabilities. These disruptions carry significant implications for ecosystem services provided by eusocial insects, particularly pollination. Commercial agriculture increasingly depends on managed honeybee colonies, while wild eusocial pollinators support both natural plant communities and crops. Understanding how climate change influences these complex societies represents an urgent research priority for conservation biology and agricultural sustainability.</p>
        `,
        question: "What is eusociality primarily characterized by according to the passage?",
        options: [
            "Complex nest-building behaviors",
            "Genetic adaptation to environmental stress",
            "Cooperative brood care, overlapping generations, and division of labor",
            "Advanced communication through symbolic systems",
            "Agricultural practices and resource management"
        ],
        answer: "Cooperative brood care, overlapping generations, and division of labor",
        explanation: "The first sentence of the passage directly defines eusociality as 'a social organization characterized by cooperative brood care, overlapping adult generations, and division of labor.' This is the primary definition provided in the text."
    },
    {
        id: 'r10q2',
        type: 'reading',
        passage: `
            <p>Eusociality—a social organization characterized by cooperative brood care, overlapping adult generations, and division of labor—represents one of evolution's most remarkable achievements. While relatively rare across the animal kingdom, this social system has evolved independently multiple times among insects, most prominently in the order Hymenoptera (ants, bees, and wasps) and in termites. The convergent evolution of eusociality in these distinct lineages provides a compelling natural experiment for understanding the selective pressures and genetic mechanisms that facilitate extreme sociality. Particularly intriguing is how such advanced social structures could evolve given apparent reproductive costs to individuals, prompting theoretical frameworks like kin selection to explain the evolutionary persistence of seemingly altruistic behaviors.</p>
            <p>Eusocial insect colonies function effectively as superorganisms, with individuals operating as specialized components of a unified whole. The reproductive division of labor typically features one or a few fertile individuals—queens and, in some species, males (kings)—while the majority function as sterile workers performing tasks essential for colony maintenance. This specialization extends to remarkable morphological differentiation, with some species developing distinct physical castes optimized for specific functions: soldiers with enlarged mandibles for colony defense, minor workers specialized for brood care, and media workers for foraging. In the most advanced eusocial insects, particularly certain ant species, this specialization has evolved to extraordinary levels of complexity, with dozens of distinct behavioral and morphological castes within a single colony.</p>
            <p>Communication systems in eusocial insects demonstrate sophisticated mechanisms for coordinating collective action. Chemical signaling predominates, with pheromones mediating everything from foraging trail formation to queen recognition. For instance, when honeybee foragers discover rich food sources, they convey both distance and directional information through their waggle dance—a remarkable symbolic communication system. Similarly, when leaf-cutter ants encounter territory marked by rival colonies, alarm pheromones rapidly mobilize defensive responses throughout their elaborate underground networks. These communication systems enable colonies to respond to environmental challenges with coordinated precision that individual insects could never achieve, effectively distributing cognitive processes across the collective.</p>
            <p>Recent genomic analyses have revealed surprising insights into the molecular underpinnings of eusociality. Contrary to earlier predictions that novel genes would drive social evolution, research increasingly suggests that the genetic toolkit for eusociality largely involves the regulation and repurposing of conserved genes. Comparative genomics across independently evolved eusocial lineages demonstrates significant overlap in regulatory pathways involved in divisions of labor, particularly those associated with metabolic regulation, reproductive physiology, and brain function. Epigenetic mechanisms, especially DNA methylation, appear crucial in mediating plastic phenotypic responses, allowing genetically similar individuals to develop into dramatically different castes depending on environmental and nutritional cues during development.</p>
            <p>The ecological dominance achieved by eusocial insects stems from their capacity to effectively exploit environmental resources through collective action and division of labor. Constituting only 2% of known insect species, eusocial insects nonetheless comprise over 50% of global insect biomass in many terrestrial ecosystems. Ants alone represent 15-20% of terrestrial animal biomass, with certain habitats supporting densities exceeding 800 individual ants per square meter. This ecological success derives partly from their ability to construct complex nests that regulate internal temperature, humidity, and protection from predators. Leaf-cutter ants cultivate sophisticated fungal gardens, effectively practicing agriculture millions of years before humans. Honeybees maintain precise thermal regulation in their hives, enabling them to survive in diverse climates. These engineering capabilities, coupled with efficient resource acquisition strategies, allow eusocial insects to inhabit virtually every terrestrial ecosystem except the polar extremes.</p>
            <p>Climate change presents novel challenges to eusocial insect populations worldwide, with potentially cascading effects through ecosystems given their keystone roles. Rising temperatures affect colony development, phenology, and geographic distribution. For thermally sensitive species like bumblebees, whose queens require specific temperature ranges for successful hibernation, warming climates may contract suitable habitats. Conversely, invasive eusocial species like the fire ant (Solenopsis invicta) may expand their ranges poleward as climate constraints recede. Altered precipitation patterns also significantly impact soil-nesting species, affecting nest architecture and foraging capabilities. These disruptions carry significant implications for ecosystem services provided by eusocial insects, particularly pollination. Commercial agriculture increasingly depends on managed honeybee colonies, while wild eusocial pollinators support both natural plant communities and crops. Understanding how climate change influences these complex societies represents an urgent research priority for conservation biology and agricultural sustainability.</p>
        `,
        question: "According to the passage, what surprising insight has emerged from recent genomic analyses of eusociality?",
        options: [
            "Eusociality requires the evolution of entirely new genes",
            "Social behavior is primarily determined by epigenetic factors",
            "Eusociality evolved only once in evolutionary history",
            "Different castes within a colony have entirely different genomes",
            "Eusociality largely involves repurposing existing conserved genes"
        ],
        answer: "Eusociality largely involves repurposing existing conserved genes",
        explanation: "The fourth paragraph states: 'Contrary to earlier predictions that novel genes would drive social evolution, research increasingly suggests that the genetic toolkit for eusociality largely involves the regulation and repurposing of conserved genes.' This directly corresponds to the answer that eusociality largely involves repurposing existing conserved genes rather than evolving entirely new ones."
    },
    {
        id: 'r10q3',
        type: 'reading',
        passage: `
            <p>Eusociality—a social organization characterized by cooperative brood care, overlapping adult generations, and division of labor—represents one of evolution's most remarkable achievements. While relatively rare across the animal kingdom, this social system has evolved independently multiple times among insects, most prominently in the order Hymenoptera (ants, bees, and wasps) and in termites. The convergent evolution of eusociality in these distinct lineages provides a compelling natural experiment for understanding the selective pressures and genetic mechanisms that facilitate extreme sociality. Particularly intriguing is how such advanced social structures could evolve given apparent reproductive costs to individuals, prompting theoretical frameworks like kin selection to explain the evolutionary persistence of seemingly altruistic behaviors.</p>
            <p>Eusocial insect colonies function effectively as superorganisms, with individuals operating as specialized components of a unified whole. The reproductive division of labor typically features one or a few fertile individuals—queens and, in some species, males (kings)—while the majority function as sterile workers performing tasks essential for colony maintenance. This specialization extends to remarkable morphological differentiation, with some species developing distinct physical castes optimized for specific functions: soldiers with enlarged mandibles for colony defense, minor workers specialized for brood care, and media workers for foraging. In the most advanced eusocial insects, particularly certain ant species, this specialization has evolved to extraordinary levels of complexity, with dozens of distinct behavioral and morphological castes within a single colony.</p>
            <p>Communication systems in eusocial insects demonstrate sophisticated mechanisms for coordinating collective action. Chemical signaling predominates, with pheromones mediating everything from foraging trail formation to queen recognition. For instance, when honeybee foragers discover rich food sources, they convey both distance and directional information through their waggle dance—a remarkable symbolic communication system. Similarly, when leaf-cutter ants encounter territory marked by rival colonies, alarm pheromones rapidly mobilize defensive responses throughout their elaborate underground networks. These communication systems enable colonies to respond to environmental challenges with coordinated precision that individual insects could never achieve, effectively distributing cognitive processes across the collective.</p>
            <p>Recent genomic analyses have revealed surprising insights into the molecular underpinnings of eusociality. Contrary to earlier predictions that novel genes would drive social evolution, research increasingly suggests that the genetic toolkit for eusociality largely involves the regulation and repurposing of conserved genes. Comparative genomics across independently evolved eusocial lineages demonstrates significant overlap in regulatory pathways involved in divisions of labor, particularly those associated with metabolic regulation, reproductive physiology, and brain function. Epigenetic mechanisms, especially DNA methylation, appear crucial in mediating plastic phenotypic responses, allowing genetically similar individuals to develop into dramatically different castes depending on environmental and nutritional cues during development.</p>
            <p>The ecological dominance achieved by eusocial insects stems from their capacity to effectively exploit environmental resources through collective action and division of labor. Constituting only 2% of known insect species, eusocial insects nonetheless comprise over 50% of global insect biomass in many terrestrial ecosystems. Ants alone represent 15-20% of terrestrial animal biomass, with certain habitats supporting densities exceeding 800 individual ants per square meter. This ecological success derives partly from their ability to construct complex nests that regulate internal temperature, humidity, and protection from predators. Leaf-cutter ants cultivate sophisticated fungal gardens, effectively practicing agriculture millions of years before humans. Honeybees maintain precise thermal regulation in their hives, enabling them to survive in diverse climates. These engineering capabilities, coupled with efficient resource acquisition strategies, allow eusocial insects to inhabit virtually every terrestrial ecosystem except the polar extremes.</p>
            <p>Climate change presents novel challenges to eusocial insect populations worldwide, with potentially cascading effects through ecosystems given their keystone roles. Rising temperatures affect colony development, phenology, and geographic distribution. For thermally sensitive species like bumblebees, whose queens require specific temperature ranges for successful hibernation, warming climates may contract suitable habitats. Conversely, invasive eusocial species like the fire ant (Solenopsis invicta) may expand their ranges poleward as climate constraints recede. Altered precipitation patterns also significantly impact soil-nesting species, affecting nest architecture and foraging capabilities. These disruptions carry significant implications for ecosystem services provided by eusocial insects, particularly pollination. Commercial agriculture increasingly depends on managed honeybee colonies, while wild eusocial pollinators support both natural plant communities and crops. Understanding how climate change influences these complex societies represents an urgent research priority for conservation biology and agricultural sustainability.</p>
        `,
        question: "How might climate change affect different eusocial insect species according to the passage?",
        options: [
            "It will benefit all eusocial insects by expanding suitable habitats",
            "It will have minimal impact due to their advanced adaptive capabilities",
            "It will exclusively affect pollination services but not other ecological functions",
            "It will consistently reduce population sizes across all eusocial species",
            "It will contract habitats for some species while allowing others to expand their ranges"
        ],
        answer: "It will contract habitats for some species while allowing others to expand their ranges",
        explanation: "The final paragraph describes opposing effects of climate change on different eusocial species: 'For thermally sensitive species like bumblebees... warming climates may contract suitable habitats. Conversely, invasive eusocial species like the fire ant (Solenopsis invicta) may expand their ranges poleward as climate constraints recede.' This clearly indicates that climate change will affect different species in different, sometimes opposite ways."
    },
    {
        id: 'r11q1',
        type: 'reading',
        passage: `
            <p>The Safavid Empire's ascent to power in the early 16th century marked a pivotal transformation in the geopolitical and religious landscape of Western Asia. Founded by Shah Ismail I, who claimed descent from Sufi sheikhs, the empire emerged from a syncretic religious movement with strong mystical underpinnings. In 1501, at merely fourteen years of age, Ismail captured Tabriz and declared himself Shah, establishing a dynasty that would endure for over two centuries. The empire's most consequential early decision was the declaration of Twelver Shiism as the state religion—a bold move considering that the majority of the population practiced Sunni Islam. This religious reorientation served dual strategic purposes: it differentiated the Safavid state from its powerful Sunni Ottoman neighbors to the west and provided ideological coherence to a nascent imperial project.</p>
            <p>Under Shah Abbas I, who ruled from 1588 to 1629, the empire reached its zenith of power and cultural efflorescence. Abbas implemented sweeping administrative reforms, reorganizing the military by creating the ghulam system—a corps of slave soldiers converted to Islam who owed allegiance directly to the Shah rather than to competing tribal leaders. This innovation helped centralize power and diminish the influence of the Qizilbash, the Turkic tribal warriors who had been instrumental in founding the empire but whose divided loyalties increasingly threatened imperial cohesion. Diplomatically astute, Abbas established relations with European powers to counterbalance Ottoman military pressure, while simultaneously relocating the imperial capital to Isfahan, which he transformed into an architectural marvel replete with monumental buildings arranged around Naqsh-e Jahan Square.</p>
            <p>The Safavid economic system operated through a sophisticated division between state-administered lands (khassa) and territories granted to military and administrative officials (mamalik). Silk production and trade formed the backbone of the empire's commercial activities, with imperial workshops in Isfahan, Kashan, and Yazd producing textiles renowned throughout Eurasia. The establishment of the Armenian merchant colony at New Julfa, a suburb of Isfahan, reflected Abbas's pragmatic approach to economic development; these Christian merchants with their international connections facilitated Safavid participation in global trade networks stretching from Western Europe to East Asia. Portuguese, Dutch, English, and later French trading companies established factories (trading posts) at the Persian Gulf port of Bandar Abbas, further integrating the empire into emerging global economic systems.</p>
            <p>Safavid intellectual and artistic achievements represented a remarkable synthesis of Persian, Turkic, and Arabic cultural traditions. The empire's religious policy stimulated unprecedented theological elaboration of Shiite doctrine, with scholars like Mir Damad and Mulla Sadra developing the School of Isfahan, which integrated mystical insights with philosophical rigor. In architecture, the distinctive Safavid style—characterized by soaring portals, intricate tile work adorning massive domes, and harmoniously designed urban complexes—found its consummate expression in Isfahan's Royal Mosque. Manuscript production reached extraordinary levels of sophistication, with royal workshops (kitabkhana) employing master calligraphers, painters, and bookbinders who created masterpieces of illustrated literature.</p>
            <p>The empire's gradual decline in the late 17th and early 18th centuries stemmed from multiple interconnected factors. Religious policies grew increasingly orthodox and intolerant under Shah Sultan Husayn, alienating both Sunni populations and non-Muslim minorities who had previously enjoyed a degree of toleration. Military capabilities atrophied as the innovative ghulam system calcified into a privileged hereditary class less motivated by merit than entitlement. Environmentally, a cooling period known as the Little Ice Age reduced agricultural productivity across the empire's heartland. These internal weaknesses rendered the state vulnerable to external pressure, culminating in the Afghan invasion of 1722, which captured Isfahan after a devastating siege and effectively ended Safavid rule. Although briefly restored, the dynasty never recovered its former power, leaving a complex legacy of cultural brilliance and institutional innovation that profoundly influenced subsequent Iranian history.</p>
        `,
        question: "What was the most significant early religious policy of the Safavid Empire?",
        options: [
            "Promotion of Sufi mysticism among the population",
            "Establishment of the School of Isfahan philosophical movement",
            "Declaration of Twelver Shiism as the state religion",
            "Integration of Persian and Arabic theological traditions",
            "Conversion of the ghulam corps to Islam"
        ],
        answer: "Declaration of Twelver Shiism as the state religion",
        explanation: "The passage explicitly states in the first paragraph that 'The empire's most consequential early decision was the declaration of Twelver Shiism as the state religion.' The text also explains this was strategically significant as it differentiated the Safavids from Ottoman neighbors and provided ideological coherence."
    },
    {
        id: 'r11q2',
        type: 'reading',
        passage: `
            <p>The Safavid Empire's ascent to power in the early 16th century marked a pivotal transformation in the geopolitical and religious landscape of Western Asia. Founded by Shah Ismail I, who claimed descent from Sufi sheikhs, the empire emerged from a syncretic religious movement with strong mystical underpinnings. In 1501, at merely fourteen years of age, Ismail captured Tabriz and declared himself Shah, establishing a dynasty that would endure for over two centuries. The empire's most consequential early decision was the declaration of Twelver Shiism as the state religion—a bold move considering that the majority of the population practiced Sunni Islam. This religious reorientation served dual strategic purposes: it differentiated the Safavid state from its powerful Sunni Ottoman neighbors to the west and provided ideological coherence to a nascent imperial project.</p>
            <p>Under Shah Abbas I, who ruled from 1588 to 1629, the empire reached its zenith of power and cultural efflorescence. Abbas implemented sweeping administrative reforms, reorganizing the military by creating the ghulam system—a corps of slave soldiers converted to Islam who owed allegiance directly to the Shah rather than to competing tribal leaders. This innovation helped centralize power and diminish the influence of the Qizilbash, the Turkic tribal warriors who had been instrumental in founding the empire but whose divided loyalties increasingly threatened imperial cohesion. Diplomatically astute, Abbas established relations with European powers to counterbalance Ottoman military pressure, while simultaneously relocating the imperial capital to Isfahan, which he transformed into an architectural marvel replete with monumental buildings arranged around Naqsh-e Jahan Square.</p>
            <p>The Safavid economic system operated through a sophisticated division between state-administered lands (khassa) and territories granted to military and administrative officials (mamalik). Silk production and trade formed the backbone of the empire's commercial activities, with imperial workshops in Isfahan, Kashan, and Yazd producing textiles renowned throughout Eurasia. The establishment of the Armenian merchant colony at New Julfa, a suburb of Isfahan, reflected Abbas's pragmatic approach to economic development; these Christian merchants with their international connections facilitated Safavid participation in global trade networks stretching from Western Europe to East Asia. Portuguese, Dutch, English, and later French trading companies established factories (trading posts) at the Persian Gulf port of Bandar Abbas, further integrating the empire into emerging global economic systems.</p>
            <p>Safavid intellectual and artistic achievements represented a remarkable synthesis of Persian, Turkic, and Arabic cultural traditions. The empire's religious policy stimulated unprecedented theological elaboration of Shiite doctrine, with scholars like Mir Damad and Mulla Sadra developing the School of Isfahan, which integrated mystical insights with philosophical rigor. In architecture, the distinctive Safavid style—characterized by soaring portals, intricate tile work adorning massive domes, and harmoniously designed urban complexes—found its consummate expression in Isfahan's Royal Mosque. Manuscript production reached extraordinary levels of sophistication, with royal workshops (kitabkhana) employing master calligraphers, painters, and bookbinders who created masterpieces of illustrated literature.</p>
            <p>The empire's gradual decline in the late 17th and early 18th centuries stemmed from multiple interconnected factors. Religious policies grew increasingly orthodox and intolerant under Shah Sultan Husayn, alienating both Sunni populations and non-Muslim minorities who had previously enjoyed a degree of toleration. Military capabilities atrophied as the innovative ghulam system calcified into a privileged hereditary class less motivated by merit than entitlement. Environmentally, a cooling period known as the Little Ice Age reduced agricultural productivity across the empire's heartland. These internal weaknesses rendered the state vulnerable to external pressure, culminating in the Afghan invasion of 1722, which captured Isfahan after a devastating siege and effectively ended Safavid rule. Although briefly restored, the dynasty never recovered its former power, leaving a complex legacy of cultural brilliance and institutional innovation that profoundly influenced subsequent Iranian history.</p>
        `,
        question: "What military innovation did Shah Abbas I implement that helped centralize power?",
        options: [
            "Alliance with European powers against the Ottomans",
            "Recruitment of Turkic Qizilbash tribal warriors",
            "Creation of the ghulam system of slave soldiers loyal to the Shah",
            "Establishment of naval bases at Bandar Abbas",
            "Relocation of military headquarters to Isfahan"
        ],
        answer: "Creation of the ghulam system of slave soldiers loyal to the Shah",
        explanation: "According to the second paragraph, Shah Abbas I implemented 'sweeping administrative reforms, reorganizing the military by creating the ghulam system—a corps of slave soldiers converted to Islam who owed allegiance directly to the Shah rather than to competing tribal leaders. This innovation helped centralize power and diminish the influence of the Qizilbash.'"
    },
    {
        id: 'r11q3',
        type: 'reading',
        passage: `
            <p>The Safavid Empire's ascent to power in the early 16th century marked a pivotal transformation in the geopolitical and religious landscape of Western Asia. Founded by Shah Ismail I, who claimed descent from Sufi sheikhs, the empire emerged from a syncretic religious movement with strong mystical underpinnings. In 1501, at merely fourteen years of age, Ismail captured Tabriz and declared himself Shah, establishing a dynasty that would endure for over two centuries. The empire's most consequential early decision was the declaration of Twelver Shiism as the state religion—a bold move considering that the majority of the population practiced Sunni Islam. This religious reorientation served dual strategic purposes: it differentiated the Safavid state from its powerful Sunni Ottoman neighbors to the west and provided ideological coherence to a nascent imperial project.</p>
            <p>Under Shah Abbas I, who ruled from 1588 to 1629, the empire reached its zenith of power and cultural efflorescence. Abbas implemented sweeping administrative reforms, reorganizing the military by creating the ghulam system—a corps of slave soldiers converted to Islam who owed allegiance directly to the Shah rather than to competing tribal leaders. This innovation helped centralize power and diminish the influence of the Qizilbash, the Turkic tribal warriors who had been instrumental in founding the empire but whose divided loyalties increasingly threatened imperial cohesion. Diplomatically astute, Abbas established relations with European powers to counterbalance Ottoman military pressure, while simultaneously relocating the imperial capital to Isfahan, which he transformed into an architectural marvel replete with monumental buildings arranged around Naqsh-e Jahan Square.</p>
            <p>The Safavid economic system operated through a sophisticated division between state-administered lands (khassa) and territories granted to military and administrative officials (mamalik). Silk production and trade formed the backbone of the empire's commercial activities, with imperial workshops in Isfahan, Kashan, and Yazd producing textiles renowned throughout Eurasia. The establishment of the Armenian merchant colony at New Julfa, a suburb of Isfahan, reflected Abbas's pragmatic approach to economic development; these Christian merchants with their international connections facilitated Safavid participation in global trade networks stretching from Western Europe to East Asia. Portuguese, Dutch, English, and later French trading companies established factories (trading posts) at the Persian Gulf port of Bandar Abbas, further integrating the empire into emerging global economic systems.</p>
            <p>Safavid intellectual and artistic achievements represented a remarkable synthesis of Persian, Turkic, and Arabic cultural traditions. The empire's religious policy stimulated unprecedented theological elaboration of Shiite doctrine, with scholars like Mir Damad and Mulla Sadra developing the School of Isfahan, which integrated mystical insights with philosophical rigor. In architecture, the distinctive Safavid style—characterized by soaring portals, intricate tile work adorning massive domes, and harmoniously designed urban complexes—found its consummate expression in Isfahan's Royal Mosque. Manuscript production reached extraordinary levels of sophistication, with royal workshops (kitabkhana) employing master calligraphers, painters, and bookbinders who created masterpieces of illustrated literature.</p>
            <p>The empire's gradual decline in the late 17th and early 18th centuries stemmed from multiple interconnected factors. Religious policies grew increasingly orthodox and intolerant under Shah Sultan Husayn, alienating both Sunni populations and non-Muslim minorities who had previously enjoyed a degree of toleration. Military capabilities atrophied as the innovative ghulam system calcified into a privileged hereditary class less motivated by merit than entitlement. Environmentally, a cooling period known as the Little Ice Age reduced agricultural productivity across the empire's heartland. These internal weaknesses rendered the state vulnerable to external pressure, culminating in the Afghan invasion of 1722, which captured Isfahan after a devastating siege and effectively ended Safavid rule. Although briefly restored, the dynasty never recovered its former power, leaving a complex legacy of cultural brilliance and institutional innovation that profoundly influenced subsequent Iranian history.</p>
        `,
        question: "According to the passage, what factors contributed to the decline of the Safavid Empire?",
        options: [
            "Excessive military expenditure and financial insolvency",
            "Conquest by Ottoman forces from the west",
            "Growing religious orthodoxy, military decline, and environmental challenges",
            "Loss of control over silk trade routes to European merchants",
            "Popular uprisings against Shiite religious domination"
        ],
        answer: "Growing religious orthodoxy, military decline, and environmental challenges",
        explanation: "The final paragraph explicitly lists multiple interconnected factors in the empire's decline: 'Religious policies grew increasingly orthodox and intolerant under Shah Sultan Husayn,' 'Military capabilities atrophied as the innovative ghulam system calcified into a privileged hereditary class,' and 'Environmentally, a cooling period known as the Little Ice Age reduced agricultural productivity.'"
    },




    // Tambahkan lebih banyak soal reading di sini
];

// --- Array Baru untuk Soal Error Identification ---
const bumnErrorIdQuestions = [
    {
        id: 'bumn_err1',
        type: 'grammar', // Atau bisa 'error_identification' jika ingin lebih spesifik
        question: "The final presentation <u>includes</u> (A) graphs, <u>detailed</u> (B) analysis, <u>and</u> (C) <u>it's</u> (D) main conclusions.",
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
        question: "Responsibilities <u>include</u> (A) <u>managing</u> (B) budgets, <u>leading</u> (C) the team, and <u>to prepare</u> (D) weekly reports.",
        options: ["A", "B", "C", "D"],
        answer: "D",
        explanation: "Kesalahan ada pada (D) 'to prepare'. Untuk menjaga struktur paralel dalam daftar (managing..., leading...), bentuk gerund 'preparing' harus digunakan agar setara dengan item lainnya, bukan infinitive 'to prepare'."
    },
    {
        id: 'bumn_err5',
        type: 'grammar',
        question: "When <u>the auditors</u> (A) <u>arrived</u> (B) , the finance department <u>already prepares</u> (C) all the <u>necessary</u> (D) documents.",
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
    {
        id: 'bumn_err8',
        type: 'grammar',
        question: "The other <u>students</u> (A) <u>has</u> (B) finished <u>their</u> (C) <u>assignments</u> (D).",
        options: ["A", "B", "C", "D"],
        answer: "B",
        explanation: "Kesalahan ada pada (B) 'has'. Subjek 'students' jamak, sehingga kata kerja yang benar adalah 'have'."
    },
    {
        id: 'bumn_err9',
        type: 'grammar',
        question: "She gave some books to <u>the others</u> (A) <u>students</u> (B) <u>in</u> (C) <u>the class</u> (D).",
        options: ["A", "B", "C", "D"],
        answer: "A",
        explanation: "Kesalahan ada pada (A) 'the others'. Frasa yang benar adalah 'other students' tanpa 'the' dan tanpa 's' pada 'others' karena 'students' sudah jamak."
    },
    {
        id: 'bumn_err10',
        type: 'grammar',
        question: "<u>Others</u> (A) <u>is</u> (B) <u>waiting</u> (C) <u>outside the meeting room</u> (D).",
        options: ["A", "B", "C", "D"],
        answer: "B",
        explanation: "Kesalahan ada pada (B) 'is'. 'Others' adalah bentuk jamak, sehingga kata kerja yang benar adalah 'are'."
    },
    {
        id: 'bumn_err11',
        type: 'grammar',
        question: "I prefer this one more than <u>other</u> (A) <u>because</u> (B) <u>it is</u> (C) <u>interesting to read</u> (D).",
        options: ["A", "B", "C", "D"],
        answer: "A",
        explanation: "Kesalahan ada pada (A) 'other'. Setelah 'than' harus menggunakan 'the other' atau 'others' tergantung konteks. 'Other' saja tidak tepat."
    }
    
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