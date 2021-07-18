import backgroundTwo from '../../../images/background/bg2.png'
import darthVader from '../../../images/elements/vader.png'
import footer from '../footer'

let textContent = `
Lucas ipsum dolor sit amet antilles binks organa hutt darth ackbar hutt darth k-3po kashyyyk. Dooku lars endor skywalker calamari kamino solo. K-3po binks mandalorians leia. Thrawn ventress hutt yoda darth antilles jade r2-d2 padmé. Coruscant biggs mace mon skywalker solo. Amidala kit anakin mandalorians skywalker qui-gon anakin leia. Windu dagobah jade tatooine. R2-d2 mandalorians r2-d2 leia jar antilles watto dagobah mon. Sidious moff r2-d2 yoda moff. Solo mustafar skywalker mandalore wedge. Luke antilles fisto jawa.

Antilles leia organa darth padmé. Solo solo twi'lek vader antilles. Solo endor mandalore kessel windu darth. Darth dooku mandalore leia. Grievous c-3po vader darth binks kessel. Dantooine dantooine calamari leia jango jabba. Hutt yoda organa solo c-3po biggs. Dooku padmé sebulba antilles alderaan solo utapau chewbacca. Luuke greedo amidala droid antilles. Yavin skywalker wedge jade hoth. Amidala cade luke binks kamino. Chewbacca kamino ponda hutt bespin windu yavin windu. Sith hutt kit fett. Han leia gamorrean solo baba kenobi.
`

let HomeSectionTwo = `
<section class="section background--one" style="background-image: url(${backgroundTwo})">
  <div>
    <img src="${darthVader}" alt="Vader" width="300px" heigth="auto">
    <div>
      <p>
        ${textContent}
      </p>
    </div>
  </div>
  ${footer}
</section>
`

export default HomeSectionTwo
