const CompilerWorker = require("worker-loader!./worker");
const compilerWorker = new CompilerWorker();

const jsonInput = document.getElementsByName('json')[0];
const classInput = document.getElementsByName('mapping')[0];
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(e) {
    compilerWorker.postMessage(jsonInput.value + '||' + classInput.value);
});

compilerWorker.addEventListener('message', function(e){
    document.getElementById('output').innerHTML = '<pre>' + e.data + '</pre>';
});
