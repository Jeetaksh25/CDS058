const questions = [
    {
        question: "Which subject do you enjoy the most?",
        options: [
            { text: "Math", score: 1 },
            { text: "Understanding biological processes", score: 3 },
            { text: " Economics", score: 4 },
            { text: "History/Geography", score: 2 }
        ]
    },
    {
        question: "How would you describe your problem-solving skills?",
        options: [
            { text: "I enjoy solving complex problems and puzzles", score: 4 },
            { text: "I like understanding issues that relate to people’s health and biology", score: 3 },
            { text: "I’m good at finding solutions that make financial sense", score: 1 },
            { text: "I prefer exploring social issues and people’s behavior", score: 2 }
        ]
    },
    {
        question: "What type of books or articles do you prefer reading?",
        options: [
            { text: "Science magazines or tech blogs", score: 4 },
            { text: "Health and biology-related topics", score: 1 },
            { text: "Business and economics news", score: 2 },
            { text: "History, politics, and literature", score: 3 }
        ]
    },
    {
        question: "When faced with a challenging task, how do you respond?",
        options: [
            { text: "Break it down logically and tackle it step-by-step", score: 4 },
            { text: "Look for solutions that benefit the people around me", score: 1 },
            { text: "Analyze it financially or structurally", score: 2 },
            { text: "Think of innovative or creative ways to approach it", score: 3 }
        ]
    },
    {
        question: " Which of these is closest to your future ambition?",
        options: [
            { text: "Engineer or Scientist", score: 2 },
            { text: "Doctor or Researcher in medical science", score: 1 },
            { text: "Entrepreneur, Business Analyst, or Chartered Accountant", score: 4 },
            { text: "Journalist, Psychologist, or Social Worker", score: 3 }
        ]
    },
    {
        question: "How do you feel about working in a lab or with technology?",
        options: [
            { text: "Excited; I like experimenting and creating new things", score: 3 },
            { text: "Interested, especially if it involves biology", score: 4 },
            { text: "Neutral, I prefer working with numbers and financial data", score: 1 },
            { text: "Not very interested; I like working on social issues", score: 2 }
        ]
    },
    {
        question: "Which activity do you enjoy most?",
        options: [
            { text: "Solving math or physics problems", score: 1 },
            { text: "Learning about the human body and health", score: 4 },
            { text: "Analyzing markets and learning how businesses work", score: 3 },
            { text: "Reading, writing, and discussing social issues", score: 2 }
        ]
    },
    // Add the rest of the questions here in similar format
    {
        question: "How would you approach understanding a new concept?",
        options: [
            { text: "By analyzing and applying logic", score: 4 },
            { text: "Through hands-on examples, especially if related to biology", score: 1 },
            { text: "By seeing its financial or business implications", score: 2 },
            { text: "By connecting it to historical or social contexts", score: 3 }
        ]
    },
    // ... continue to define questions 3 to 50
    {
        question: "Which of these subjects do you find most interesting?",
        options: [
            { text: "Physics or Mathematics", score: 3 },
            { text: "Biology", score: 4 },
            { text: "Business Studies", score: 1 },
            { text: "Political Science", score: 2 }
        ]
    },
    {
        question: "What’s your preferred way to learn?",
        options: [
            { text: "Experiments and practicals", score: 4 },
            { text: "Through observing living organisms or environments", score: 1 },
            { text: "Real-world case studies or economic data", score: 3 },
            { text: "By engaging in debates or writing essays", score: 2 }
        ]
    },
    {
        question: " Which subject do you find easier to study?",
        options: [
            { text: "Physics or Computer Science", score: 1 },
            { text: "Biology or Chemistry", score: 2 },
            { text: "Economics or Accountancy", score: 3 },
            { text: "History or Sociology", score: 4 }
        ]
    },
    {
        question: "How do you feel about memorizing facts and details?",
        options: [
            { text: "I prefer understanding concepts rather than memorizing", score: 3 },
            { text: "I can remember details about living things, but not in other areas", score: 2 },
            { text: "I remember information if it’s useful for practical applications", score: 4 },
            { text: " I’m good at remembering dates, events, and social theories", score: 1 }
        ]
    },
    // Add the rest of the questions here in similar format
    {
        question: "How do you typically spend your free time?",
        options: [
            { text: "Solving puzzles or experimenting with tech", score: 2 },
            { text: "Watching documentaries about health or the environment", score: 4 },
            { text: "Following business trends or learning about finance", score: 3 },
            { text: "Reading or creating art", score: 1 }
        ]
    },
    // ... continue to define questions 3 to 50
    {
        question: "What do you find most fulfilling in a project?",
        options: [
            { text: "Building or designing something innovative", score: 3 },
            { text: "Finding solutions that improve people’s lives or health", score: 2 },
            { text: "Making a plan that is financially viable", score: 4 },
            { text: "Making a positive social or cultural impact", score: 1 }
        ]
    },
    {
        question: "If you could pick one superpower, what would it be?",
        options: [
            { text: "Ability to solve any problem instantly", score: 2 },
            { text: "Ability to heal and help others", score: 1 },
            { text: "Ability to make sound financial decisions", score: 4 },
            { text: "Ability to understand people’s emotions deeply", score: 3 }
        ]
    },
    {
        question: "Which of the following topics excites you most?",
        options: [
            { text: " Space exploration and the universe", score: 4 },
            { text: "Understanding biological processes", score: 1 },
            { text: "Economics, investments, and finance", score: 3 },
            { text: " Social justice and cultural heritage", score: 2 }
        ]
    },
    {
        question: "How do you feel about math and numbers?",
        options: [
            { text: "I love math; it’s like solving puzzles", score: 1 },
            { text: "I prefer numbers only when they relate to biology or data", score: 4 },
            { text: "I’m comfortable with math, especially if related to finance", score: 3 },
            { text: "I find math challenging; I prefer writing and social studies", score: 2 }
        ]
    },
    // Add the rest of the questions here in similar format
    {
        question: "Which of these activities appeals to you most?",
        options: [
            { text: "Building or coding something new", score: 2 },
            { text: "Learning about plants, animals, or human health", score: 1 },
            { text: "Creating a business plan or financial budget", score: 3 },
            { text: "Writing an essay on social issues", score: 4 }
        ]
    },
    // ... continue to define questions 3 to 50
    {
        question: "If you had to pick an ideal career environment, what would it be?",
        options: [
            { text: "High-tech labs or engineering workshops", score: 4 },
            { text: "Hospitals, research labs, or clinics", score: 2 },
            { text: "Corporate offices or financial institutions", score: 1 },
            { text: "Art studios, NGOs, or journalism offices", score: 3 }
        ]
    },
    {
        question: "How would you describe your ideal project?",
        options: [
            { text: "Technological, innovative, and logical", score: 1 },
            { text: "Related to health, nature, or biological science", score: 2 },
            { text: "Business-oriented, with profit and growth potential", score: 3 },
            { text: "Creative, socially impactful, and culture-oriented", score: 4 }
        ]
    },
    {
        question: "What do you enjoy doing in a group project?",
        options: [
            { text: "Taking the lead and organizing tasks logically", score: 1 },
            { text: "Contributing knowledge about health or biology", score: 3 },
            { text: "Analyzing data and discussing financial implications", score: 4 },
            { text: "Bringing creative ideas and perspectives", score: 2 }
        ]
    },
    {
        question: "Which of these statements resonates with you the most?",
        options: [
            { text: "I thrive on solving challenging problems and making things work", score: 4 },
            { text: "I want to make a difference in people’s lives through science", score: 3 },
            { text: "I am interested in how money and business impact society", score: 1 },
            { text: "I believe in understanding cultures and histories to improve society ", score: 2 }
        ]
    },
    // Add the rest of the questions here in similar format
    {
        question: " How do you feel about science experiments?",
        options: [
            { text: " I find them exciting and love to conduct my own", score: 4 },
            { text: "I enjoy them, especially if they involve biology", score: 1 },
            { text: "They can be interesting, but I prefer the theoretical side", score: 2 },
            { text: "I’m more interested in discussing the implications of the findings", score: 3 }
        ]
    },
    // ... continue to define questions 3 to 50
    {
        question: "When studying, which environment do you prefer?",
        options: [
            { text: "A quiet space with resources to experiment and explore", score: 4 },
            { text: "A space with access to books and research materials", score: 1 },
            { text: "A practical environment where I can analyze data", score: 2 },
            { text: "A collaborative space for discussion and debate", score: 3 }
        ]
    },
    {
        question: "If you could change one thing in the world, what would it be?",
        options: [
            { text: "Improve technology to solve complex problems", score: 2 },
            { text: "Enhance healthcare access for everyone", score: 1 },
            { text: "Create more job opportunities and financial literacy", score: 4 },
            { text: "Promote understanding and acceptance of diverse cultures", score: 3 }
        ]
    },
    {
        question: "How important is creativity in your work?",
        options: [
            { text: "Very important; I like to innovate and create", score: 3 },
            { text: "Important, but I prefer it within the scope of scientific inquiry", score: 4 },
            { text: "Somewhat important, especially in business solutions", score: 1 },
            { text: "Extremely important; it drives my passion", score: 2 }
        ]
    },
    {
        question: "Which type of news do you follow the most?",
        options: [
            { text: "Technology and scientific breakthroughs", score: 1 },
            { text: "Health, medicine, and biology-related news", score: 4 },
            { text: "Business news and economic trends", score: 3 },
            { text: "Social issues and cultural stories", score: 2 }
        ]
    },
    // Add the rest of the questions here in similar format
    {
        question: "How do you approach learning new information?",
        options: [
            { text: "By experimenting and applying it practically", score: 4 },
            { text: "By studying case studies and real-life applications", score: 1 },
            { text: "By connecting it to financial or business concepts", score: 2 },
            { text: "By discussing it with others and exploring different viewpoints", score: 3 }
        ]
    },
    // ... continue to define questions 3 to 50
    {
        question: "What role do you see yourself playing in a team?",
        options: [
            { text: "The strategist who plans and solves problems", score: 3 },
            { text: "The researcher who provides knowledge", score: 4 },
            { text: "The analyst who evaluates data and finances", score: 1 },
            { text: "The creative thinker who brings new ideas", score: 2 }
        ]
    },
    {
        question: "How do you feel about public speaking?",
        options: [
            { text: " I enjoy it and like sharing technical ideas", score: 4 },
            { text: " I’m comfortable speaking about health-related topics", score: 3 },
            { text: "I feel confident presenting financial information", score: 2 },
            { text: "I love discussing social issues and storytelling", score: 1 }
        ]
    },
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    },
    {
        question: "Which subject do you find most interesting?",
        options: [
            { text: "Physics", score: 4 },
            { text: "Chemistry", score: 3 },
            { text: "Economics", score: 2 },
            { text: "Psychology", score: 1 }
        ]
    },
    // Add the rest of the questions here in similar format
    {
        question: "How do you prefer to work?",
        options: [
            { text: "In a lab conducting experiments", score: 4 },
            { text: "On projects that involve research", score: 3 },
            { text: "With groups discussing ideas", score: 2 },
            { text: "Analyzing data and trends", score: 1 }
        ]
    },
    // ... continue to define questions 3 to 50
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    },
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    },
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    },
    {
        question: "Which subject do you find most interesting?",
        options: [
            { text: "Physics", score: 4 },
            { text: "Chemistry", score: 3 },
            { text: "Economics", score: 2 },
            { text: "Psychology", score: 1 }
        ]
    },
    // Add the rest of the questions here in similar format
    {
        question: "How do you prefer to work?",
        options: [
            { text: "In a lab conducting experiments", score: 4 },
            { text: "On projects that involve research", score: 3 },
            { text: "With groups discussing ideas", score: 2 },
            { text: "Analyzing data and trends", score: 1 }
        ]
    },
    // ... continue to define questions 3 to 50
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    },
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    },
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    },
    {
        question: "Which subject do you find most interesting?",
        options: [
            { text: "Physics", score: 4 },
            { text: "Chemistry", score: 3 },
            { text: "Economics", score: 2 },
            { text: "Psychology", score: 1 }
        ]
    },
    // Add the rest of the questions here in similar format
    {
        question: "How do you prefer to work?",
        options: [
            { text: "In a lab conducting experiments", score: 4 },
            { text: "On projects that involve research", score: 3 },
            { text: "With groups discussing ideas", score: 2 },
            { text: "Analyzing data and trends", score: 1 }
        ]
    },
    // ... continue to define questions 3 to 50
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    },
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    },
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    },
    {
        question: "Which subject do you find most interesting?",
        options: [
            { text: "Physics", score: 4 },
            { text: "Chemistry", score: 3 },
            { text: "Economics", score: 2 },
            { text: "Psychology", score: 1 }
        ]
    },
    // Add the rest of the questions here in similar format
    {
        question: "How do you prefer to work?",
        options: [
            { text: "In a lab conducting experiments", score: 4 },
            { text: "On projects that involve research", score: 3 },
            { text: "With groups discussing ideas", score: 2 },
            { text: "Analyzing data and trends", score: 1 }
        ]
    },
    // ... continue to define questions 3 to 50
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    },
    {
        question: "What do you enjoy the most?",
        options: [
            { text: "Solving mathematical problems", score: 4 },
            { text: "Understanding biological processes", score: 3 },
            { text: "Exploring historical events", score: 2 },
            { text: "Working with numbers and finances", score: 1 }
        ]
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(option.score));
        optionsContainer.appendChild(button);
    });
}

function selectOption(score) {
    totalScore += score;
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';

    let result;
    if (totalScore >= 100) {
        result = "You should consider pursuing Science (Non-Med).";
    } else if (totalScore >= 80) {
        result = "You should consider pursuing Science (Med).";
    } else if (totalScore >= 60) {
        result = "You should consider pursuing Commerce.";
    } else {
        result = "You should consider pursuing Humanities.";
    }

    resultContainer.textContent = `You scored ${totalScore}. ${result}`;
}

showQuestion();
