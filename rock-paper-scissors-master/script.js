const ShowButton = document.querySelector('#Rules');
const body = document.querySelector('body');
const Container = document.querySelector('.container')
const CloseButton = document.querySelector('.close');
const YourScores = document.querySelector('#YourScore')

let YourScore = Number(YourScores.innerHTML);

const DeviceWidth = window.innerWidth;

const PlayAgainButton = document.querySelector('#PlayAgain');

// Random Number Generator
function GetRandomNumber() {
    let Number = Math.floor(Math.random() * 3 + 1)
    return Number;
}

//Show Rules

setTimeout(()=>{
    const RuleBook = document.querySelector('.Rulebook');
    gsap.to(RuleBook,
        {
            'left':'50%'
        })
    gsap.to(Container,
        {
            boxShadow:'inset rgb(35 33 33) 0px 0px 200px 200px'
        })
},1000)
setTimeout(()=>{
    const RuleBook = document.querySelector('.Rulebook');
    gsap.to(RuleBook,
        {
            'left':'-50%'
        })
    gsap.to(Container,
        {
            boxShadow:'inset rgb(35 33 33) 0px 0px 0px 0px'
        })
},3000)

ShowButton.addEventListener('click', () => {
    const RuleBook = document.querySelector('.Rulebook');
    gsap.to(RuleBook,
        {
            'left': '50%'
        })
    gsap.to(Container,
        {
            boxShadow: 'inset rgb(35 33 33) 0px 0px 200px 200px'
        })
})

//Hide Rules
CloseButton.addEventListener('click', () => {
    const RuleBook = document.querySelector('.Rulebook');
    gsap.to(RuleBook,
        {
            'left': '-50%'
        })
    gsap.to(Container,
        {
            boxShadow: 'inset rgb(35 33 33) 0px 0px 0px 0px'
        })
})

const OptionContainer = document.querySelector('.Options');
const GameContainer = document.querySelector('.GameContainer');
const UserSide = document.querySelector('.UserSide')
const ComputerSide = document.querySelector('.ComputerSide')

const WinHeading = document.querySelector('#Win');
const LooseHeading = document.querySelector("#Loose");
const TieHeadind = document.querySelector('#Tie');

let GameResult = null;


function MyOption(n) {
    OptionContainer.style.display = 'none'
    GameContainer.style.display = 'flex'
    UserSide.style.border='none'
    ComputerSide.style.border='none'

    // User Choice
    switch (n) {
        case 1:
            const PaperImage = document.querySelector('#one');
            PaperImage.style.display = 'flex'
            UserSide.style.border = 'none'
            if(DeviceWidth > 400){
                UserSide.style.border = '20px solid hsl(230, 89%, 62%)';
            } else{
                UserSide.style.border = '10px solid hsl(230, 89%, 62%)';
            }
            GameResult = n;
            break;
        case 2:
            const ScessiorImage = document.querySelector('#two');
            ScessiorImage.style.display = 'flex'
            UserSide.style.border = 'none'
            if(DeviceWidth > 400){
                UserSide.style.border = '20px solid hsl(40, 84%, 53%)';
            } else{
                UserSide.style.border = '10px solid hsl(40, 84%, 53%)';
            }
            GameResult = n;
            break;
        case 3:
            const RockImage = document.querySelector('#three');
            RockImage.style.display = 'flex'
            UserSide.style.border = 'none'
            if(DeviceWidth > 400){
                UserSide.style.border = '20px solid hsl(349, 71%, 52%)';
            } else{
                UserSide.style.border = '10px solid hsl(349, 71%, 52%)';
            }
            GameResult = n;
            break;
        default:
            break;
    }

    //Random Guess
    const ComputedNumber = GetRandomNumber();

    // Computer Choice
    switch (ComputedNumber) {
        case 1:
            const ComputerPaper = document.querySelector('#Cone')
            ComputerPaper.style.display = 'flex'
            ComputerSide.style.border = 'none'
            if(DeviceWidth>400){
                ComputerSide.style.border = '20px solid hsl(230, 89%, 62%)'
            } else{
                ComputerSide.style.border = '10px solid hsl(230, 89%, 62%)'
            }
            break;
        case 2:
            const ComputerScessior = document.querySelector('#Ctwo')
            ComputerScessior.style.display = 'flex'
            ComputerSide.style.border = 'none'
            if(DeviceWidth>400){
                ComputerSide.style.border = '20px solid hsl(40, 84%, 53%)'
            } else{
                ComputerSide.style.border = '10px solid hsl(40, 84%, 53%)'
            }
            break;
        case 3:
            const ComputerRock = document.querySelector('#Cthree')
            ComputerRock.style.display = 'flex'
            ComputerSide.style.border = 'none'
            if(DeviceWidth>400){
                ComputerSide.style.border = '20px solid hsl(349, 71%, 52%)'
            } else{
                ComputerSide.style.border = '10px solid hsl(349, 71%, 52%)'
            }
            break;
        default:
            break;
    }

    // Game Logic
    if (GameResult === ComputedNumber) { // --------- Game TIE
        TieHeadind.style.display = 'block';
        WinHeading.style.display = 'none';
        LooseHeading.style.display = 'none';
        PlayAgainButton.style.color = 'black';
        ComputerSide.boxShadow = '';
        UserSide.boxShadow = '';
    } else {

        // You = Paper  || Computer = Scessior ------------- You Loose
        if (GameResult === 1 && ComputedNumber === 2) {
            TieHeadind.style.display = 'none';
            LooseHeading.style.display = 'block';
            WinHeading.style.display = 'none';
            YourScore -= 1;
            YourScores.innerHTML = YourScore;
            gsap.to(ComputerSide,
                {
                    boxShadow: '#7370723d 0 0 30px 20px, #69666691 0 0 50px 40px, #ffffff63 0 0 100px 60px'
                })
            PlayAgainButton.style.color = 'red'
        }
        // You = Paper || Computer = Rock ---------------- You Win
        else if (GameResult === 1 && ComputedNumber === 3) {
            TieHeadind.style.display = 'none';
            LooseHeading.style.display = 'none';
            WinHeading.style.display = 'block';
            YourScore += 2;
            YourScores.innerHTML = YourScore
            UserSide.style.boxShadow = ''
            ComputerSide.style.boxShadow = ''
            gsap.to(UserSide,
                {
                    boxShadow: '#7370723d 0 0 30px 20px, #69666691 0 0 50px 40px, #ffffff63 0 0 100px 60px'
                })
            PlayAgainButton.style.color = 'blue'

        }
        // You = Scessior  || Computer = Paper -------------- You Win
        else if (GameResult === 2 && ComputedNumber === 1) {
            TieHeadind.style.display = 'none';
            LooseHeading.style.display = 'none';
            WinHeading.style.display = 'block';
            YourScore += 2;
            YourScores.innerHTML = YourScore
            UserSide.style.boxShadow = ''
            ComputerSide.style.boxShadow = ''
            gsap.to(UserSide,
                {
                    boxShadow: '#7370723d 0 0 30px 20px, #69666691 0 0 50px 40px, #ffffff63 0 0 100px 60px'
                })
            PlayAgainButton.style.color = 'blue'

        }
        // You = Scessior  || Computer = Rock ---------------- You Loose
        else if (GameResult === 2 && ComputedNumber === 3) {
            TieHeadind.style.display = 'none';
            LooseHeading.style.display = 'block';
            WinHeading.style.display = 'none';
            YourScore -= 1;
            YourScores.innerHTML = YourScore
            UserSide.style.boxShadow = ''
            ComputerSide.style.boxShadow = ''
            gsap.to(ComputerSide,
                {
                    boxShadow: '#7370723d 0 0 30px 20px, #69666691 0 0 50px 40px, #ffffff63 0 0 100px 60px'
                })
            PlayAgainButton.style.color = 'red'
        }
        // You = Rock  || Computer = Paper -------------------- You Loose
        else if (GameResult === 3 && ComputedNumber === 1) {
            TieHeadind.style.display = 'none';
            LooseHeading.style.display = 'block';
            WinHeading.style.display = 'none';
            YourScore -= 1;
            YourScores.innerHTML = YourScore
            UserSide.style.boxShadow = ''
            ComputerSide.style.boxShadow = ''
            gsap.to(ComputerSide,
                {
                    boxShadow: '#7370723d 0 0 30px 20px, #69666691 0 0 50px 40px, #ffffff63 0 0 100px 60px'
                })
            PlayAgainButton.style.color = 'red'
        }
        // You = Rock  || Computer = Scessior ----------------- You Win
        else if (GameResult === 3 && ComputedNumber === 2) {
            TieHeadind.style.display = 'none';
            LooseHeading.style.display = 'none';
            WinHeading.style.display = 'block';
            YourScore += 2;
            YourScores.innerHTML = YourScore
            UserSide.style.boxShadow = ''
            ComputerSide.style.boxShadow = ''
            gsap.to(UserSide,
                {
                    boxShadow: '#7370723d 0 0 30px 20px, #69666691 0 0 50px 40px, #ffffff63 0 0 100px 60px'
                })
            PlayAgainButton.style.color = 'blue'
        }
    }
}

//Reset the Game

function ResetGame() {
    OptionContainer.style.display = 'flex'
    GameContainer.style.display = 'none';

    UserSide.style.border = 'none'
    ComputerSide.style.border = 'none'
    WinHeading.style.display = 'none'
    LooseHeading.style.display = 'none'

    const PaperImage = document.querySelector('#one');
    const ScessiorImage = document.querySelector('#two');
    const RockImage = document.querySelector('#three');
    const ComputerPaper = document.querySelector('#Cone')
    const ComputerScessior = document.querySelector('#Ctwo')
    const ComputerRock = document.querySelector('#Cthree')

    PaperImage.style.display = 'none'
    ScessiorImage.style.display = 'none'
    RockImage.style.display = 'none'
    ComputerPaper.style.display = 'none'
    ComputerScessior.style.display = 'none'
    ComputerRock.style.display = 'none'
}