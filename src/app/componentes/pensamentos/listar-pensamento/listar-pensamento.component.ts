import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'A transformação digital reconfigurou a paisagem econômica impulsionando a automação e a inovação em todos os setores A inteligência artificial a análise de dados e a Internet das Coisas são os pilares dessa mudança promovendo eficiência personalização e novas oportunidades de negócios Essa revolução tecnológica está moldando o futuro trazendo desafios e possibilidades sem precedentes,',
      autoria: 'Angular',
      modelo: 'modelo3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
