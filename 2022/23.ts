function executeCommands(commands: string[]): number[] {
  const registers = [0, 0, 0, 0, 0, 0, 0, 0];
  let i = 0;
  while (i < commands.length) {
    const [command, args] = commands[i].split(" ");
    const [arg1, arg2] = args.split(",");
    const arg1Reg = arg1.charAt(2);
    const arg2Reg = arg2?.charAt(2);
    switch (command) {
      case "MOV":
        if (arg1.charAt(0) === "V") {
          registers[arg2Reg] = registers[arg1Reg];
        } else {
          registers[arg2Reg] = parseInt(arg1);
        }
        i++;
        break;
      case "INC":
        registers[arg1Reg] = (registers[arg1Reg] + 1) % 256;
        i++;
        break;
      case "DEC":
        registers[arg1Reg] = (registers[arg1Reg] - 1 + 256) % 256;
        i++;
        break;
      case "ADD":
        registers[arg1Reg] = (registers[arg1Reg] + registers[arg2Reg]) % 256;
        i++;
        break;
      case "JMP":
        if (registers[0] === 0) {
          i++;
        } else {
          i = parseInt(arg1);
        }
        break;
    }
  }
  return registers;
}

export { executeCommands };
