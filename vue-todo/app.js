//本地存储的存
// localstorage.setItem(name,val);
//读
// localstorage.getItem(name);

var storage = {
  save:function(key,val){
    return localStorage.setItem(key,JSON.stringify(val))
  },
  get:function(key){
    return JSON.parse(localStorage.getItem(key)) || []
  }
}
//
// var list = [
//   {
//     title:"vue学习计划",
//     isCompleted:false
//   },
//   {
//     title:"我想去嵩山少林学武功",
//     isCompleted:true
//   }
// ];

var app = new Vue({
  el:"#app",
  data:{
    listItems:storage.get("todolist"),
    addInp:"",//输入框里面的值
    editingItem:"",//记录正在编辑的那一项
    beforeEdit:"" //记录编辑之前的值
  },
  computed:{
    num:function(){
      return this.listItems.filter(function(x){
        return !x.isCompleted
      }).length;
    }
  },
  watch:{
    listItems:function(){
      storage.save("todolist",this.listItems)
    }
  },
  //methods是专门用来存放事件函数的。
  methods:{
    //添加列表
    addList:function(){
      this.listItems.push({title:this.addInp});
      this.addInp = "";
    },
    //删除列表
    delList:function(item){
      let index = this.listItems.indexOf(item);
      this.listItems.splice(index,1);
    },
    //添加编辑
    addEdit:function(item){
      this.editingItem = item;
      this.beforeEdit = item.title;
    },
    //修改列表
    editList:function(){
      this.editingItem = "";
    },
    //返回修改
    goback:function(item){
      item.title = this.beforeEdit;
      this.editingItem = "";
    }
  },
  //注册一个局部的自定义指令
  directives:{
    focus:{
      update:function(el,binding){
        if(binding.value){
          el.focus();
        }
      }
    }
  }
})
