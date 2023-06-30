const { exec } = require('child_process');

function installDependencies() {
    const commands =[
        'mkdir node_modules',
        'npm install mysql',
        'npm install pg --save',
        'npm install node-cron'
    ];

    commands.forEach(command => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro na instalação das dependências: ${error}`);
                return;
            }
            console.log(command);
        }); 
    });
}

installDependencies();
