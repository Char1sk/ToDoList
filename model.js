var example1 = new Vue({
    el: '.mainWindow',
    data: {
        activeClass: "",
        deleteOn: false,
        newItemOn: false,
        classes: [
            { name: 'AAA' },
            { name: 'BBB' },
            { name: 'CCC' },
            { name: 'DDD' },
            { name: 'EEE' }
        ],
        things: {
            AAA: [
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'}
            ],
            BBB: [
                {subtitle: 'bbb', content: 'Aaaaaa', deadline: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'},
                {subtitle: 'aaa', content: 'Aaaaaa', deadline: '2020'}
            ]
        }
    },
    methods: {
        newOneClass: function(){
            let newOne = prompt("请输入新类别名称：");
            if(newOne != null && newOne != "")
                this.classes.push({ name: newOne });
        },
        deleteButtonOn: function(){
            this.deleteOn = !this.deleteOn;
            if(this.deleteOn)
                document.getElementsByClassName("deleteOne")[0].style.borderStyle="inset";
            else
                document.getElementsByClassName("deleteOne")[0].style.borderStyle="outset";
        },
        chooseClass: function(className){
            this.activeClass = className;
            this.newItemOn = true;
            // document.getElementsByClassName("singleClass")[0].style.backgroundColor = yellow;
            // this.things[index].style.backgroundColor = red;
            // document.getElementById(className).style.backgroundColor = red;
        },
        deleteClass: function(className){
            for(let i = 0; i != this.classes.length; ++i)
            {
                if(this.classes[i].name == className)
                {
                    this.classes.splice(i, 1);
                    break;
                }
            }
            delete this.things[className];
            if(className == this.activeClass)
            {
                this.activeClass = "";
                this.newItemOn = false;
            }
        },
        newItem: function(){
            if(this.things[this.activeClass] == undefined)
                this.things[this.activeClass] = [];
            let sub = prompt("请输入小标题：");
            let con = prompt("请输入代办内容：");
            let ddl = prompt("请输入截止时间，形如：", "2020/12/31");
            this.things[this.activeClass].push({ 
                subtitle: sub, content: con, deadline: ddl });
            
        }
    }
})