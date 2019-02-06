#! /usr/bin/env node

const {
    exec
} = require('child_process');

const {
    promisify
} = require('util');

const execPromise = promisify(exec);

process.argv.splice(0, 2);

const [url, numOfmeasurement = 30, verbose = true] = process.argv;

let measurement = [];

let i = 0;

const getResult = () => {

    const avg = measurement.reduce( (initial, mesurement) => initial+mesurement,0) / measurement.length

    console.log(`\n\n${url} \n${i} measurement with an average TTFB of ${avg} seconds \n`);
};


process.on('SIGINT', getResult);


(async () => {

    for (i ; i < parseInt(numOfmeasurement); i++) {

        const responsefromCurl = await execPromise(`curl -s -L -o /dev/null -w %{time_starttransfer} ${url}`);

        //await new Promise( (resolve, reject) => setTimeout( () => resolve(), 3000 ));

        measurement.push(parseFloat(responsefromCurl.stdout))

        if(verbose) console.log(responsefromCurl.stdout);

    }

    getResult();


})()
.catch(e => 'Error ' + e);