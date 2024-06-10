/* Desenvolva seu código abaixo */

function playRockPaperScissor(player1, player2){

    if (player1 == player2) { // Lógica do empate
        return "Empate!";
    } else if ( // Lógica da vitória do Jogador 1
        (player1 == "Pedra" && player2 == "Tesoura") ||
        (player1 == "Papel" && player2 == "Pedra") ||
        (player1 == "Tesoura" && player2 == "Papel")
    ) {
        return "Jogador 1 venceu!";
    } else if ( // Lógica da vitória do Jogador 2
        (player2 == "Pedra" && player1 == "Tesoura") ||
        (player2 == "Papel" && player1 == "Pedra") ||
        (player2 == "Tesoura" && player1 == "Papel")
    ) {
        return "Jogador 2 venceu!";
    } else { // Caso seja atribuído um valor inválido
        return "Valor inválido!";
    }

}