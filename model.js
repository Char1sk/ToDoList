var example1 = new Vue({
    el: '.body',
    data: {
        classes: [
            { name: 'AAA' },
            { name: 'BBB' },
            { name: 'CCC' },
            { name: 'DDD' },
            { name: 'EEE' }
        ],
        things: {
            AAA: [
                {subtitle: 'aaa', content: 'Aaaaaa', ddl: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', ddl: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', ddl: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', ddl: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', ddl: '2020'}
            ],
            BBB: [
                {subtitle: 'bbb', content: 'Aaaaaa', ddl: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', ddl: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', ddl: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', ddl: '2020'}
            ]
        }
    }
})