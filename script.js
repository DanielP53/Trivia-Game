let score = 0;
const scoreElement = document.querySelector('.score');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function checkAnswer (button) {
    let index = button.getAttribute('data-question-index');
    if ((questionsInDisplay[index].correct === button.innerText) && !button.classList.contains('correct')) {
        button.classList.add('correct');
        score++;
        scoreElement.innerText = `${score}/5`;
    } else if (!button.parentElement.classList.contains('answered')) {
        button.classList.add('wrong');
    }

    if(!button.parentElement.classList.contains('answered')){
        button.parentElement.classList.add('answered');
    }
    
    const totalAnswers = document.querySelectorAll('.answered');

    if(totalAnswers.length === 5) {
        alert(`Your score is ${score}/5`);
    }
};

const questions = [
    {
        imgSrc: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_876/public/media/image/2019/01/there-are-some-things-you-might-not-know-about-harry-potter-series.jpg?itok=k12ii_BQ',
        question: 'When is Harry Potter`s birthday?',
        options: ['February 30','July 31','December 1'],
        correct: 'July 31',
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnb9HFMtJwtinWJkiZCXslEH5erMBXnTin2nkd0bATIRty7cmYHBmjfHUqUi7zP8Gytwc&usqp=CAU',
        question: 'How are students sorted into their houses?',
        options: ['Sorting Hat','They choose','Bloodline'],
        correct: 'Sorting Hat',
    },
    {
        imgSrc: 'http://images.fanpop.com/images/image_uploads/Ron-ronald-weasley-646915_651_294.jpg',
        question: 'Ron Weasley has a fear of which insect?',
        options: ['Dementors','Spiders','Snakes'],
        correct: 'Spiders',
    },
    {
        imgSrc: 'https://cdn.vox-cdn.com/thumbor/kE-g91kPlf29oSX9kwYMQ5PwSjk=/0x0:3196x1604/1200x800/filters:focal(1343x547:1853x1057)/cdn.vox-cdn.com/uploads/chorus_image/image/70289319/3532507.0.jpeg',
        question: 'What is Harry`s position in the wizarding sport Quidditch?',
        options: ['Chaser','Beater','Seeker'],
        correct: 'Seeker',
    },
    {
        imgSrc: 'https://depor.com/resizer/AjASnTSUm1-TEi4qlrB55SHph3I=/400x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/XOUFDGWBVNBINAX2QTPJKCVG4Q.jpg',
        question: 'What spell did Hermione use to free Harry and Ron from the Devil`s Snare?',
        options: ['Alohomora','Lumos Solem Spell','Avada Kedavra'],
        correct: 'Lumos Solem Spell',
    },
    {
        imgSrc: 'https://i.insider.com/5bbe3dce0114557e5d0ab2f2?width=800&format=jpeg',
        question: 'What is Harry`s Patronus?',
        options: ['Stag','Otter','Dog'],
        correct: 'Stag',
    },
    {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnb9HFMtJwtinWJkiZCXslEH5erMBXnTin2nkd0bATIRty7cmYHBmjfHUqUi7zP8Gytwc&usqp=CAU',
        question: 'What house is Harry Potter sorted into?',
        options: ['Slytherin','Gryffindor','Ravenclaw'],
        correct: 'Gryffindor',
    },
    {
        imgSrc: 'https://elcomercio.pe/resizer/yDDuOZgc-B0eY71DGcyiufILMiI=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/O4K7E4SSKJFCBP7EBDDMP5CIG4.jpg',
        question: 'What animal can Remus Lupin turn into?',
        options: ['Dog','Rat','Werewolf'],
        correct: 'Werewolf',
    },
    {
        imgSrc: 'https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg',
        question: 'Who is Harry`s godfather?',
        options: ['James Potter','Arthut Weasley','Sirius Black'],
        correct: 'Sirius Black',
    },
    {
        imgSrc: 'https://static.onecms.io/wp-content/uploads/sites/6/2018/10/voldemort-21-2000.jpg',
        question: 'How many Horcrux Voldemort create?',
        options: ['7','8','9'],
        correct: '8',
    },
    {
        imgSrc: 'https://media.rbl.ms/image?u=%2Ffiles%2F2016%2F06%2F29%2F636027646783008791-1338355408_Draco-vs-Harry-draco-malfoy-vs-harry-potter-7684972-1023-584.jpg&ho=https%3A%2F%2Faz616578.vo.msecnd.net&s=844&h=a21301af6e42d9b7f6640194cdbdc416b7bf3ffa68dd0afbb8c978ee0578c133&size=980x&c=759409562',
        question: 'What spell created by the Half Blood Prince did Harry use on Draco Malfoy?',
        options: ['Wingardium Leviosa','Avada Kedavra','Sectumsempra'],
        correct: 'Sectumsempra',
    },
    {
        imgSrc: 'https://static.wikia.nocookie.net/harrypotter/images/6/62/Chamber.png/revision/latest?cb=20180613173723',
        question: 'Who opened the chamber of secrets?',
        options: ['Hermione Granger','Ginny Weasley','Malfoy'],
        correct: 'Ginny Weasley',
    },
    {
        imgSrc: 'https://album.mediaset.es/eimg/10000/2020/10/28/clipping_xM8nkr_ddbd.jpg?w=1200',
        question: 'What is Lord Voldemort`s boggart?',
        options: ['Harry Potter','Albus Dumbledore','His own corpse'],
        correct: 'His own corpse',
    },
    {
        imgSrc: 'https://peru21.pe/resizer/XyHNTT-ic-iz47eUx2BIDUT40aE=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZG7J27KECRDWBMEXSNI5ZIRDQY.jpg',
        question: 'Who killed Sirius Black?',
        options: ['Bellatrix Lestrange','Lucius Malfoy','Voldemort'],
        correct: 'Bellatrix Lestrange',
    },
    {
        imgSrc: 'https://m.media-amazon.com/images/I/61SHZG80gFL._AC_SL1018_.jpg',
        question: 'What is the core of Harry`s wand?',
        options: ['Phoenix feather','Dragon Heartstring','Unicorn Tail-Hair'],
        correct: 'Phoenix feather',
    },
    {
        imgSrc: 'https://qph.fs.quoracdn.net/main-qimg-2e18cfa0f11c60930e16474bf6182853-c',
        question: 'Where was Harry and Voldemort`s Last Battle?',
        options: ['Hogsmade','Scecret Chamber','The Great Hall of Hogwarts Castle'],
        correct: 'The Great Hall of Hogwarts Castle',
    },
    {
        imgSrc: 'https://pm1.narvii.com/6201/202c077a5c7550b4efa9b8f860abe061b5c532da_hq.jpg',
        question: 'Who killed Bellatrix Lestrange?',
        options: ['Albus Dumbledore','Molly Weasley','Harry Potter'],
        correct: 'Molly Weasley',
    },
    {
        imgSrc: 'https://i.pinimg.com/736x/2c/d5/b4/2cd5b40f361ef5cb7b89852188542aaa.jpg',
        question: 'Who killed Albus Dumbledore?',
        options: ['Voldemort','Draco Malfoy','Severus Snape'],
        correct: 'Severus Snape', 
    },
    {
        imgSrc: 'https://i.pinimg.com/736x/2c/d5/b4/2cd5b40f361ef5cb7b89852188542aaa.jpg',
        question: 'What`s the name of Albus Dumbledore`s brother?',
        options: ['Abeforth','James','Morty'],
        correct: 'Abeforth', 
    },
    {
        imgSrc: 'https://qph.fs.quoracdn.net/main-qimg-ee60bdddb63c7b55e0aec885d2634cff',
        question: 'Who hold the Alder wand before Harry?',
        options: ['Albus Dumbledore','Severus Snape','Draco Malfoy'],
        correct: 'Draco Malfoy', 
    },
];

const questionSection = document.querySelector('.question-section');
const questionsInDisplay = [];

for(let i = 0; i < 5; i++) {
    let randomQuestion = getRandomInt(20);

    if (!questionsInDisplay.includes(questions[randomQuestion])) {
        questionsInDisplay.push(questions[randomQuestion]);
    } else {
        i--;
    }
}

questionsInDisplay.forEach((question, index) => {
    const newElement = document.createElement('li');

    newElement.classList.add('question');
    newElement.setAttribute('id', `${index}`);
    newElement.innerHTML = `<img class="question-image" src="${question.imgSrc}"/>
    <div class="question-content">
        <h2>${question.question}</h2>
        <button onclick="checkAnswer(this)" class="answer" data-question-index=${index}>${question.options[0]}</button>
        <button onclick="checkAnswer(this)" class="answer" data-question-index=${index}>${question.options[1]}</button>
        <button onclick="checkAnswer(this)" class="answer" data-question-index=${index}>${question.options[2]}</button>
    </div>
    `;
    questionSection.appendChild(newElement);
});
