const quotes = [
    {
        quote : 'Having a confident expression builds confidence.',
        author: 'Charles Darwin',
    },
    {
        quote : "Don't just have a mind. must be practiced.",
        author: 'Bruce Lee',
    },
    {
        quote : '재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더많이 잃은 것이며, 용기를 잃은 사람은 모든것을 잃은 것이다.',
        author: '세르반테스',
    },
    {
        quote : '만족할 줄 아는 사람은진정한 부자이고, 탐욕스러운 사람은진실로 가난한 사람이다.',
        author: '솔론',
    },
    {
        quote : '자신을 내보여라. 그러면 재능이 드러날 것이다.',
        author: '발타사르 그라시안',
    },
    {
        quote : '늦었다고 생각할 때가 늦은거다',
        author: '박명수',
    },
    {
        quote : '지금 공부 안하면 더울때 더운 데서 일하고 추울 때 추운 데서 일한다.',
        author: '박명수',
    },
    {
        quote : '어려운 길은 길이 아니다.',
        author: '박명수',
    },
    {
        quote : '즐길 수 없으면 피하라',
        author: '박명수',
    },
    {
        quote : '성공은 1%의 재능과 99%의 빽',
        author: '박명수',
    },
    {
        quote : '내일도 할 수 있는 일을 굳이 오늘 할 필요가 없다.',
        author: '박명수',
    },
    {
        quote : '가는 말이 고우면 얕본다.',
        author: '박명수',
    },
    {
        quote : '고생 끝에 골병난다.',
        author: '박명수',
    },
    {
        quote : '참을 인 세 번이면 호구',
        author: '박명수',
    },
    {
        quote : '티끌 모아 티끌',
        author: '박명수',
    },
    {
        quote : '헌신하면 헌신 짝 된다.',
        author: '박명수',
    },
]

const quoteText = document.querySelector('#quoteText')
const randomNumber = Math.floor(Math.random()*quotes.length)
const quote = quotes[randomNumber]
quoteText.innerText = `${quote.quote} - ${quote.author}`


// prepend, append (각자 가장 앞/뒤에 element를 넣어주는 것)