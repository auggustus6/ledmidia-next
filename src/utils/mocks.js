const panels = [
  {
    title: "Andaló",
    address: "Av. Alberto Andaló, 4300 - Vl. Redentora",
    reference: "Av. Alberto Andaló em frente ao Mc’Donalds",
    backgroundImg: "/img/andalo.jpeg",
    download: "/download/andalo.pdf",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3729.2195161953728!2d-49.38771988832317!3d-20.822840366653036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ5JzIyLjIiUyA0OcKwMjMnMDYuNSJX!5e0!3m2!1spt-BR!2sbr!4v1684245557788!5m2!1spt-BR!2sbr",
  },
  {
    title: "Iguatemi",
    address: "Av. Pres. Juscelino K. de oliveira, 4200",
    reference: "Rotatória de acesso de frente ao Shopping Iguatemi",
    backgroundImg: "/img/iguatemi.jpeg",
    download: "/download/iguatemi.pdf",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3728.1784227449766!2d-49.416027788322005!3d-20.864857468020972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDUxJzUzLjUiUyA0OcKwMjQnNDguNCJX!5e0!3m2!1spt-BR!2sbr!4v1684245604127!5m2!1spt-BR!2sbr",
  },
  {
    title: "Redentora",
    address: "Av. Bernardino de Campos, 4705",
    reference:
      "Av. Faria Lima com R. Bernardino de Campos, Auto Posto Elefantinho",
    backgroundImg: "/img/redentora.jpeg",
    download: "/download/redentora.pdf",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3729.21986522649!2d-49.39489538832322!3d-20.822826266652573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ5JzIyLjIiUyA0OcKwMjMnMzIuMyJX!5e0!3m2!1spt-BR!2sbr!4v1684245638700!5m2!1spt-BR!2sbr",
  },
  {
    title: "Região Norte",
    address: "Av. Cenobelino de Barros Serra",
    reference:
      "Av. Cenobelino de Barros (acesso região Norte / Shopping Norte)",
    backgroundImg: "/img/norte.jpeg",
    download: "/download/regiaonorte.pdf",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3729.9805003958268!2d-49.39023128832394!3d-20.792076765653267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzMxLjUiUyA0OcKwMjMnMTUuNSJX!5e0!3m2!1spt-BR!2sbr!4v1684245683483!5m2!1spt-BR!2sbr",
  },
  {
    title: "Telus",
    address: "Av. Arthur Nonatto",
    reference:
      "Av. Arthur Nonatto com Marg. Washington Luiz (sentido Rio Preto Shopping)",
    backgroundImg: "/img/telus.jpeg",
    download: "/download/telus.pdf",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3729.1939942300082!2d-49.39720948832312!3d-20.823871366686532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ5JzI2LjAiUyA0OcKwMjMnNDAuNyJX!5e0!3m2!1spt-BR!2sbr!4v1684245708594!5m2!1spt-BR!2sbr",
  },
  // {
  //   title: "Murchid Homsi",
  //   address: "Av. Murchid Homsi",
  //   reference: "Av. Murchid Homsi",
  //   backgroundImg: "/img/homsi.png",
  //   download: "/download/homsi.pdf",
  //   map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3729.342403269016!2d-49.36880848832347!3d-20.817875466491515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ5JzA0LjQiUyA0OcKwMjEnNTguNCJX!5e0!3m2!1spt-BR!2sbr!4v1684245738454!5m2!1spt-BR!2sbr",
  // },
  {
    title: "Philadelpho",
    address: "Av. Philadelpho Manoel Gouveia Neto",
    reference: "Av. Philadelpho (Mc Donald’s)",
    backgroundImg: "/img/philadelpho.jpeg",
    download: "/download/philadelpho.pdf",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3729.7906469355917!2d-49.37975628832381!3d-20.799755865902622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ3JzU5LjEiUyA0OcKwMjInMzcuOCJX!5e0!3m2!1spt-BR!2sbr!4v1684245759804!5m2!1spt-BR!2sbr",
  },
  {
    title: "Renê",
    address: "Av. Bady Bassit",
    reference: "Av. Bady Bassit | sentido centro",
    backgroundImg: "/img/rene.jpeg",
    download: "/download/rene.pdf",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3729.2495023428937!2d-49.4016014883235!3d-20.821628966613552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ5JzE3LjkiUyA0OcKwMjMnNTYuNSJX!5e0!3m2!1spt-BR!2sbr!4v1684245784728!5m2!1spt-BR!2sbr",
  },
  {
    title: "Anúbis",
    address: "Av. Alberto Andaló,",
    reference: "Av. Alberto Andaló sentido Centro",
    backgroundImg: "/img/anubis.jpeg",
    download: "/download/anubis.pdf",
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3729.316842569486!2d-49.38479288832317!3d-20.818908266525074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ5JzA4LjEiUyA0OcKwMjInNTYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1684245812774!5m2!1spt-BR!2sbr",
  },
];
export default panels;
