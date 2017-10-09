import { NavController } from "ionic-angular";
import * as $ from "jquery";
import Piano from "../../services/piano";
import { Chart } from "chart.js";
import { Component, ViewChild } from "@angular/core";

export class AppModule {}
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("barCanvas") barCanvas;

  barChart: any;
  piano = new Piano();
  ger = 0;
  labels = [];
  series = [];
  private top1: string;
  private top2: string;
  private top1score: number;
  private top2score: number;
  private population: Array<string>;
  private searchWord: string;
  private speed: number;
  
  genAlgorithmn = this.ga("GCDFGCDFGCDFG", 2000, 7110);

  constructor(public navCtrl: NavController) {}

  getRandomLetter() {
    return String.fromCharCode(Math.floor(Math.random() * (125 - 48 + 1)) + 48);
  }

  similarString(x, y) {
    var count = 0;
	//Armazena o tamanho do elemento
    var length = Math.min(x.length, y.length);
    for (var i = 0; i < length; i++) {
	  //Pega o valor absoluto da subtração do código dos 
	  //caracteres e subtrai do valor acumulado
      count -= Math.abs(x.charCodeAt(i) - y.charCodeAt(i));
	  //Verifica se são os mesmos caracteres
      if (x.substring(i, i + 1) == y.substring(i, i + 1)) {
        count += 100;
      }
    }

    $("li>span").click(function() {
      $(this).css("background-color", "yellow");
    });

    return count / length;
  }
  
  /*
  * searchWord: Elemento inicial para base da geração da população
  *	populationSize: Tamanho da população a ser gerada;
  * speed: Velocidade em que as notas são tocadas no piano
  */
  ga(searchWord: string, populationSize: number, speed: number) {
	  
    this.speed = speed;
    //C – D – E – F – G – A – B
    //f h j l q e r
    this.searchWord = searchWord
      .replace(/C/g, "f")
      .replace(/D/g, "h")
      .replace(/E/g, "j")
      .replace(/F/g, "l")
      .replace(/G/g, "q")
      .replace(/A/g, "e")
      .replace(/B/g, "r");
    this.population = [];

    this.initializePopulation(populationSize);
  }

  // define fitness function
  private fitness(input) {
    return this.similarString(input, this.searchWord);
  }

  private initializePopulation(size: number) {
    // initialize population with random candidates
    for (var i = 0; i < size; i++) {
      var str = "";
      for (var j = 0; j < this.searchWord.length; j++) {
        str += this.getRandomLetter();
      }
      this.population[i] = str;
    }
  }

  // find best candidates
  private findBestCandidates() {
    this.top1 = this.population[0];
    this.top2 = this.population[1];
    this.top1score = this.top2score = -10000;

    // Find top 2
    for (var i = 0; i < this.population.length; i++) {
      var score = this.fitness(this.population[i]);
      if (score > this.top1score) {
        this.top1 = this.population[i];
        this.top1score = score;
      } else if (score > this.top2score) {
        this.top2 = this.population[i];
        this.top2score = score;
      }
    }
  }

  private generateNextGeneration() {
    // Generate new strings
    for (var i = 0; i < this.population.length; i++) {
	  //Calcula o ponto de corte da string para fazer a geração do filho
      var splitAt = Math.floor(Math.random() * this.searchWord.length);
	  //Pega os dois melhores elementos da geração anterior para ser os pais 
      this.population[i] =
        this.top1.substring(0, splitAt) +
        this.top2.substring(splitAt, this.searchWord.length);

      // mutation propability is 0.25
      if (Math.random() < 0.25) {
        var mutateAt = Math.floor(Math.random() * this.searchWord.length) + 1;
        this.population[i] =
          this.population[i].substring(0, mutateAt - 1) +
          this.getRandomLetter() +
          this.population[i].substring(mutateAt, this.searchWord.length);
      }
    }
  }
  public play() {
    $(".1C").click(function() {
      $(this).css("background-color", "yellow");
    });
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  ionViewDidLoad() {
    this.piano.run();
  }
  public async run() {
    this.findBestCandidates();
    this.generateNextGeneration();

	this.findBestCandidates();
	
    // chekc if we already have a perfect candidate
    if (this.fitness(this.top1) !== 100) {
      setTimeout(this.run.bind(this), this.speed);
    }

    console.log(this.top1);
    console.log(this.fitness(this.top1));

    this.ger++;
    this.labels.push("" + this.ger);
    this.series.push(this.fitness(this.top1));
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: this.labels,
        datasets: [
          {
            label: "# of Votes",
            data: this.series,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    for (var i = 0; i < this.top1.length - 1; i++) {
      await this.piano.playSound(this.top1.charCodeAt(i));
      await this.delay(755);
    }
  }
}
