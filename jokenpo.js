/*
 * Jokempo
 * Mantém toda a lógica e dados do jogo.
 */
var Jokempo = function() {

  /* Possiveis escolhas */
  this.possible_weapons = ['pedra', 'papel', 'tesoura'];

  /* Sua escolha */
  this.user_weapon = null;

  /* PC escolha */
  this.pc_weapon = null;


  /**
   * Este método é responsável por obter a arma do usuário
   */
  this.getUserWeapon = function() {
    var typed_weapon;

    while (this.possible_weapons.indexOf(typed_weapon) < 0) {
      typed_weapon = this.askUserWeapon();

      if (this.possible_weapons.indexOf(typed_weapon) < 0) {
        alert("Você escolheu uma arma inválida. Digite novamente");
      }
    }

    this.user_weapon = typed_weapon;
  }

  /**
   * Este método é responsável por pedir ao usuário uma arma válida
   */
  this.askUserWeapon = function() {
    var message = 'Escolha sua arma! [ ';

    for(input_option in this.possible_weapons) {
      message += this.possible_weapons[input_option];

      if (input_option < (this.possible_weapons.length - 1)) {
        message += ' / ';
      }
    }

    message += ' ]:';

    return prompt(message);
  }

  this.writeResults = function(message, win) {
    if (win === true) {
      title_message = "Você venceu! \\o/";
    }
    else if (win === false) {
      title_message = "Você perdeu! :(";
    }
    else {
      title_message = "Empatou, jogue novamente!";
    }

    document.write('<h1>' + title_message + '</h1>');
    document.write('<ul><li>Sua ARMA: <strong>' + this.user_weapon + '</strong></li>');
    document.write('<li>PC ARMA: <strong>' + this.pc_weapon + '</strong></li></ul>');

    if (win === false) {
      document.write("<p>Desculpe, não foi dessa vez! Mas você ainda pode tentar novamente.</p>");
    }
    else {
      document.write('<p>' + message + '</p>');
    }
    document.write('<p><a href="javascript:window.location.reload();">Jogar novamente</a></p>');
  }

  /**
   * O jogo irá randomizar as armas e imprimir os resultados.
   */
  this.doJokempo = function() {
    this.getUserWeapon();

    // Randomize algo entre 0 e 1 e multiplique-o por possíveis armas
    this.pc_weapon = this.possible_weapons[Math.floor(Math.random() * this.possible_weapons.length)];

    // Vamos batalhar!
    if (this.user_weapon == this.pc_weapon) {
      this.writeResults('Você escolheu a mesma arma do PC');
    }
    else if (this.user_weapon == 'pedra') {
      if (this.pc_weapon == 'tesoura') {
        this.writeResults("Sua pedra destruiu a tesoura!", true);
      }
      else {
        this.writeResults('', false);
      }
    }
    else if (this.user_weapon == 'papel') {
      if (this.pc_weapon == 'pedra') {
        this.writeResults("Seu papel embrulhou a pedra inteira!", true);
      }
      else {
        this.writeResults('', false);
      }
    }
    else if (this.user_weapon == 'tesoura') {
      if (this.pc_weapon == 'papel') {
        this.writeResults("Sua tesoura acabou de cortar todos os papéis!", true);
      }
      else {
        this.writeResults('', false);
      }
    }
  }
  this.doJokempo();
}
