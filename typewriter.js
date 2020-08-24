const sentence = 'hello lighthouse';
for(let i = 0; i< sentence.length; i++) {
  setTimeout(()=>(process.stdout.write(sentence[i])),i * 50);
};
setTimeout(()=>(process.stdout.write('\n')),50 * sentence.length);
