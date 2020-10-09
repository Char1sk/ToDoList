var example1 = new Vue({
    el: '.mainWindow',
    data: {
        activeClass: "",
        deleteOn: false,
        newItemOn: false,
        // 我想搞本地文件存读...但是感觉好难？
        classes: [
            { name: '数据结构' },
            { name: '计组' },
            { name: 'JavaScript' },
            { name: 'Vue.js' },
            { name: 'Html5/Css3' }
        ],
        things: {
            '数据结构': [
                {subtitle: '数', content: '平衡树旋转', deadline: '2020/11/01', isDone: false},
                {subtitle: '线性表', content: '链表实现', deadline: '2020/11/02', isDone: false}
            ],
            '计组': [
                {subtitle: 'MIPS', content: '熟悉指令', deadline: '2020/11/03', isDone: false}
            ],
            'JavaScript': [
                {subtitle: '语法', content: '较熟练运用', deadline: '2020/12/31', isDone: false},
                {subtitle: '文件', content: '本地JSON存读', deadline: '2020/12/31', isDone: false}
            ],
            'Vue.js': [
                {subtitle: '熟悉', content: '能用就行！', deadline: '2020/12/31', isDone: false}
            ],
            'Html5/Css3': [
                {subtitle: 'Html5', content: '熟悉结构', deadline: '2021/01/01', isDone: false},
                {subtitle: 'Css3', content: '练习排版', deadline: '2021/01/02', isDone: false}
            ],
        }
    },
    methods: {
        newOneClass: function(){
            let newOne = prompt("请输入新类别名称：");
            if(newOne)
                this.classes.push({ name: newOne });
        },
        deleteButtonOn: function(){
            this.deleteOn = !this.deleteOn;
            // 羸弱的动画
            if(this.deleteOn)
                document.getElementsByClassName("deleteOne")[0].style.borderStyle="inset";
            else
                document.getElementsByClassName("deleteOne")[0].style.borderStyle="outset";
        },
        chooseClass: function(className){
            this.activeClass = className;
            this.newItemOn = true;
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
            // 我想做一个弹窗多个输入...技术力过低
            let sub = prompt("请输入小标题：");
            let con = prompt("请输入待办内容：");
            let ddl = prompt("请输入截止时间，形如：", "2021/01/01");
            if(sub && con && ddl)
                this.things[this.activeClass].push({ 
                    subtitle: sub, content: con, deadline: ddl });
        },
        deli: function(idx){
            this.things[this.activeClass].splice(idx, 1);
        },
        undo: function(idx){
            this.things[this.activeClass][idx].isDone = false;
            document.getElementsByClassName("thing")[idx].style.backgroundColor = "rgb(222,141,135)";
        },
        done: function(idx){
            this.things[this.activeClass][idx].isDone = true;
            document.getElementsByClassName("thing")[idx].style.backgroundColor = "rgb(164,231,168)";
        }
    }
})