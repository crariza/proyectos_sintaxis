function rock_paper_scissors_1 (rounds) {
    console.log(`The amount of rounds that you will play is: ${rounds}`);
    console.log("\n");
    let user_victories = 0;
    let computer_victories = 0;

    do {
        const options = ['rock', 'paper', 'scissors'];
        let user_selection = prompt("Choose your option rock - paper - scissors");
        while (!options.includes(user_selection)) {
            user_selection = prompt("Invalid input, please choose between rock / paper / scissors: \n");
        }
        let computer_selection = options[Math.floor(Math.random()*3)];
        console.log(`The human selection is: ${user_selection}`);
        console.log(`The computer selection is: ${computer_selection}`);
        
        if (user_selection === computer_selection) {
            console.log("Let's go one more time, is a draw!");
        } else if ((user_selection == 'rock' && computer_selection == 'scissors') || (user_selection == 'paper' &&computer_selection == 'rock') || (user_selection == 'scissors' && computer_selection == 'paper')) {
            console.log("That is a victory for the user!");
            user_victories+=1;
        } else {
            console.log("That is a victory for the computer!");
            computer_victories+=1
        }
        
        console.log(`The user has ${user_victories} victories`);
        console.log(`The computer has ${computer_victories} victories`);
        console.log("\n");

    } while ((user_victories != Math.floor(rounds/2)+1) && (computer_victories != Math.floor(rounds/2)+1));

    if (user_victories === Math.floor(rounds/2)+1) {
        console.log("The user is the winner!");
        return user_victories;
    } else {
        console.log("The computer is the winner!");
        return computer_victories;
    }
    
}

function rock_paper_scissors_2 (rounds) {
    console.log(`The amount of rounds that you will play is: ${rounds}`);
    console.log("\n");
    let user_victories = 0;
    let computer_victories = 0;

    do {
        const options = ['rock', 'paper', 'scissors'];
        let user_selection = prompt("Choose your option rock - paper - scissors");
        while (!options.includes(user_selection)) {
            user_selection = prompt("Invalid input, please choose between rock / paper / scissors: \n");
        }
        let computer_selection = options[Math.floor(Math.random()*3)];
        console.log(`The human selection is: ${user_selection}`);
        console.log(`The computer selection is: ${computer_selection}`);
        
        if (user_selection === computer_selection) {
            console.log("Let's go one more time, is a draw!");
        } else if ((user_selection == 'rock' && computer_selection == 'scissors') || (user_selection == 'paper' &&computer_selection == 'rock') || (user_selection == 'scissors' && computer_selection == 'paper')) {
            console.log("That is a victory for the user!");
            user_victories+=1;
            computer_victories = 0;
        } else {
            console.log("That is a victory for the computer!");
            computer_victories+=1
            user_victories = 0;
        }
        
        console.log(`The user has ${user_victories} victories`);
        console.log(`The computer has ${computer_victories} victories`);
        console.log("\n");

    } while ((user_victories != Math.floor(rounds/2)+1) && (computer_victories != Math.floor(rounds/2)+1));

    if (user_victories === Math.floor(rounds/2)+1) {
        console.log("The user is the winner!");
        return user_victories;
    } else {
        console.log("The computer is the winner!");
        return computer_victories;
    }
    
}

const rounds_to_play= parseInt(prompt("How many rounds you want to play?"));
const game_type = parseInt(prompt("What kind of game you want to play? 1: normal or 2: consecutive?"));
if (game_type === 1) {
    rock_paper_scissors_1(rounds_to_play);
} else {
    rock_paper_scissors_2(rounds_to_play);
}



