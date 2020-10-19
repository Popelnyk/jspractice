const group = {
    title: 'ex',
    students: ['1', '2', 'kok', 4, null],

    showList() {
        this.students.forEach((item) => console.log(this.title + ':' + item));
    }
}

group.showList();

for (const [g, k] of Object.entries(group)) {
    console.log(g, k);
}