import readline from "../node_modules/readline-sync/lib/readline-sync.js";
//print
export function print(str) {
    console.log(str);
}

//main menu
export function displayMenu() {
    print(`Select an option: \n'w' to walk\n'c' to camp`);
    let userOption = readline.question();
    switch(userOption) {
        case 'w':
            //run walk function;
            break;
        case 'c':
            //run camp function;
            break;
        default:
            print(`invalid option`);
            break;
    }
}