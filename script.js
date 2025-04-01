const list = [
  {
    title: "Conhecer a necessidade de leitos:",
    text: [
      "Reconhecer especialidades e patologias;",
      "Subsidiar discussões tanto internas como externas (na Rede de Atenção à Saúde — RAS), que permitam o planejamento da ampliação e/ou readequação do perfil de leitos hospitalares ofertados.",
    ],
  },
  {
    title: "Otimizar a utilização dos leitos:",
    text: [
      "Manter a taxa de ocupação em limites adequados;",
      "Controlar o tempo médio de permanência nos diversos setores;",
      "Ampliar o acesso aos leitos e a outros serviços disponibilizados pela RAS;",
      "Otimizar a ocupação das Salas Cirúrgicas;",
      "Monitorar o número de procedimentos eletivos cancelados/suspensos, com a finalidade de reduzi-lo ao máximo; ",
      "Estabelecer mecanismos de apoio na perspectiva da redução do tempo de espera entre a indicação de terapia cirúrgica e a realização do procedimento.",
    ],
  },
  {
    title: "Controlar o uso de materiais especiais:",
    text: [
      "Auxiliar a gestão quanto ao controle e o uso racional de Órteses, Próteses e Materiais Especiais.",
    ],
  },
  {
    title: "Realizar a Gestão da Clínica:",
    text: [
      "Estabelecer e/ou monitorar o painel de indicadores da capacidade instalada hospitalar;",
      "Induzir à implantação dos mecanismos de gestão da clínica, tais como Kanban, Projeto Terapêutico Singular, Gestão da Fila;",
      "Promover o uso dinâmico dos leitos hospitalares, por meio do aumento de rotatividade e monitoramento das atividades de Gestão da Clínica desempenhadas pelas equipes assistenciais.",
    ],
  },
  {
    title:
      "Fazer Interface entre a gestão interna e a regulação de acesso hospitalar:",
    text: [
      "Permitir e aprimorar a interface entre a gestão interna hospitalar e a regulação de acesso hospitalar;",
      "Qualificar os fluxos de acesso aos serviços e às informações no ambiente hospitalar.",
    ],
  },
  {
    title: "Otimizar os recursos existentes:",
    text: [
      "Apontar necessidades de incorporação de tecnologias no âmbito hospitalar.",
    ],
  },
  {
    title: "Realizar a integralidade do cuidado:",
    text: [
      "Promover a permanente articulação do conjunto das especialidades clínicas e cirúrgicas, bem como das equipes multiprofissionais, garantindo a integralidade do cuidado no âmbito intra-hospitalar;",
      "Aprimorar e apoiar o processo integral do cuidado ao usuário dos serviços hospitalares, visando ao atendimento mais adequado às suas necessidades;",
      "Apoiar as equipes na definição de critérios para internação e instituição de alta hospitalar responsável; ",
      "Fornecer subsídios às Coordenações Assistenciais para que façam o gerenciamento dos leitos, sinalizando ocorrências locais que possam comprometer a assistência;",
      "Estimular o cuidado horizontal dentro da instituição.",
    ],
  },
  {
    title: "Realizar tomada de decisão:",
    text: [
      "Subsidiar a direção do hospital para a tomada de decisão internamente, e quando o Hospital dispor de Núcleo de Acesso e Qualidade (NAQH), pautá-lo pelo padrão de utilização de ofertas para tomada de decisão estratégica.",
    ],
  },
  {
    title: "Propor e atualizar protocolos:",
    text: [
      "Colaborar, tecnicamente, com dados de monitoramento, para a proposição e atualização de protocolos/diretrizes clínicas e terapêuticas e protocolos administrativos.",
    ],
  },
];

list.forEach((e, i) => {
  $("#list").append(
    `
        <div class="col-4">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                        <span class="number">
                            0${i + 1}
                        </span>
                        <span class="title">
                            ${e.title}
                        </span>
                    </button>
                </h2>
                <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul >
                            ${e.text
                              .map((item) => {
                                return `<li >${item}</li>`;
                              })
                              .join("")}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
  );
});
