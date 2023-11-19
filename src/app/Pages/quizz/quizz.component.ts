import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent
{
  questions = [
    {
      text: "Unde e banca unde am vazut apusul in Tineretuli?",
      answers: ['Langa Bronks Park ;))',
                'Langa lac, unde mi-am laut tasnitoare in fata',
                'Langa zona unde ne cataram mereu impreuna <3',
                'Langa cimitirul adolescentilor'],
      correct_answer: 1
    },
    {
      text: "Unde e aleea cu pomi?",
      answers: ['Cismigiu',
                'Tineretului',
                'Moghioros',
                'Tei'],
      correct_answer: 0
    },
    {
      text: "Ce trebuie sa faci sa ajungi la inima mea?",
      answers: ['Sa-mi gatesti mancare buna',
                'Sa mi cumperi un kinde bueno ALB',
                'Sa accepti oferta de 75RON odata ;))',
                'Sa ne uitam la Harry Potter 7.5'],
      correct_answer: -1
    },
    {
      text: "Unde m-ai culcat cand am venit in anul 2 beat la tine?",
      answers: ['In pat ca pe om',
                'Langa incaltamine',
                'In locul curvelor',
                'In cada'],
      correct_answer: 2
    },
    {
      text: "Cum imi place sa ma plimb cel mai mult?",
      answers: ['Mancand inghetata',
                'Alergand',
                'Inspirand aerul rece al serii',
                'Cu tine 👉👈'],
      correct_answer: 3
    },
    {
      text: "Pe patul de moarte (al tau) ce ti as face ultima data?",
      answers: ['Ti as fura nasul',
                'Te as gadila sa ti pica branula',
                'Ti as sopti la ureche: ESTI GRAS!',
                'As plange ca mi am pierdut un frate 😭'],
      correct_answer: 3
    },
    {
      text: "Daca ar fi dea masina peste tine, eu ce as face?",
      answers: ['As astepta, m as urca la volan si as da si in marsarier',
                'Te as trage inapoi',
                'Te as trage din fata ei 😇',
                'Ti as face poze stiind ca, pentru ca esti gras, tu ai lovi masina'],
      correct_answer: 2
    },
    {
      text: "De ce iti tot fur nasul?",
      answers: ['E un joculet doar al nostru si pentru mine e special',
                'Vrau sa te enervez',
                'Ma plictisesc',
                'Nu stiu'],
      correct_answer: 0
    },
    {
      text: "Ce esti tu pt mine?",
      answers: ['Fratior mai amare',
                'Prost',
                'Fratior mai mic',
                'Fratior de aceeasi varsta cu care pot sa ma distrez la o bere buna si cu care pot sa vorbesc si chestii serioase'],
      correct_answer: 3
    },
    {
      text: "De ce te iubesc eu pe tine?",
      answers: ['Nu o fac',
                'Habar nu am',
                'Ai gropite frumaose',
                'Imi plac gusturile la adidasi'],
      correct_answer: 1
    },
  ];
  userAnswers = new Array(this.questions.length).fill(-1);
  score = 0

  text: string = `
    <h1>La multi ani, puiule!! 🥳</h1>
    <p>
        Sper sa ai o zi cat se poate de minunata si exact asa cum iti dorest! Cam batranel ai ajuns. Incepi sa-mi calci pe urme cu 'HOOOOOPA SA' cand te asezi :))
        <b>Nu mai poti sa dai inapoi de acolo, ai grija!!</b>
        Te iubesc fraiere si sper ca stii asta si in momentele cand nu te iau in brate sau nu ti dau mesaj sa vad ce faci. Cand esti plecat acasa peste weekend, mereu
        mi se face dor de tine pentru ca tu esti persoana cu care ieseam pe afara si ma distram ^^ Cand o sa plec la master, plimbarile de seara cu tine o sa-mi lipseasca mai mult
        decat sunt pregatit sa accept 😿😿 Sa mi bag **** ca mi da o lacrima scriind asta 😢.
        Daca nimeni nu ti-a spus-o vreodata sau daca ti s-a spus si n-ai crezut, iti mai spun eu acum, sincer si din inima, ca facultatea asta a fost mai buna pentru ca te-am
        cunoscut. Mi-ai facut zilele mai interesante, plimbarile de 20 de kilometri mai scurte de 500 de metri, cursurile mai pline de companie si ras si viata mai mult mai
        buna ca in anul 1. Cand te-am meditat la PL nici nu stiam ce aventura frumoasa ma asteapta. Si acum cand ma gandesc ca nu stiam cum sa scap de tine atunci ca eram
        timid si anxios, ma face sa rad 😅😂. Enemies to firends is one of the best bromance story tho 👀
        Stiu ca o sa te am aproape muuult timp de aici incolo si sper sa-ti dau fetita sau baietelul la grinda intr-o buna zi (no pressure 🥰). Macar sa se joace impreuna cu ai
        mei. Doamne cand ma gandesc ca or sa ajunga asa timizi ca mine... O sa aiba nevoie 🤣🤣🤣
        La multi ani din nou!! La cat mai multe beri impreuna, plimbari de relaxare si discutii deep cum ne plac noua. ❤️❤️❤️
    </p>
  `
  displayedText: string = '';

  saveAnswer(questionIndex: number, answerIndex: number)
  {
    this.userAnswers[questionIndex] = answerIndex;
  }

  submitQuiz()
  {
    const wrong_questions = []
    this.score = 0
    for( let i = 0; i < this.questions.length; i++ )
      if( this.userAnswers[i] == this.questions[i].correct_answer )
        this.score += 1;
      else if(i != 2)
          wrong_questions.push(i + 1)

    if( this.score == this.questions.length - 1 )
    {
      alert(`Scorul de ${this.score}/${this.questions.length}. E bine. Cred ca te-ai incurcat la intrebarea 3. Toate sunt gresite. Esti deja acolo!!!!`)
      this.animateText(0);
    }
    else
      alert(`Scorul de ${this.score}/${this.questions.length}. Mai incearca daca vrei sa vezi finalul. Ai gresit la ${wrong_questions}`)
  }

  animateText(index: number = 0): void
  {
    if( index >= this.text.length )
        return;

    this.displayedText += this.text[index];
    setTimeout(() => this.animateText(index + 1), 10);
  }
}
