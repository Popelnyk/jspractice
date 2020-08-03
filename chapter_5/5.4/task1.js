let styles = ['jazz', 'bluzz'];

styles.push('rock-n-roll');
styles[Math.trunc(styles.length / 2)] = 'classics';

console.log(styles[0]);

styles.shift();
styles.unshift('rap', 'reggi');

console.log(styles);